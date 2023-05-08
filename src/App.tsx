import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
const SideMenuLayout = lazy(() => import('./layouts/SideMenuLayout'))
const TaskSummary = lazy(() => import('./features/tasks/components/TaskSummary'))
const TaskList = lazy(() => import('./features/tasks/components/TaskList/TaskList'))
const TaskProgress = lazy(() => import('./features/tasks/components/TaskProgress/TaskProgress'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <SideMenuLayout />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <TaskSummary />
          </Suspense>
        ),
      },
      {
        path: 'task-list',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <TaskList />
          </Suspense>
        ),
      },
      {
        path: 'task-progress',
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <TaskProgress />
          </Suspense>
        ),
      },
    ],
  },
],
{basename: '/deploy-todo/'}
)

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
