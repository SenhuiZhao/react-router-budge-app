
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/Logout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        // element: <p>logged out!</p>
        action: logoutAction
      },
      {
        path: "about",
        element: <h1>about</h1>
      },
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])

function App() {

  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>
}

export default App
