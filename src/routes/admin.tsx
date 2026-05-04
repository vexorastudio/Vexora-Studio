import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin · Vexora Studio" }] }),
  component: Admin,
});

type Order = {
  id: string;
  name: string;
  email: string;
  telegram: string | null;
  project_type: string | null;
  message: string | null;
  lang: string | null;
  created_at: string;
};

function Admin() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setOrders(null); setIsAdmin(false); return; }
    (async () => {
      const { data: roles } = await supabase
        .from("user_roles").select("role").eq("user_id", session.user.id);
      const admin = !!roles?.some((r: any) => r.role === "admin");
      setIsAdmin(admin);
      if (admin) {
        const { data } = await supabase
          .from("order_requests").select("*").order("created_at", { ascending: false });
        setOrders(data as Order[]);
      }
    })();
  }, [session]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg("");
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      if (error) setMsg(error.message);
      else setMsg("Перевірте пошту для підтвердження або увійдіть.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    }
  };

  if (loading) return <div style={pageStyle}><p>Loading...</p></div>;

  if (!session) {
    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={{ marginTop: 0 }}>{mode === "login" ? "Вхід" : "Реєстрація"}</h1>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
            <input type="password" placeholder="Пароль (мін. 6)" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} style={inputStyle} />
            <button type="submit" style={btnStyle}>{mode === "login" ? "Увійти" : "Зареєструватися"}</button>
          </form>
          {msg && <p style={{ color: "#fca5a5", fontSize: 13 }}>{msg}</p>}
          <p style={{ fontSize: 13, color: "#888", marginTop: 16 }}>
            {mode === "login" ? "Немає акаунту? " : "Вже є акаунт? "}
            <button onClick={() => { setMode(mode === "login" ? "signup" : "login"); setMsg(""); }} style={linkBtn}>
              {mode === "login" ? "Зареєструватися" : "Увійти"}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={{ width: "100%", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h1 style={{ margin: 0 }}>Заявки</h1>
            <p style={{ color: "#888", margin: "4px 0 0", fontSize: 13 }}>{session.user.email}</p>
          </div>
          <button onClick={() => supabase.auth.signOut()} style={{ ...btnStyle, width: "auto", padding: "8px 16px" }}>Вийти</button>
        </div>
        {!isAdmin ? (
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0 }}>Немає доступу</h3>
            <p style={{ color: "#aaa", fontSize: 14 }}>
              Ваш user_id: <code style={{ background: "#222", padding: "2px 6px", borderRadius: 4 }}>{session.user.id}</code>
            </p>
            <p style={{ color: "#aaa", fontSize: 14 }}>
              Щоб бачити заявки, додайте собі роль admin у таблиці <code>user_roles</code>:
            </p>
            <pre style={{ background: "#0a0a0a", padding: 12, borderRadius: 8, overflow: "auto", fontSize: 12 }}>
{`INSERT INTO public.user_roles (user_id, role)
VALUES ('${session.user.id}', 'admin');`}
            </pre>
          </div>
        ) : !orders ? (
          <p>Завантаження...</p>
        ) : orders.length === 0 ? (
          <div style={cardStyle}><p style={{ margin: 0, color: "#888" }}>Поки немає заявок.</p></div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {orders.map((o) => (
              <div key={o.id} style={cardStyle}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <strong>{o.name}</strong>
                  <span style={{ color: "#888", fontSize: 12 }}>{new Date(o.created_at).toLocaleString()}</span>
                </div>
                <div style={{ fontSize: 14, color: "#ccc" }}>📧 <a href={`mailto:${o.email}`} style={{ color: "#fff" }}>{o.email}</a></div>
                {o.telegram && <div style={{ fontSize: 14, color: "#ccc" }}>💬 {o.telegram}</div>}
                {o.project_type && <div style={{ fontSize: 14, color: "#ccc", marginTop: 4 }}>📦 {o.project_type}</div>}
                {o.message && <p style={{ marginTop: 10, color: "#ddd", fontSize: 14, whiteSpace: "pre-wrap" }}>{o.message}</p>}
                {o.lang && <span style={{ fontSize: 11, color: "#666" }}>lang: {o.lang}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const pageStyle: React.CSSProperties = { minHeight: "100vh", background: "#000", color: "#fff", padding: "60px 20px", display: "flex", justifyContent: "center", fontFamily: "system-ui, sans-serif" };
const cardStyle: React.CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 16, padding: 24, width: "100%", maxWidth: 480 };
const inputStyle: React.CSSProperties = { background: "#0a0a0a", border: "1px solid #222", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 14 };
const btnStyle: React.CSSProperties = { background: "#fff", color: "#000", border: "none", borderRadius: 999, padding: "12px 20px", fontWeight: 600, cursor: "pointer", fontSize: 14 };
const linkBtn: React.CSSProperties = { background: "none", border: "none", color: "#fff", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: 13 };