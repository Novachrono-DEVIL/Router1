export const revalidate = 60; // regenerate every 60 seconds

async function getEvents() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/comments'
  );
  return res.json();
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main>
      <h1>Events</h1>
      <p>This page uses Incremental Static Regeneration (ISR).</p>

      <ul>
        {events.slice(0, 5).map((event: any) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </main>
  );
}
