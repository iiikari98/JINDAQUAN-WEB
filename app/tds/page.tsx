"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, ClipboardList, FileText, Mail, PackageSearch, X } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { tdsProductGroups } from "../lib/tds-documents";

export default function TdsRequestPage() {
  const [selectedProduct, setSelectedProduct] = useState(tdsProductGroups[0]?.product || "");
  const selectedGroup = useMemo(
    () => tdsProductGroups.find((group) => group.product === selectedProduct) || tdsProductGroups[0],
    [selectedProduct],
  );
  const [selectedModel, setSelectedModel] = useState(selectedGroup?.models[0]?.model || "");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [download, setDownload] = useState<{ href: string; title: string } | null>(null);

  const currentModel = selectedGroup?.models.find((model) => model.model === selectedModel) || selectedGroup?.models[0];

  function handleProductChange(product: string) {
    const group = tdsProductGroups.find((item) => item.product === product);
    setSelectedProduct(product);
    setSelectedModel(group?.models[0]?.model || "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setMessage("Sending your TDS request...");
    setDownload(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { documentLink?: string; documentTitle?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit TDS request.");
      }

      setStatus("success");
      setMessage(result.message || "TDS request submitted successfully.");
      setDownload(result.documentLink ? { href: result.documentLink, title: result.documentTitle || "TDS PDF" } : null);
      form.reset();
      handleProductChange(tdsProductGroups[0]?.product || "");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit TDS request.");
    }
  }

  return (
    <main>
      <SiteHeader anchorPrefix="/" />

      <section className="tds-hero">
        <div>
          <span>TDS / SDS Access</span>
          <h1>Select a product model before downloading technical documents</h1>
          <p>
            Buyers choose the target product and model, then submit contact information. The ARGIOPE team receives the
            exact document request, and available PDFs are returned immediately after submission.
          </p>
        </div>
        <div className="tds-hero-card">
          <FileText size={28} />
          <strong>Lead-first document delivery</strong>
          <p>Collect contact details before sending TDS PDF links.</p>
        </div>
      </section>

      <section className="tds-section">
        <div className="tds-selector-panel">
          <span>Document selector</span>
          <h2>Choose product and model</h2>
          <label>
            Product category
            <select value={selectedProduct} onChange={(event) => handleProductChange(event.target.value)}>
              {tdsProductGroups.map((group) => (
                <option key={group.product} value={group.product}>
                  {group.product}
                </option>
              ))}
            </select>
          </label>
          <label>
            Model
            <select value={selectedModel} onChange={(event) => setSelectedModel(event.target.value)}>
              {selectedGroup?.models.map((model) => (
                <option key={model.model} value={model.model}>
                  {model.model} - {model.title.replace(" TDS", "")}
                </option>
              ))}
            </select>
          </label>
          <div className="tds-model-card">
            <PackageSearch size={24} />
            <div>
              <strong>{currentModel?.model}</strong>
              <span>{currentModel?.description}</span>
            </div>
          </div>
        </div>

        <form className="rfq-form tds-form" action="/api/inquiry" method="post" onSubmit={handleSubmit}>
          <input name="Request Type" type="hidden" value="TDS Request" />
          <input name="Product Requirement" type="hidden" value={selectedProduct} />
          <input name="TDS Product" type="hidden" value={selectedProduct} />
          <input name="TDS Model" type="hidden" value={selectedModel} />
          <label>
            Name
            <input name="Name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="Email" type="email" placeholder="Email address" required />
          </label>
          <label>
            Company Name
            <input name="Company" placeholder="Company name" required />
          </label>
          <label>
            Country
            <input name="Country" placeholder="Country / region" required />
          </label>
          <label className="form-wide">
            Message
            <textarea
              name="Message"
              rows={5}
              placeholder="Tell us your application, polymer material and expected performance..."
              required
            />
          </label>
          <button className="button button-primary form-wide" type="submit" disabled={status === "sending"}>
            <ClipboardList size={18} />
            {status === "sending" ? "Sending..." : "Submit and request TDS"}
          </button>
          {message ? (
            <p className={`form-response form-response-${status}`} role="status">
              {message}
            </p>
          ) : null}
        </form>
      </section>

      {status === "success" ? (
        <div className="thank-you-overlay" role="presentation">
          <section className="thank-you-dialog" role="dialog" aria-modal="true" aria-labelledby="tds-thank-you-title">
            <button
              className="thank-you-close"
              type="button"
              aria-label="Close TDS request message"
              onClick={() => {
                setStatus("idle");
                setMessage("");
                setDownload(null);
              }}
            >
              <X size={18} />
            </button>
            <div className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={28} />
            </div>
            <span>TDS request submitted</span>
            <h2 id="tds-thank-you-title">{download ? "Your TDS PDF is ready" : "Document request received"}</h2>
            <p>
              We have received your contact details and requested model. If the PDF is already uploaded, you can open it
              below. Otherwise, our team will prepare the matching TDS and follow up by email.
            </p>
            <div className="thank-you-actions">
              {download ? (
                <a className="button button-primary" href={download.href} target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  Open TDS PDF
                </a>
              ) : (
                <a className="button button-primary" href="mailto:gsq@jindaquan.com">
                  <Mail size={18} />
                  Contact team
                </a>
              )}
              <button
                className="button button-secondary"
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setMessage("");
                  setDownload(null);
                }}
              >
                Continue browsing
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
