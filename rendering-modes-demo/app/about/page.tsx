export const revalidate = false; // fully static

export default function AboutPage() {
  return (
    <main>
      <h1>About Page</h1>
      <p>This page is statically generated at build time.</p>
    </main>
  );
}
