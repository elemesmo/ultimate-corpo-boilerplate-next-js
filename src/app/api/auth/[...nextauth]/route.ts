import NextAuth from 'next-auth/next';

import { authOptions } from '~/features';

export const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };
