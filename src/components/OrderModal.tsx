import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { dicts, type Lang } from "@/lib/i18n";

export function OrderModal({
  open,
  onClose,
  lang,
}: {
  open: boolean;
  onClose: () => void;
  lang: Lang;
}) {
  const t = dicts[lang].modal;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      telegram: String(fd.get("telegram") || "").trim() || null,
      project_type: String(fd.get("project_type") || "").trim() || null,
      message: String(fd.get("message") || "").trim() || null,
      lang,
    };
    if (!payload.name || !payload.email) return;
    setStatus("sending");
    setErrorMsg("");
    const { error } = await supabase.from("order_requests").insert(payload);
    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      fetch("/api/public/notify-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
      setStatus("success");
    }
  };

  return (
    <div className="vx-modal-overlay" onClick={onClose}>
      <div className="vx-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="vx-modal-close" onClick={onClose} aria-label={t.close}>×</button>
        {status === "success" ? (
          <div className="vx-modal-success">
            <div className="vx-modal-check">✓</div>
            <h3>{t.success}</h3>
            <p>{t.successSub}</p>
            <button className="btn-primary" onClick={onClose}>{t.close}</button>
          </div>
        ) : (
          <>
            <h3 className="vx-modal-title">{t.title}</h3>
            <p className="vx-modal-sub">{t.sub}</p>
            <form className="vx-modal-form" onSubmit={onSubmit}>
              <div className="vx-form-group">
                <label>{t.name}</label>
                <input name="name" type="text" placeholder={t.namePh} required maxLength={100} />
              </div>
              <div className="vx-form-group">
                <label>{t.email}</label>
                <input name="email" type="email" placeholder={t.emailPh} required maxLength={255} />
              </div>
              <div className="vx-form-group">
                <label>{t.tg}</label>
                <input name="telegram" type="text" placeholder={t.tgPh} maxLength={100} />
              </div>
              <div className="vx-form-group">
                <label>{t.type}</label>
                <select name="project_type" defaultValue="">
                  <option value="" disabled>{t.typeChoose}</option>
                  {t.types.map((tp) => <option key={tp}>{tp}</option>)}
                </select>
              </div>
              <div className="vx-form-group">
                <label>{t.message}</label>
                <textarea name="message" placeholder={t.messagePh} maxLength={2000} rows={4} />
              </div>
              {status === "error" && <p className="vx-modal-error">{t.error}</p>}
              <button type="submit" className="btn-primary vx-modal-submit" disabled={status === "sending"}>
                {status === "sending" ? t.sending : t.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}