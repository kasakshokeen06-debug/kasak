import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Link} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment  >
      <div className="h-80 w-100 bg-black text-white text-center">

      <div>Hello "__root"!</div>
      <nav className='flex gap-5 mt-3 '>
      <Link to="/">index</Link>
      <Link to="/Home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">service</Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools/>
      </div>
    </React.Fragment>
  )
}
