import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Services')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Services"!</div>
}
