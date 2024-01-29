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
