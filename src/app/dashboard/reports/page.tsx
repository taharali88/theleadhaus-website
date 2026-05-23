export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Reports</h1>
      <p className="mt-2 text-sm text-body">
        Every Monday morning report archived here. Click to view in full.
      </p>

      <div className="mt-8 rounded-none border border-border bg-surface p-8 text-center">
        <p className="text-sm text-body">
          No reports yet. Your first Monday morning report will appear here
          after your campaigns have been running for one week.
        </p>
      </div>
    </div>
  );
}
