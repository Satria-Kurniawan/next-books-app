import { useSession, signOut, getSession } from "next-auth/react"
import Button from "../components/Button"

const profile = () => {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <>
        <p className="font-semibold text-xl mb-3">
          Welcome, {session.user.name}
        </p>
        <div onClick={() => signOut()}>
          <Button theme="bg-red-500 text-white rounded-lg" btnText="Sign Out" />
        </div>
      </>
    )
  } else {
    return (
      <>
        <p>You are not signed in</p>
      </>
    )
  }
}

export default profile

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    }
  }

  return {
    props: { session },
  }
}
