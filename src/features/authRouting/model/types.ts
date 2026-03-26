export type TUser = {
  id: string;
  name: string;
};

export type TLoginFormData = {
  email: string;
  password: string;
};

export type TLoginResponseData = {
  accessToken: string;
};

export type TAuthContext = {
  token: string | null;
  user: TUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (formData: TLoginFormData) => Promise<void>;
  logout: () => Promise<void>;
  loadUser: (token: string) => Promise<void>;
};
