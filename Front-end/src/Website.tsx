
import { createBrowserRouter ,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//components
import WRootLayout from './Layouts/WRootLayout';
import WLandingPage from "./Pages/WLandingPage";
import GetYourSizeRoot from "./Layouts/GetYourSizeRoot";

//actions
import { SizeAction } from "./actions/SizeAction";
import LandingPage from "./Pages/LandingPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >

        <Route path="/" element={<WRootLayout/>}>
        <Route path="/" element={<WLandingPage/>}  />
        </Route>
        {/* aguamar app */}
      <Route path="/app" element={<GetYourSizeRoot/>}>
        <Route path="/app" element={<LandingPage/>}/>
        <Route path="/app/:id" />
      </Route>
     
    </Route>
  )
)

function Website() {
  return <RouterProvider router={router} /> 
  ;
}

export default Website;
