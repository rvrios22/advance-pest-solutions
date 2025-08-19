import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'
import { HeroUIProvider, ToastProvider } from '@heroui/react'

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <HeroUIProvider>
        <ToastProvider
          placement="bottom-center"
          toastProps={{
            timeout: 5000,
            radius: 'md',
            hideCloseButton: false,
            classNames: {
              title: 'text-white font-outline',
              description: 'text-white font-outline',
              base: 'bg-[#1c1c1c] bg-gradient-to-r from-amber-500 to-amber-600',
              closeButton: 'opacity-100 absolute right-4 top-2',
            },
          }}
        />
        <RouterProvider router={router} />
      </HeroUIProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
