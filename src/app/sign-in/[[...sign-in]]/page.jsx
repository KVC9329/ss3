import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className="h-screen grid justify-items-center content-center">
    <SignIn
      fallbackRedirectUrl = "/dashboard "
    />
  </div>
)}