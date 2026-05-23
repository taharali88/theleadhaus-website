export default function AudiencePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Audience</h1>
      <p className="mt-2 text-sm text-body">
        Your lead database. Filter, search, and export contacts.
      </p>

      {/* Action bar */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search contacts..."
          className="flex-1 min-w-[200px] rounded-none border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none"
        />
        <button
          type="button"
          className="rounded-none border border-border px-4 py-2.5 text-sm font-medium text-body hover:text-foreground hover:bg-surface transition-colors"
        >
          Export to CSV
        </button>
        <button
          type="button"
          className="rounded-none bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
        >
          Upload contacts
        </button>
      </div>

      {/* Empty state */}
      <div className="mt-8 rounded-none border border-border bg-surface p-8 text-center">
        <p className="text-sm text-body">
          No contacts in your database yet. Once we start building your
          audience, contacts will appear here with full filtering and search.
        </p>
      </div>
    </div>
  );
}
