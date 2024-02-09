import { getServerSession } from 'next-auth';

import { authOptions } from '~/features';
import { FooView } from '~/views';

export default async function FooPage() {
  const session = await getServerSession(authOptions);
  return <FooView session={session} />;
}
