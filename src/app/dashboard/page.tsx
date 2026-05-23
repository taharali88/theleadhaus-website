export default function DashboardOverview() {
  const counters = [
    { label: "Total leads in your database", value: "0" },
    { label: "Leads added this week", value: "0" },
    { label: "Messages sent this month", value: "0" },
    { label: "Opens", value: "0" },
    { label: "Clicks", value: "0" },
    { label: "Replies", value: "0" },
    { label: "Bookings", value: "0" },
    { label: "Unsubscribes", value: "0" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
      <p className="mt-2 text-sm text-body">
        Your pipeline at a glance. Data will appear here once your campaigns are live.
      </p>

      {/* Counters grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {counters.map((counter) => (
          <div
            key={counter.label}
            className="rounded-none border border-border bg-surface p-5"
          >
            <p className="text-2xl font-bold text-foreground">{counter.value}</p>
            <p className="mt-1 text-xs text-body">{counter.label}</p>
          </div>
        ))}
      </div>

      {/* Activity feed — empty state */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Recent activity
        </h2>
        <div className="rounded-none border border-border bg-surface p-8 text-center">
          <p className="text-sm text-body">
            No activity yet. Once your campaigns are live, replies, bookings,
            and sends will appear here in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
