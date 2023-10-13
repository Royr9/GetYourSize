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
import GetYourSizeWix from "./Pages/GetYourSizeWix";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<WRootLayout />}>
        <Route path="/" element={<WLandingPage />} />
      </Route>
      {/* aguamar app */}

      <Route path="/app" element={<GetYourSizeWix />} action={SizeAction} />
    </Route>
  )
);

function Website() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default Website;
