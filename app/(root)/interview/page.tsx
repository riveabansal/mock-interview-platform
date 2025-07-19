import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'

const page = async () => {
  const user = await getCurrentUser();
  return (
    <>
        <Agent userName={user?.name!} userId={user?.id} type="generate" />
    </>
  )
}

export default page