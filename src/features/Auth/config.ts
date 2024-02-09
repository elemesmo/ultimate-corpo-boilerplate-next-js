import type { NextAuthOptions } from 'next-auth';

import {
  jwtAuthHandler,
  MockProvider,
  sessionAuthHandler,
  singInAuthHandler,
} from './helper';

export const pagesConfig: NextAuthOptions['pages'] = {
  signIn: '/login',
  signOut: '/logout',
  error: '/auth/error',
};

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [MockProvider()],
  callbacks: {
    signIn: singInAuthHandler,
    jwt: jwtAuthHandler,
    session: sessionAuthHandler,
  },
  pages: pagesConfig,
};
