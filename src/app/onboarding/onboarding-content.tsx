"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TOTAL_STEPS = 6;

const employeeSizes = ["Solo", "2 to 10", "11 to 50", "51 to 200", "200+"];
const pricePoints = ["Under £100", "£100 to £500", "£500 to £2k", "£2k to £10k", "£10k+"];
const salesCycles = ["Immediate", "Days", "Weeks", "Months"];
const tones = ["Formal", "Conversational", "Technical", "Playful"];
const outcomes = [
  "Booked calls",
  "Demo requests",
  "Direct sales",
  "Newsletter sign ups",
  "Brand awareness",
  "Other",
];
const crmOptions = [
  "None",
  "Mailchimp",
  "HubSpot",
  "MailerLite",
  "SendX",
  "Salesforce",
  "Pipedrive",
  "Other",
];
const jobTitles = [
  "CEO / Founder",
  "Managing Director",
  "Operations Director",
  "Marketing Director",
  "Finance Director",
  "Head of Procurement",
  "HR Director",
  "IT Director",
  "Other",
];
const industries = [
  "Technology",
  "Financial Services",
  "Legal",
  "Healthcare",
  "Construction",
  "Manufacturing",
  "Retail",
  "Hospitality",
  "Education",
  "Property",
  "Recruitment",
  "Accounting",
  "Marketing",
  "Other",
];
const lifeEvents = [
  "Just bought a home",
  "Just had a baby",
  "Getting married",
  "Moving house",
  "Starting a business",
  "Retired recently",
  "Just sold a property",
  "Other",
];
const ukRegions = [
  "London",
  "South East",
  "South West",
  "East of England",
  "East Midlands",
  "West Midlands",
  "North West",
  "North East",
  "Yorkshire and the Humber",
  "Scotland",
  "Wales",
  "Northern Ireland",
  "All UK",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormData = Record<string, any>;

export function OnboardingContent() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [data, setData] = useState<FormData>({
    businessName: "",
    websiteUrl: "",
    businessDescription: "",
    yearFounded: "",
    employeeCount: "",
    audienceType: "",
    targetJobTitles: [] as string[],
    targetIndustries: [] as string[],
    targetCompanySize: "",
    lifeEvents: [] as string[],
    regions: [] as string[],
    international: false,
    internationalCountries: "",
    mainService: "",
    pricePoint: "",
    salesCycle: "",
    desiredOutcomes: [] as string[],
    tone: "",
    bannedWords: "",
    copyPreference: "",
    exampleUrls: "",
    replyEmail: "",
    calendlyUrl: "",
    existingCrm: "",
    importExisting: false,
  });

  function updateField(field: string, value: unknown) {
    setData((prev: FormData) => ({ ...prev, [field]: value }));
  }

  function toggleArrayItem(field: string, item: string) {
    setData((prev: FormData) => {
      const arr = prev[field] as string[];
      return {
        ...prev,
        [field]: arr.includes(item)
          ? arr.filter((i: string) => i !== item)
          : [...arr, item],
      };
    });
  }

  async function saveDraft() {
    setIsSaving(true);
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, step, isDraft: true }),
      });
    } catch (err) {
      console.error("Save draft failed:", err);
    }
    setIsSaving(false);
  }

  async function handleSubmit() {
    setIsSaving(true);
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, step: TOTAL_STEPS, isDraft: false }),
      });
      router.push("/dashboard");
    } catch (err) {
      console.error("Submit failed:", err);
    }
    setIsSaving(false);
  }

  const inputClass =
    "form-input rounded-none px-4 py-3 text-sm placeholder:text-muted";
  const labelClass = "block text-sm font-medium text-foreground mb-2";

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[700px] px-6 lg:px-8">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-foreground">
              Step {step} of {TOTAL_STEPS}
            </p>
            <button
              type="button"
              onClick={saveDraft}
              disabled={isSaving}
              className="text-sm text-accent hover:underline disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save draft"}
            </button>
          </div>
          <div className="w-full bg-surface rounded-none h-2">
            <div
              className="bg-accent h-2 rounded-none transition-all duration-300"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: About your business */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              About your business
            </h2>
            <div>
              <label htmlFor="ob-business-name" className={labelClass}>Business name</label>
              <input id="ob-business-name" type="text" className={inputClass} value={data.businessName} onChange={(e) => updateField("businessName", e.target.value)} />
            </div>
            <div>
              <label htmlFor="ob-website" className={labelClass}>Website URL</label>
              <input id="ob-website" type="url" className={inputClass} placeholder="https://" value={data.websiteUrl} onChange={(e) => updateField("websiteUrl", e.target.value)} />
            </div>
            <div>
              <label htmlFor="ob-description" className={labelClass}>What does your business actually do?</label>
              <textarea id="ob-description" rows={4} maxLength={500} className={inputClass} value={data.businessDescription} onChange={(e) => updateField("businessDescription", e.target.value)} />
              <p className="mt-1 text-xs text-muted">{data.businessDescription.length}/500 characters</p>
            </div>
            <div>
              <label htmlFor="ob-year" className={labelClass}>Year founded</label>
              <input id="ob-year" type="number" className={inputClass} min="1900" max="2026" value={data.yearFounded} onChange={(e) => updateField("yearFounded", e.target.value)} />
            </div>
            <div>
              <label htmlFor="ob-employees" className={labelClass}>Number of employees</label>
              <select id="ob-employees" className={inputClass} value={data.employeeCount} onChange={(e) => updateField("employeeCount", e.target.value)}>
                <option value="">Select</option>
                {employeeSizes.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
            </div>
          </div>
        )}

        {/* Step 2: Who you sell to */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Who you sell to</h2>
            <div>
              <p className={labelClass}>Are you primarily B2B or B2C?</p>
              <div className="flex gap-4">
                {["B2B", "B2C"].map((t) => (
                  <button key={t} type="button" onClick={() => updateField("audienceType", t)} className={`flex-1 rounded-none border px-4 py-3 text-sm font-medium transition-colors ${data.audienceType === t ? "border-accent bg-accent/5 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {data.audienceType === "B2B" && (
              <>
                <div>
                  <p className={labelClass}>What job titles do you typically sell to?</p>
                  <div className="flex flex-wrap gap-2">
                    {jobTitles.map((t) => (
                      <button key={t} type="button" onClick={() => toggleArrayItem("targetJobTitles", t)} className={`rounded-none px-3 py-1.5 text-xs font-medium border transition-colors ${data.targetJobTitles.includes(t) ? "border-accent bg-accent/10 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={labelClass}>What industries?</p>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((i) => (
                      <button key={i} type="button" onClick={() => toggleArrayItem("targetIndustries", i)} className={`rounded-none px-3 py-1.5 text-xs font-medium border transition-colors ${data.targetIndustries.includes(i) ? "border-accent bg-accent/10 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                        {i}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="ob-company-size" className={labelClass}>What size of company is your sweet spot?</label>
                  <select id="ob-company-size" className={inputClass} value={data.targetCompanySize} onChange={(e) => updateField("targetCompanySize", e.target.value)}>
                    <option value="">Select</option>
                    {employeeSizes.map((s) => (<option key={s} value={s}>{s}</option>))}
                  </select>
                </div>
              </>
            )}

            {data.audienceType === "B2C" && (
              <div>
                <p className={labelClass}>What life events indicate someone needs your service?</p>
                <div className="flex flex-wrap gap-2">
                  {lifeEvents.map((e) => (
                    <button key={e} type="button" onClick={() => toggleArrayItem("lifeEvents", e)} className={`rounded-none px-3 py-1.5 text-xs font-medium border transition-colors ${data.lifeEvents.includes(e) ? "border-accent bg-accent/10 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className={labelClass}>Geography: which UK regions?</p>
              <div className="flex flex-wrap gap-2">
                {ukRegions.map((r) => (
                  <button key={r} type="button" onClick={() => toggleArrayItem("regions", r)} className={`rounded-none px-3 py-1.5 text-xs font-medium border transition-colors ${data.regions.includes(r) ? "border-accent bg-accent/10 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={data.international} onChange={(e) => updateField("international", e.target.checked)} className="rounded-none border-border text-accent focus:ring-accent" />
                <span className="text-sm text-body">International audience?</span>
              </label>
              {data.international && (
                <input type="text" className={`${inputClass} mt-3`} placeholder="Which countries?" value={data.internationalCountries} onChange={(e) => updateField("internationalCountries", e.target.value)} />
              )}
            </div>
          </div>
        )}

        {/* Step 3: Your offer */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Your offer</h2>
            <div>
              <label htmlFor="ob-service" className={labelClass}>What is the main service or product you want to promote?</label>
              <textarea id="ob-service" rows={3} className={inputClass} value={data.mainService} onChange={(e) => updateField("mainService", e.target.value)} />
            </div>
            <div>
              <label htmlFor="ob-price" className={labelClass}>What is the typical price point?</label>
              <select id="ob-price" className={inputClass} value={data.pricePoint} onChange={(e) => updateField("pricePoint", e.target.value)}>
                <option value="">Select</option>
                {pricePoints.map((p) => (<option key={p} value={p}>{p}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="ob-cycle" className={labelClass}>What is the typical sales cycle?</label>
              <select id="ob-cycle" className={inputClass} value={data.salesCycle} onChange={(e) => updateField("salesCycle", e.target.value)}>
                <option value="">Select</option>
                {salesCycles.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            </div>
            <div>
              <p className={labelClass}>What outcome do you want from Leadhaus?</p>
              <div className="flex flex-wrap gap-2">
                {outcomes.map((o) => (
                  <button key={o} type="button" onClick={() => toggleArrayItem("desiredOutcomes", o)} className={`rounded-none px-3 py-1.5 text-xs font-medium border transition-colors ${data.desiredOutcomes.includes(o) ? "border-accent bg-accent/10 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Voice and messaging */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Voice and messaging</h2>
            <div>
              <p className={labelClass}>What tone matches your brand?</p>
              <div className="grid grid-cols-2 gap-3">
                {tones.map((t) => (
                  <button key={t} type="button" onClick={() => updateField("tone", t)} className={`rounded-none border px-4 py-3 text-sm font-medium transition-colors ${data.tone === t ? "border-accent bg-accent/5 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="ob-banned" className={labelClass}>Are there phrases or words you never want used?</label>
              <textarea id="ob-banned" rows={3} className={inputClass} value={data.bannedWords} onChange={(e) => updateField("bannedWords", e.target.value)} placeholder="List any words or phrases to avoid" />
            </div>
            <div>
              <p className={labelClass}>Do you want to write your own outreach copy or have us draft it?</p>
              <div className="flex gap-4">
                {["I will write it", "Have Leadhaus draft it"].map((o) => (
                  <button key={o} type="button" onClick={() => updateField("copyPreference", o)} className={`flex-1 rounded-none border px-4 py-3 text-sm font-medium transition-colors ${data.copyPreference === o ? "border-accent bg-accent/5 text-accent" : "border-border text-body hover:border-border-dark"}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
            {data.copyPreference === "Have Leadhaus draft it" && (
              <div>
                <label htmlFor="ob-examples" className={labelClass}>Provide three examples of your existing marketing or website copy URLs</label>
                <textarea id="ob-examples" rows={3} className={inputClass} value={data.exampleUrls} onChange={(e) => updateField("exampleUrls", e.target.value)} placeholder="One URL per line" />
              </div>
            )}
          </div>
        )}

        {/* Step 5: Practical setup */}
        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Practical setup</h2>
            <div>
              <label htmlFor="ob-reply-email" className={labelClass}>Where should we send leads who reply?</label>
              <input id="ob-reply-email" type="email" className={inputClass} value={data.replyEmail} onChange={(e) => updateField("replyEmail", e.target.value)} placeholder="you@company.co.uk" />
            </div>
            <div>
              <label htmlFor="ob-calendly" className={labelClass}>Do you have a Calendly or scheduling link? <span className="text-muted font-normal">(optional)</span></label>
              <input id="ob-calendly" type="url" className={inputClass} value={data.calendlyUrl} onChange={(e) => updateField("calendlyUrl", e.target.value)} placeholder="https://calendly.com/..." />
            </div>
            <div>
              <label htmlFor="ob-crm" className={labelClass}>Existing CRM or email tool?</label>
              <select id="ob-crm" className={inputClass} value={data.existingCrm} onChange={(e) => updateField("existingCrm", e.target.value)}>
                <option value="">Select</option>
                {crmOptions.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            </div>
            {data.existingCrm && data.existingCrm !== "None" && (
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={data.importExisting} onChange={(e) => updateField("importExisting", e.target.checked)} className="rounded-none border-border text-accent focus:ring-accent" />
                <span className="text-sm text-body">Do you want us to import your existing list?</span>
              </label>
            )}
          </div>
        )}

        {/* Step 6: Review */}
        {step === 6 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Review and submit</h2>
            <p className="text-body">Please review your answers below. Click any section heading to go back and edit.</p>

            <div className="space-y-4">
              <ReviewSection title="About your business" onEdit={() => setStep(1)}>
                <ReviewItem label="Business name" value={data.businessName} />
                <ReviewItem label="Website" value={data.websiteUrl} />
                <ReviewItem label="Description" value={data.businessDescription} />
                <ReviewItem label="Year founded" value={data.yearFounded} />
                <ReviewItem label="Employees" value={data.employeeCount} />
              </ReviewSection>

              <ReviewSection title="Who you sell to" onEdit={() => setStep(2)}>
                <ReviewItem label="Audience type" value={data.audienceType} />
                {data.audienceType === "B2B" && (
                  <>
                    <ReviewItem label="Job titles" value={data.targetJobTitles.join(", ")} />
                    <ReviewItem label="Industries" value={data.targetIndustries.join(", ")} />
                    <ReviewItem label="Company size" value={data.targetCompanySize} />
                  </>
                )}
                {data.audienceType === "B2C" && (
                  <ReviewItem label="Life events" value={data.lifeEvents.join(", ")} />
                )}
                <ReviewItem label="Regions" value={data.regions.join(", ")} />
              </ReviewSection>

              <ReviewSection title="Your offer" onEdit={() => setStep(3)}>
                <ReviewItem label="Main service" value={data.mainService} />
                <ReviewItem label="Price point" value={data.pricePoint} />
                <ReviewItem label="Sales cycle" value={data.salesCycle} />
                <ReviewItem label="Desired outcomes" value={data.desiredOutcomes.join(", ")} />
              </ReviewSection>

              <ReviewSection title="Voice and messaging" onEdit={() => setStep(4)}>
                <ReviewItem label="Tone" value={data.tone} />
                <ReviewItem label="Banned words" value={data.bannedWords || "None"} />
                <ReviewItem label="Copy preference" value={data.copyPreference} />
              </ReviewSection>

              <ReviewSection title="Practical setup" onEdit={() => setStep(5)}>
                <ReviewItem label="Reply email" value={data.replyEmail} />
                <ReviewItem label="Calendly" value={data.calendlyUrl || "Not provided"} />
                <ReviewItem label="Existing CRM" value={data.existingCrm || "None"} />
              </ReviewSection>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          {step > 1 ? (
            <button type="button" onClick={() => setStep(step - 1)} className="text-sm font-medium text-body hover:text-foreground transition-colors">
              Back
            </button>
          ) : (
            <div />
          )}
          {step < TOTAL_STEPS ? (
            <button type="button" onClick={() => setStep(step + 1)} className="btn-premium rounded-none">
              Continue
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} disabled={isSaving} className="btn-premium rounded-none disabled:opacity-50">
              {isSaving ? "Submitting..." : "Submit and start"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function ReviewSection({ title, onEdit, children }: { title: string; onEdit: () => void; children: React.ReactNode }) {
  return (
    <div className="border border-border p-5 rounded-none">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <button type="button" onClick={onEdit} className="text-xs text-accent hover:underline">Edit</button>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-muted min-w-[120px]">{label}</span>
      <span className="text-foreground">{value || "Not provided"}</span>
    </div>
  );
}
