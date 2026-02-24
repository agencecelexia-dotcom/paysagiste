import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as fs from "fs";
import * as path from "path";

const FILE = path.join(process.cwd(), "src/data/services.ts");

async function checkAuth() {
  const store = await cookies();
  return store.has("adminAuth");
}

function readData() {
  const content = fs.readFileSync(FILE, "utf-8");
  const match = content.match(/export const services[^=]*=\s*(\[[\s\S]*?\]);/);
  if (!match) return [];
  return JSON.parse(match[1].replace(/\/\/[^\n]*/g, "").replace(/,(\s*[\]}])/g, "$1"));
}

function writeData(data: unknown[]) {
  const content = `import type { Service } from "@/types";\n\nexport const services: Service[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(FILE, content, "utf-8");
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  try { return NextResponse.json(readData()); }
  catch { return NextResponse.json([], { status: 200 }); }
}

export async function POST(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const body = await request.json();
  const data = readData();
  const newItem = { ...body, id: body.slug || Date.now().toString() };
  data.push(newItem);
  writeData(data);
  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const body = await request.json();
  const data = readData() as Array<Record<string, unknown>>;
  const idx = data.findIndex((s) => s.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Introuvable" }, { status: 404 });
  data[idx] = body;
  writeData(data);
  return NextResponse.json(body);
}

export async function DELETE(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const data = readData() as Array<Record<string, unknown>>;
  const filtered = data.filter((s) => s.id !== id);
  writeData(filtered);
  return NextResponse.json({ ok: true });
}
