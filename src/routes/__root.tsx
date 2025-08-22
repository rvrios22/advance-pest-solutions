import { Outlet, createRootRoute, createLink } from '@tanstack/react-router'
import { Link as HeroUILink, DropdownItem } from '@heroui/react'
// import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
// import { TanstackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '@/components/Footer'

export const Link = createLink(HeroUILink)
export const DropdownItemLink = createLink(DropdownItem)

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      {/* <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
      <Footer />
    </>
  ),
})
