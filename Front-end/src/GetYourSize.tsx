import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import React from "react";
//components

//actions
import { SizeAction } from "./get-size-app/actions/SizeAction";

//context
import { UserContextProvider } from "./get-size-app/context/UserContext";

import App from "./get-size-app/pages/app-source/App";

import { LanguageContextProvider } from "./get-size-app/context/LanguageContext";
import Home from "./website/pages/home-page/Home";
import { DeviceSizeContextProvider } from "./contexts/DeviceSizeContext";
import Contact from "./website/pages/contact/Contact";
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
