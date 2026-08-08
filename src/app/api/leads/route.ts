import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Vercel's serverless filesystem is read-only except for /tmp, and /tmp is
// wiped between invocations — this is a mock persistence layer for the
// assignment, not production storage. Swap for a real DB (Postgres, etc.)
// before shipping.
const DATA_DIR = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

type Lead = {
  name: string;
  email: string;
  company: string;
  message: string;
  teamSize: string;
  domain: string;
  createdAt: string;
};

async function readLeads(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeLeads(leads: Lead[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message, teamSize, domain } = body as Partial<Lead>;

  const trimmed = {
    name: (name ?? "").toString().trim(),
    email: (email ?? "").toString().trim(),
    company: (company ?? "").toString().trim(),
    message: (message ?? "").toString().trim(),
  };

  const missing: string[] = [];
  if (!trimmed.name) missing.push("name");
  if (!trimmed.email) missing.push("email");
  if (!trimmed.company) missing.push("company");
  if (!trimmed.message) missing.push("message");

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(", ")}.` },
      { status: 400 }
    );
  }

  if (trimmed.name.length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmed.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (trimmed.message.length < 10) {
    return NextResponse.json(
      { error: "Tell us a little more — message must be at least 10 characters." },
      { status: 400 }
    );
  }

  const lead: Lead = {
    name: trimmed.name,
    email: trimmed.email,
    company: trimmed.company,
    message: trimmed.message,
    teamSize: teamSize ?? "",
    domain: domain ?? "",
    createdAt: new Date().toISOString(),
  };

  const leads = await readLeads();
  leads.push(lead);
  await writeLeads(leads);

  return NextResponse.json({ ok: true, lead }, { status: 201 });
}

export async function GET() {
  const leads = await readLeads();
  return NextResponse.json({ count: leads.length, leads });
}
