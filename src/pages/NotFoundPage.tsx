import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section>
      <h2>Page not found</h2>
      <p>Looks like this route does not exist.</p>
      <Link to="/">Back to home</Link>
    </section>
  );
}
