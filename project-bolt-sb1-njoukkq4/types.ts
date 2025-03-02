export interface User {
  name: string;
  department: string;
  year: string;
  section: string;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}