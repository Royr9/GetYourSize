import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//components
import WRootLayout from "./Layouts/WRootLayout";
import WLandingPage from "./Pages/WLandingPage";
//actions
import { SizeAction } from "./actions/SizeAction";

//context
import { UserContextProvider } from "./context/UserContext";

import App from "./Pages/App";
import GenderForm from "./Components/GenderForm";
import SizeForm from "./Components/SizeForm";
import Load from "./Components/Load";
import ResultPage from "./Components/ResultPage";
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
