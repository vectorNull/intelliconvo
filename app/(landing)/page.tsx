import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      LandingPage (unprotected)
      <div>
        <Link href='/login'>
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link href='/register'>
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage