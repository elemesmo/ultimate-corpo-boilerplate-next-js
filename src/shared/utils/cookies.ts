'use server';

import { cookies } from 'next/headers';
import type { PaletteMode } from '@mui/material';

// @ts-expect-error - TS does not understand that this async function does not return a promise
export async function setCookie(name: string, value: string): void {
  'use server';

  const cookieStore = cookies();
  cookieStore.set(name, value);
}

// @ts-expect-error - TS does not understand that this async function does not return a promise
export async function getCookie<T = string>(name: string): T {
  'use server';

  const cookieStore = cookies();
  return cookieStore.get(name)?.value as T;
}

export type GetCookieFunction = typeof getCookie;
export type SetCookieFunction = typeof setCookie;

// User cookies
export type UserColorModeCookie = PaletteMode | undefined;
export type UserMenuStateCookie = 'open' | 'closed' | undefined;
