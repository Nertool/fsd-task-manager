import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  authApi,
  AuthContext,
  type TAuthContext,
  type TLoginFormData,
  type TLoginResponseData,
  type TUser,
} from 'features/authRouting';

const AUTH_TOKEN_KEY = 'authToken';

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState(() =>
    localStorage.getItem(AUTH_TOKEN_KEY),
  );
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const clearAuth = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    setToken(null);
    setUser(null);
  }, []);

  const loadUser = useCallback(
    async (accessToken: string | null) => {
      if (!accessToken) {
        setUser(null);
        setIsLoading(false);

        return;
      }

      try {
        setIsLoading(true);

        const { data } = await authApi.get<TUser>('/users/me', {
          headers: { Authorization: accessToken },
        });

        setUser(data);
      } catch {
        clearAuth();
      } finally {
        setIsLoading(false);
      }
    },
    [clearAuth],
  );

  const login = useCallback(
    async ({ email, password }: TLoginFormData) => {
      setIsLoading(true);

      try {
        const { data } = await authApi.post<TLoginResponseData>('/auth/login', {
          email,
          password,
        });

        localStorage.setItem(AUTH_TOKEN_KEY, data.accessToken);
        setToken(data.accessToken);
        await loadUser(data.accessToken);
      } finally {
        setIsLoading(false);
      }
    },
    [loadUser],
  );

  const logout = useCallback(async () => {
    setIsLoading(true);

    try {
      if (token) {
        await authApi.get('auth/logout', { headers: { Authorization: token } });
      }
    } finally {
      clearAuth();
      setIsLoading(false);
    }
  }, [clearAuth, token]);

  useEffect(() => {
    void loadUser(token);
  }, [loadUser, token]);

  const contextValue = useMemo<TAuthContext>(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      isLoading,
      login,
      logout,
      loadUser,
    }),
    [isLoading, loadUser, login, logout, token, user],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
