export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Settings</h1>
      <p className="mt-2 text-sm text-body">
        Manage your onboarding answers, notification preferences, and security.
      </p>

      <div className="mt-8 space-y-6">
        {/* Onboarding answers */}
        <div className="rounded-none border border-border bg-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-foreground">
              Onboarding answers
            </h2>
            <button
              type="button"
              className="text-xs text-accent hover:underline"
            >
              Edit answers
            </button>
          </div>
          <p className="text-sm text-body">
            Your audience criteria and messaging preferences. Editing these will
            adjust future lead generation and outreach.
          </p>
        </div>

        {/* Notification preferences */}
        <div className="rounded-none border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            Notification preferences
          </h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-sm text-body">
                Monday morning report email
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="rounded-none border-border text-accent focus:ring-accent"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-body">
                Instant reply notifications
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="rounded-none border-border text-accent focus:ring-accent"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-body">
                Booking confirmations
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="rounded-none border-border text-accent focus:ring-accent"
              />
            </label>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-none border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            Security
          </h2>
          <div className="space-y-3">
            <button
              type="button"
              className="rounded-none border border-border px-4 py-2.5 text-sm font-medium text-body hover:text-foreground hover:bg-surface transition-colors"
            >
              Change password
            </button>
            <button
              type="button"
              className="block rounded-none border border-border px-4 py-2.5 text-sm font-medium text-body hover:text-foreground hover:bg-surface transition-colors"
            >
              Enable two factor authentication
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
