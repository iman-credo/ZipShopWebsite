import { Link, Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="app-shell">
      <header className="header">
        <h1>ZipShop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
