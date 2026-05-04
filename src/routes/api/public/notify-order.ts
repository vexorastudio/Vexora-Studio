import { createFileRoute } from "@tanstack/react-router";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/telegram";

export const Route = createFileRoute("/api/public/notify-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
        const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
        if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY || !TELEGRAM_CHAT_ID) {
          return new Response(JSON.stringify({ error: "not_configured" }), { status: 500 });
        }

        let body: any;
        try { body = await request.json(); } catch { return new Response("bad json", { status: 400 }); }

        const esc = (s: string) => String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));
        const name = esc(body.name || "");
        const email = esc(body.email || "");
        const tg = body.telegram ? esc(body.telegram) : "—";
        const type = body.project_type ? esc(body.project_type) : "—";
        const msg = body.message ? esc(body.message) : "—";
        const lang = esc(body.lang || "");

        const text =
          `🚀 <b>Нова заявка / Vexora Studio</b>\n\n` +
          `👤 <b>Ім'я:</b> ${name}\n` +
          `✉️ <b>Email:</b> ${email}\n` +
          `💬 <b>Telegram:</b> ${tg}\n` +
          `🛠 <b>Тип:</b> ${type}\n` +
          `🌐 <b>Мова:</b> ${lang}\n\n` +
          `📝 <b>Повідомлення:</b>\n${msg}`;

        const r = await fetch(`${GATEWAY_URL}/sendMessage`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": TELEGRAM_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
        });
        if (!r.ok) {
          const t = await r.text();
          return new Response(JSON.stringify({ error: "telegram_failed", details: t }), { status: 502 });
        }
        return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
      },
    },
  },
});