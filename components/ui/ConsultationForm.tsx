"use client";

import { useRef, useState, type FormEvent } from "react";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ANALYTICS_EVENTS, track } from "@/lib/analytics";
import { serviceOptions } from "@/lib/content";

const LABEL_CLASS = "block text-xs font-semibold text-midnight mb-1.5";

const INPUT_CLASS =
  "w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-midnight focus:border-midnight";

/**
 * On-site consultation request form.
 *
 * The prototype confirmed submissions client-side only (there is no backend in
 * the design). That behaviour is preserved here; `handleSubmit` is the single
 * integration point to wire up a server action, route handler or CRM endpoint.
 */
export function ConsultationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track(ANALYTICS_EVENTS.enquirySubmitted, {
      service: new FormData(event.currentTarget).get("serviceSelect"),
    });
    // NOTE (ROADMAP D1): this still only confirms client-side and discards the
    // payload. Wire it to a route handler once a destination inbox or CRM is
    // chosen — see .env.example.
    formRef.current?.reset();
    setSubmitted(true);
  }

  return (
    <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={LABEL_CLASS} htmlFor="fullName">
            Full Name *
          </label>
          <input
            className={INPUT_CLASS}
            id="fullName"
            name="fullName"
            placeholder="Johnathan Vance"
            required
            type="text"
          />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="companyName">
            Company / Enterprise Name *
          </label>
          <input
            className={INPUT_CLASS}
            id="companyName"
            name="companyName"
            placeholder="Apex Logistics Partners"
            required
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={LABEL_CLASS} htmlFor="workEmail">
            Business Email *
          </label>
          <input
            className={INPUT_CLASS}
            id="workEmail"
            name="workEmail"
            placeholder="j.vance@apexlogistics.com"
            required
            type="email"
          />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="phoneNumber">
            Direct Phone *
          </label>
          <input
            className={INPUT_CLASS}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+1 (555) 234-8901"
            required
            type="tel"
          />
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="serviceSelect">
          Primary Service Requirement
        </label>
        <select
          className={`${INPUT_CLASS} bg-white`}
          id="serviceSelect"
          name="serviceSelect"
          defaultValue={serviceOptions[0].value}
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="projectScope">
          Estimated Scale &amp; Office Requirements
        </label>
        <textarea
          className={INPUT_CLASS}
          id="projectScope"
          name="projectScope"
          placeholder="Briefly specify node count, workstation inventory, camera count, or office location..."
          rows={3}
        />
      </div>

      <button
        className="w-full py-3.5 px-6 rounded-md bg-midnight text-white font-semibold text-sm hover:bg-midnight-deep hover:ring-1 hover:ring-accent/40 transition-all shadow-sm flex items-center justify-center gap-2 group"
        type="submit"
      >
        <span>Submit Consultation Request</span>
        <MaterialSymbol
          name="send"
          className="text-[18px] text-accent-soft group-hover:translate-x-1 transition-transform"
        />
      </button>

      {submitted ? (
        <div
          className="p-3 rounded-md bg-[#F0FDF4] border border-[#BBF7D0] text-[#15803D] text-xs font-medium text-center"
          role="status"
        >
          Inquiry received. A Scantech systems engineer will review your scope
          and contact you within 2 hours.
        </div>
      ) : null}
    </form>
  );
}
