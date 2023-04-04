import React from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Books } from "./Components/Books";
import { Contact } from "./Components/Contact";
import { Login } from "./Components/Login";
import { SignIn } from "./Components/SignIn";
import {UserPage} from "./Components/userPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Ooooops There is an ERROR</h1>,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Books",
    element: <Books />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "SignIn",
    element: <SignIn />,
  },
  {
    path: "UserPage",
    element: <UserPage />,
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
