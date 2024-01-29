import { type NextAuthOptions } from 'next-auth';

import { MockProvider } from './helper';

export const authOptions: NextAuthOptions = {
  providers: [MockProvider()],
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
};
