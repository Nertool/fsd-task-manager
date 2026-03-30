import { Link, Navigate } from 'react-router-dom';

import { useAuth } from 'features/authRouting';
import { LoginForm } from 'features/loginForm';

import styles from './LoginPage.module.css';

export function LoginPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/profile" replace />;

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Войти в систему</h1>
      <div className={styles.section}>
        <Link to="/">Главная</Link>
        <Link to="/profile">Профиль</Link>
      </div>
      <LoginForm />
    </div>
  );
}
