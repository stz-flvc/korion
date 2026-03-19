import { Outlet, Link, useLocation } from 'react-router';
import { LayoutDashboard, Users, Newspaper, LogOut, ExternalLink, Users2 } from 'lucide-react';
import './AdminLayout.css';

export function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { label: 'Partners', path: '/admin/partners', icon: <Users size={20} /> },
    { label: 'Card News', path: '/admin/news', icon: <Newspaper size={20} /> },
    { label: 'Leadership', path: '/admin/leadership', icon: <Users2 size={20} /> },
  ];

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__header">
          <div className="admin-sidebar__logo">
            <span>KORION</span>
            <span className="admin-sidebar__tag">Admin</span>
          </div>
        </div>

        <nav className="admin-sidebar__nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`admin-nav-item ${location.pathname === item.path ? 'is-active' : ''}`}
            >
              <span className="admin-nav-item__icon">{item.icon}</span>
              <span className="admin-nav-item__label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar__footer">
          <Link to="/" className="admin-nav-item">
            <span className="admin-nav-item__icon"><ExternalLink size={20} /></span>
            <span className="admin-nav-item__label">View Site</span>
          </Link>
          <button 
            type="button" 
            className="admin-nav-item admin-nav-item--logout"
            onClick={() => {
              localStorage.removeItem('kori_admin_auth');
              window.location.href = '/admin/login';
            }}
          >
            <span className="admin-nav-item__icon"><LogOut size={20} /></span>
            <span className="admin-nav-item__label">Logout</span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>
            {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h1>
        </header>
        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
