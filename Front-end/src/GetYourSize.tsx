import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import React from "react";
//components
import WRootLayout from "./Website/Layouts/WRootLayout";

//actions
import { SizeAction } from "./GYZ-App/actions/SizeAction";

//context
import { UserContextProvider } from "./GYZ-App/context/UserContext";

import App from "./GYZ-App/Pages/App/App";

import { LanguageContextProvider } from "./GYZ-App/context/LanguageContext";
import Home from "./Website/pages/Home/Home";
import { DeviceSizeContextProvider } from "./Website/Context/DeviceSizeContext";
import Contact from "./Website/pages/Home/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<WRootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* aguamar app */}
      <Route path="/wix" element={<App language="he" />} action={SizeAction} />
      <Route path="/app" element={<App language="en" />} action={SizeAction} />
    </Route>
  )
);

function GetYourSize() {
  return (
    <DeviceSizeContextProvider>
      <LanguageContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </LanguageContextProvider>
    </DeviceSizeContextProvider>
  );
}

export default GetYourSize;
