import type { NextRequest } from "next/server";
import { verifyKey } from "~/server/key";

export async function GET(request: NextRequest) {
    const apiKey = request.headers.get("x-api-key") ?? "";
    const result = await verifyKey(apiKey);
    if (!result.valid) {
        return Response.json({ error: result.reason }, { status: 401 });
    }
    return Response.json(
        { ok : true, message: "Hello GET", keyId: result.keyid }, 
        {status: 200}
    );
}