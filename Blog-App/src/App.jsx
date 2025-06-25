import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const LayOut = () => {

  return(
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  )
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/post/:id",
        element: <Single />
      },
      {
        path:"/write",
        element: <Write />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}


export default App
