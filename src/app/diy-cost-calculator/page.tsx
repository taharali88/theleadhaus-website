"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/Motion";

export default function DiyCostCalculatorPage() {
  const [inboxes, setInboxes] = useState(10);
  const [currency, setCurrency] = useState<"GBP" | "USD" | "EUR">("GBP");

  // Pricing details by currency
  const currencyData = {
    GBP: {
      symbol: "£",
      workspace: 6, // per inbox
      domains: 4, // per domain (1 domain per 2 inboxes)
      software: 40, // flat
      database: 70, // flat
      verification: 25, // flat
      copywriting: 70, // flat amortised
      leadhausStarter: 497,
      leadhausGrowth: 997,
      leadhausScale: 1997,
    },
    USD: {
      symbol: "$",
      workspace: 8,
      domains: 5,
      software: 47,
      database: 80,
      verification: 30,
      copywriting: 80,
      leadhausStarter: 597,
      leadhausGrowth: 1197,
      leadhausScale: 2397,
    },
    EUR: {
      symbol: "€",
      workspace: 7,
      domains: 5,
      software: 44,
      database: 75,
      verification: 28,
      copywriting: 75,
      leadhausStarter: 577,
      leadhausGrowth: 1157,
      leadhausScale: 2317,
    },
  };

  const current = currencyData[currency];

  // DIY calculations
  const workspaceCost = inboxes * current.workspace;
  const domainCount = Math.ceil(inboxes / 2);
  const domainCost = domainCount * current.domains;
  const softwareCost = current.software;
  const databaseCost = current.database;
  const verificationCost = current.verification;
  const copywritingCost = current.copywriting;

  const totalDiyCost =
    workspaceCost +
    domainCost +
    softwareCost +
    databaseCost +
    verificationCost +
    copywritingCost;

  // Determine equivalent Leadhaus plan
  let leadhausPrice = current.leadhausStarter;
  let leadhausPlan = "Starter";
  if (inboxes > 10 && inboxes <= 25) {
    leadhausPrice = current.leadhausGrowth;
    leadhausPlan = "Growth";
  } else if (inboxes > 25) {
    leadhausPrice = current.leadhausScale;
    leadhausPlan = "Scale";
  }

  const netSavings = totalDiyCost - leadhausPrice;

  // Time calculations (hours per week spent managing campaigns)
  const setupHours = 15; // base weekly hours for monitoring, lists, cleaning, and sequences

  return (
    <div style={{ backgroundColor: "var(--color-background)", minHeight: "100vh", padding: "80px 0" }}>
      <div className="wrap" style={{ maxWidth: 900 }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="eyebrow" style={{ textAlign: "center" }}>Outreach Calculator</span>
          <h1 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.15,
            color: "var(--color-foreground)",
            marginBottom: 20
          }}>
            Calculate the true cost of DIY cold outreach
          </h1>
          <p style={{
            fontSize: 17,
            color: "var(--color-body)",
            lineHeight: 1.6,
            maxWidth: 680,
            margin: "0 auto 32px"
          }}>
            Building and running an email outreach machine yourself requires multiple software subscriptions, domain purchases, and significant weekly technical management. Compare the math below.
          </p>

          {/* Currency Switcher */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            {(["GBP", "USD", "EUR"] as const).map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                style={{
                  background: currency === curr ? "var(--color-accent)" : "var(--color-surface)",
                  color: currency === curr ? "white" : "var(--color-foreground)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 6,
                  padding: "6px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Calculator workspace */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 32,
          alignItems: "start",
          marginBottom: 48
        }}>
          {/* Left panel inputs & breakdown */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            padding: 32,
            boxShadow: "0 4px 20px oklch(17% 0.024 58 / 0.03)"
          }}>
            {/* Input Slider */}
            <div style={{ marginBottom: 32 }}>
              <label htmlFor="inbox-range" style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
                Number of Sending Inboxes
              </label>
              <input
                id="inbox-range"
                type="range"
                min="2"
                max="50"
                step="2"
                value={inboxes}
                onChange={(e) => setInboxes(Number(e.target.value))}
                style={{
                  width: "100%",
                  height: 6,
                  background: "var(--color-border)",
                  borderRadius: 3,
                  outline: "none",
                  cursor: "pointer",
                  accentColor: "var(--color-accent)"
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>
                <span>2 inboxes</span>
                <span style={{ fontSize: 18, color: "var(--color-accent)" }}>{inboxes} active inboxes</span>
                <span>50 inboxes</span>
              </div>
            </div>

            {/* DIY Breakdown Details */}
            <h4 style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid var(--color-border)", paddingBottom: 8, marginBottom: 16 }}>
              Monthly Software & Domain Costs
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--color-body)" }}>Google Workspace seats ({inboxes} accounts)</span>
                <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                  {current.symbol}{workspaceCost}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--color-body)" }}>Secondary domains ({domainCount} registrations)</span>
                <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                  {current.symbol}{domainCost}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--color-body)" }}>Outbound sending platform licence</span>
                <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                  {current.symbol}{softwareCost}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--color-body)" }}>B2B lead database subscription</span>
                <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                  {current.symbol}{databaseCost}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--color-body)" }}>Email list verification and cleaning</span>
                <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                  {current.symbol}{verificationCost}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                <span style={{ color: "var(--color-body)" }}>Amortised copywriting sequence setup</span>
                <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                  {current.symbol}{copywritingCost}
                </span>
              </div>
            </div>

            {/* Total DIY cost row */}
            <div style={{
              marginTop: 24,
              paddingTop: 18,
              borderTop: "2px solid var(--color-border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <span style={{ fontWeight: 700, color: "var(--color-foreground)", fontSize: 15 }}>Total DIY Software Cost</span>
              <span style={{ fontSize: 24, fontWeight: 900, color: "var(--color-foreground)" }}>
                {current.symbol}{totalDiyCost}
              </span>
            </div>
          </div>

          {/* Right panel comparison outcomes */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Leadhaus package comparison */}
            <div style={{
              background: "oklch(59% 0.130 34 / 0.04)",
              border: "2px solid var(--color-accent)",
              borderRadius: 12,
              padding: 32,
              textAlign: "center"
            }}>
              <span style={{
                fontSize: 10,
                fontWeight: 600,
                color: "white",
                background: "var(--color-accent)",
                padding: "4px 10px",
                borderRadius: 4,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                display: "inline-block",
                marginBottom: 12
              }}>
                Leadhaus Done For You
              </span>
              
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--color-foreground)", marginBottom: 8 }}>
                Leadhaus {leadhausPlan} Plan
              </h3>
              
              <div style={{ fontSize: 44, fontWeight: 900, color: "var(--color-accent)", marginBottom: 4 }}>
                {current.symbol}{leadhausPrice}
              </div>
              
              <p style={{ fontSize: 12, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: 20 }}>
                Flat fee per month
              </p>

              <div style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 8,
                padding: 16,
                fontSize: 13,
                color: "var(--color-body)",
                lineHeight: 1.5,
                textAlign: "left",
                marginBottom: 24
              }}>
                <div style={{ fontWeight: 700, color: "var(--color-foreground)", marginBottom: 6 }}>What we handle for you:</div>
                <ul style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                  <li>All domain purchases and DNS records</li>
                  <li>Email warmup and deliverability checks</li>
                  <li>Live custom prospect database building</li>
                  <li>Professional sequence copywriting</li>
                  <li>Inbox replies management and filtering</li>
                </ul>
              </div>

              {netSavings > 0 ? (
                <div style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  background: "var(--color-accent-bg)",
                  padding: "12px 16px",
                  borderRadius: 6,
                  marginBottom: 16
                }}>
                  You save {current.symbol}{netSavings} every month
                </div>
              ) : (
                <div style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--color-foreground)",
                  background: "var(--color-border)",
                  padding: "12px 16px",
                  borderRadius: 6,
                  marginBottom: 16
                }}>
                  Equivalent cost with zero technical labor
                </div>
              )}
            </div>

            {/* Time spent warning card */}
            <div style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 12,
              padding: 24
            }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 8 }}>
                The Administrative Burden
              </h4>
              <p style={{ fontSize: 13, color: "var(--color-body)", lineHeight: 1.6, marginBottom: 12 }}>
                Beyond licensing fees, operating outbound setups takes approximately **{setupHours} hours weekly** managing lists, filtering replies, cleaning bounces, and verifying sender reputations.
              </p>
              <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Leadhaus returns your hours to you.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call To Action */}
        <div style={{
          textAlign: "center",
          borderTop: "1px solid var(--color-border)",
          paddingTop: 40
        }}>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 24, marginBottom: 12 }}>
            Ready to hand over the technical setup?
          </h3>
          <p style={{ color: "var(--color-body)", fontSize: 15, marginBottom: 24, maxWidth: 580, margin: "0 auto 24px" }}>
            Stop buying software tools and managing DNS records. Let our copywriters and systems team handle the entire outbound pipeline for you.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-warm btn-lg">
              Book a call
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">
              View packages
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
