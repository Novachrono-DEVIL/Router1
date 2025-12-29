export const dynamic = 'force-dynamic';

async function getData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { cache: 'no-store' }
  );
  return res.json();
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <main>
      <h1>Dashboard</h1>
      <p>This page is rendered on every request (SSR).</p>

      <ul>
        {data.slice(0, 5).map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
