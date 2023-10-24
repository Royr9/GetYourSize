import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import React from "react";
//components

//actions
import { SizeAction } from "./app/actions/SizeAction";

//context
import { UserContextProvider } from "./app/context/UserContext";

import App from "./app/pages/App/App";

import { LanguageContextProvider } from "./app/context/LanguageContext";
import Home from "./website/pages/Home/Home";
import { DeviceSizeContextProvider } from "./contexts/DeviceSizeContext";
import Contact from "./website/pages/Home/Contact/Contact";
import RootLayout from "./website/layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<RootLayout />}>
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
