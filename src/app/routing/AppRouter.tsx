import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PublicPage } from 'pages/public';
import { LoginPage } from 'pages/login';
import { ProfilePage } from 'pages/profile';
import { ProtectedRoute } from 'features/authRouting';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
