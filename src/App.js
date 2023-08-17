import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./pages/login/Login";
import Cases from "./pages/cases/Cases";
import Clients from "./pages/clients/Clients";
import Staff from "./pages/staff/Staff";

import SnackBarContext from "./contexts/SnackBarContext";

import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState(null);

  const showSnackBar = (msg) => {
    if (msg) {
      setSnackBarVisible(true);
      setSnackBarMessage(msg);
    }
  };

  const closeSnackBar = () => {
    setSnackBarVisible(false);
    setSnackBarMessage(null);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/clients" element={<Clients />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SnackBarContext.Provider value={{ showSnackBar, closeSnackBar }}>
        <RouterProvider router={router} />;
        <Snackbar
          open={snackBarVisible}
          autoHideDuration={4000}
          onClose={() => setSnackBarVisible(false)}
          message={snackBarMessage}
        />
      </SnackBarContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
