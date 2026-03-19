import { Navigate } from 'react-router';

export function AdminProtect({ children }: { children: React.ReactNode }) {
  const isAuth = localStorage.getItem('kori_admin_auth') === 'true';

  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
