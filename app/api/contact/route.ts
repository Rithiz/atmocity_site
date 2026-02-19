import { NextResponse } from "next/server";

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Log dans le terminal (serveur Next)
    console.log("===== CONTACT PAYLOAD (API) =====");
    console.log(body);
    console.log("=================================");

    const url = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (!url) {
      return NextResponse.json(
        { ok: false, error: "GOOGLE_SHEET_WEBAPP_URL manquant" },
        { status: 500 }
      );
    }

    // ✅ Validation minimale
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();

    if (!name) return NextResponse.json({ ok: false, error: "Nom requis" }, { status: 400 });
    if (!isEmail(email)) return NextResponse.json({ ok: false, error: "Email invalide" }, { status: 400 });

    // ✅ Envoie propre (avec org)
    const payload = {
      name,
      email,
      org: String(body?.org ?? "").trim(),
      sites: String(body?.sites ?? "").trim(),
      slot: String(body?.slot ?? "").trim(),
      page: String(body?.page ?? "").trim(),
      userAgent: String(body?.userAgent ?? "").trim(),
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
    });

    const text = await res.text();
    console.log("===== APPS SCRIPT RESPONSE =====");
    console.log("Status:", res.status);
    console.log("Raw:", text);
    console.log("================================");

    let json: any = null;
    try { json = JSON.parse(text); } catch { json = { ok: res.ok, raw: text }; }

    return NextResponse.json(json, { status: res.ok ? 200 : 400 });

  } catch (e: any) {
    console.error("CONTACT API ERROR:", e);
    return NextResponse.json(
      { ok: false, error: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}