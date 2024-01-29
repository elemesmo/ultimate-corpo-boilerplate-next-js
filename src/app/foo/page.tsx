import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authOptions } from '~/features';
import { FooView } from '~/views';

export default async function FooPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login?callbackUrl=/foo');
  return <FooView session={session} />;
}
