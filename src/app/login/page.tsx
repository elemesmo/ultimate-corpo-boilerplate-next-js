import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '~/features';
import { LoginView } from '~/views';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    const callbackUrl = searchParams.callbackUrl ?? '/';
    redirect(typeof callbackUrl === 'string' ? callbackUrl : '/');
  }
  return <LoginView />;
}
