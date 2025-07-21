import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CreateBooking from "./pages/CreateBooking";
import Signup from "./pages/Signup";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  // Initialize QueryClient with default config
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <>
      {/* Provide queryClient to all child components */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* Protected routes nested inside AppLayout */}
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="create-booking" element={<CreateBooking />} />
              <Route path="admin/dashboard" element={<AdminDashboard />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>

        {/* Toast notifications for success/error feedback */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            success: {
              className: "!text-slate-700 !bg-white",
              duration: 3000,
              iconTheme: {
                primary: "var(--toast-icon-success-primary)",
                secondary: "var(--toast-icon-success-secondary)",
              },
            },
            error: {
              className: "!bg-red-500",
              duration: 5000,
              iconTheme: {
                primary: "var(--toast-icon-error-primary)",
                secondary: "var(--toast-icon-error-secondary)",
              },
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
