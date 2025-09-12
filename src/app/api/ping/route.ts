import type { NextRequest } from "next/server";
import { verifyKey } from "~/server/key";
import { db } from "~/server/db";
import { recipes } from "~/server/db/schema"; // or your table

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key") ?? "";
  const result = await verifyKey(apiKey);
  if (!result.valid) {
    return Response.json({ error: result.reason }, { status: 401 });
  }

  // Fetch all data from the table
  const allData = await db.select().from(recipes);

  return Response.json(
    { ok: true, message: "Hello GET", keyId: result.keyid, data: allData },
    { status: 200 },
  );
}
