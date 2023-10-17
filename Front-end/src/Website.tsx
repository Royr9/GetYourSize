import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//components
import WRootLayout from "./website/Layouts/WRootLayout";
import WLandingPage from "./website/WLandingPage";
//actions
import { SizeAction } from "./actions/SizeAction";

//context
import { UserContextProvider } from "./context/UserContext";

import App from "./Pages/App";

import { LanguageContextProvider } from "./context/LanguageContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<WRootLayout />}>
        <Route path="/" element={<WLandingPage />} />
      </Route>
      {/* aguamar app */}

      <Route path="/app" element={<App />} action={SizeAction} />
    </Route>
  )
);

function Website() {
  return (
    <LanguageContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </LanguageContextProvider>
  );
}

export default Website;
