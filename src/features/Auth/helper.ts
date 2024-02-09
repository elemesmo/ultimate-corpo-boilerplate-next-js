import type { CallbacksOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export async function mockAuthorize() {
  const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
  if (user) return user;
  return null;
}

export function MockProvider() {
  return CredentialProvider({
    id: 'credentials',
    name: 'Credentials',
    credentials: {
      username: { label: 'Username', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    authorize: mockAuthorize,
  });
}

export const singInAuthHandler: CallbacksOptions['signIn'] = ({ user }) => {
  return !!user;
};

export const jwtAuthHandler: CallbacksOptions['jwt'] = ({ token }) => {
  return token;
};

export const sessionAuthHandler: CallbacksOptions['session'] = ({
  session,
}) => {
  return session;
};
