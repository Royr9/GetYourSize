
import { createBrowserRouter ,Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//components
import RootLayout from './Layouts/RootLayout';
import LandingPage from './Pages/LandingPage';
import UserSize from './Pages/UserSize';

//actions/loaders
import { SizeAction } from './actions/SizeAction';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<LandingPage/>}  />
      <Route path='/:id' element={<UserSize/>} action={SizeAction}   />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} /> 
  ;
}

export default App;
