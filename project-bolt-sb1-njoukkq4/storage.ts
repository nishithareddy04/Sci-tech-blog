import { User } from '../types';

// Simulating database storage with localStorage
export const saveUser = (user: User): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const validateUser = (username: string, password: string): boolean => {
  const users = getUsers();
  return users.some(user => user.name === username && user.password === password);
};