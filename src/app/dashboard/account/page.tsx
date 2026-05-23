export default function AccountPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Account</h1>
      <p className="mt-2 text-sm text-body">
        Plan details, billing history, and subscription management.
      </p>

      <div className="mt-8 space-y-6">
        {/* Plan details */}
        <div className="rounded-none border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            Current plan
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-body">Plan</span>
              <span className="text-foreground font-medium">Loading...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body">Status</span>
              <span className="text-foreground font-medium">Loading...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body">Next billing date</span>
              <span className="text-foreground font-medium">Loading...</span>
            </div>
          </div>
        </div>

        {/* Billing history */}
        <div className="rounded-none border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            Billing history
          </h2>
          <p className="text-sm text-body">
            No billing history yet. Invoices will appear here after your first payment.
          </p>
        </div>

        {/* Manage subscription */}
        <div className="rounded-none border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            Manage subscription
          </h2>
          <button
            type="button"
            className="rounded-none border border-border px-4 py-2.5 text-sm font-medium text-body hover:text-foreground hover:bg-surface transition-colors"
          >
            Manage payment method
          </button>
        </div>
      </div>
    </div>
  );
}
