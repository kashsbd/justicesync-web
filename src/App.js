import Login from "./pages/login/Login";
import "./App.css";
import { createBrowserRouter,createRoutesFromElements,Outlet,Route, RouterProvider } from "react-router-dom";
import Cases from "./pages/cases/Cases";
import TimeEntries from "./pages/timeentries/TimeEntries";
import Clients from "./pages/clients/Clients";
import Staff from "./pages/staff/Staff";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/timeentries" element={<TimeEntries />} />
        <Route path="/clients" element={<Clients />} />
      </Route> 
    )
  );
  return(
    <RouterProvider router={router} />
  )
};

export default App;
