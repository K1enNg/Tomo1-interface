import type { LoginCredentials } from '../types/auth.types';
const url = import.meta.env.VITE_API_URL;


interface RegisterPayload {
  phoneNumber: string,
  password: string,
  firstName: string,
  lastName: string,
  childFirstName: string,
  childDob: string,
}

export async function login(payload: LoginCredentials) {
  const res = await fetch(
    `${url}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}

export async function register(payload: RegisterPayload) {
  const res = await fetch(
    `${url}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}