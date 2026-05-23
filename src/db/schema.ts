import {
  pgTable,
  text,
  timestamp,
  boolean,
  jsonb,
  integer,
  uuid,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

/* ────────────────────────────────────────────
   Enums
   ──────────────────────────────────────────── */

export const planTierEnum = pgEnum("plan_tier", [
  "starter",
  "growth",
  "scale",
]);

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "past_due",
  "cancelled",
  "paused",
  "trialing",
]);

export const leadStatusEnum = pgEnum("lead_status", [
  "active",
  "bounced",
  "unsubscribed",
  "replied",
  "converted",
]);

export const sendStatusEnum = pgEnum("send_status", [
  "queued",
  "sent",
  "delivered",
  "opened",
  "clicked",
  "replied",
  "bounced",
  "complained",
  "unsubscribed",
]);

export const campaignStatusEnum = pgEnum("campaign_status", [
  "draft",
  "active",
  "paused",
  "completed",
]);

/* ────────────────────────────────────────────
   Users — synced from Clerk via webhook
   ──────────────────────────────────────────── */

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  clerkId: varchar("clerk_id", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  businessName: varchar("business_name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ────────────────────────────────────────────
   Subscriptions — linked to Stripe
   ──────────────────────────────────────────── */

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }).notNull(),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  stripePriceId: varchar("stripe_price_id", { length: 255 }),
  planTier: planTierEnum("plan_tier").notNull(),
  status: subscriptionStatusEnum("status").notNull().default("active"),
  sixMonthUpfront: boolean("six_month_upfront").default(false).notNull(),
  currentPeriodStart: timestamp("current_period_start"),
  currentPeriodEnd: timestamp("current_period_end"),
  cancelledAt: timestamp("cancelled_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ────────────────────────────────────────────
   Onboarding responses
   ──────────────────────────────────────────── */

export const onboardingResponses = pgTable("onboarding_responses", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull()
    .unique(),
  responses: jsonb("responses").notNull().default({}),
  completedAt: timestamp("completed_at"),
  isDraft: boolean("is_draft").default(true).notNull(),
  currentStep: integer("current_step").default(1).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ────────────────────────────────────────────
   Leads — contact data per user
   ──────────────────────────────────────────── */

export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }),
  company: varchar("company", { length: 255 }),
  jobTitle: varchar("job_title", { length: 255 }),
  industry: varchar("industry", { length: 255 }),
  source: varchar("source", { length: 255 }),
  status: leadStatusEnum("status").notNull().default("active"),
  customFields: jsonb("custom_fields").default({}),
  dateAdded: timestamp("date_added").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ────────────────────────────────────────────
   Campaigns — per user sequence definitions
   ──────────────────────────────────────────── */

export const campaigns = pgTable("campaigns", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 500 }),
  content: text("content"),
  status: campaignStatusEnum("status").notNull().default("draft"),
  sendSchedule: jsonb("send_schedule").default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/* ────────────────────────────────────────────
   Sends — per email sent
   ──────────────────────────────────────────── */

export const sends = pgTable("sends", {
  id: uuid("id").defaultRandom().primaryKey(),
  campaignId: uuid("campaign_id")
    .references(() => campaigns.id, { onDelete: "cascade" })
    .notNull(),
  leadId: uuid("lead_id")
    .references(() => leads.id, { onDelete: "cascade" })
    .notNull(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  status: sendStatusEnum("status").notNull().default("queued"),
  sentAt: timestamp("sent_at"),
  openedAt: timestamp("opened_at"),
  clickedAt: timestamp("clicked_at"),
  repliedAt: timestamp("replied_at"),
  bouncedAt: timestamp("bounced_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/* ────────────────────────────────────────────
   Reports — weekly Monday reports per user
   ──────────────────────────────────────────── */

export const reports = pgTable("reports", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  weekStarting: timestamp("week_starting").notNull(),
  content: jsonb("content").notNull().default({}),
  emailSentAt: timestamp("email_sent_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
