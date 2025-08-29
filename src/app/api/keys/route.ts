import { NextRequest } from "next/server";
import { insertKey, listKeys, revokeKey } from "~/server/key";
import { createKeySchema, deleteKeySchema } from "~/server/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name } = createKeySchema.parse(body);
    const created = await insertKey(name);
    return Response.json(created, { status: 201 });
  } catch (e: any) {
    return Response.json(
      { error: e.message ?? "Invalid request" },
      { status: 400 },
    );
  }
}

export async function GET() { // list all key that exist
  const rows = await listKeys();
  const items = rows.map((row) => ({
    id: row.id,
    name: row.name,
    masked: `sk_live_...${row.last4}`,
    createdAt: row.createdAt,
    revoked: !!row.revoked,
  }));
  return Response.json({ items });
}

export async function DELETE(req: NextRequest) {
  try {
    const id = new URL(req.url).searchParams.get("id");
    const { id: parsedId } = deleteKeySchema.parse({ id });
    const ok = await revokeKey(parsedId);
    if (!ok) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ success: true });
  } catch (e: any) {
    return Response.json(+{ error: e.message ?? "Invalid request" }, {
      status: 400,
    });
  }
}
