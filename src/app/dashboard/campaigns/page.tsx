export default function CampaignsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Campaigns</h1>
      <p className="mt-2 text-sm text-body">
        Your active outreach sequences. View content, performance, and adjust
        send schedules.
      </p>

      <div className="mt-8 rounded-none border border-border bg-surface p-8 text-center">
        <p className="text-sm text-body">
          No campaigns yet. Once your onboarding is complete and outreach
          begins, your active sequences will appear here with full performance
          tracking.
        </p>
      </div>
    </div>
  );
}
