import { NextRequest } from "next/server";
import { verifyKey } from "~/server/key";

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get("x-api-key") ?? "";
  const result = await verifyKey(apiKey);

  if (!result.valid) {
    return Response.json({ error: result.reason }, { status: 401 });
  }
  
  const body = await req.json().catch(() => null);
  
  return Response.json(
    { ok: true, message: "Hello POST", receive: body, keyId: result.keyid },
    { status: 200 },
  );
}
