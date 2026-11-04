import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Link} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <nav className='flex gap '>
      <Link to="/">index</Link>
      <Link to="/Home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">service</Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
