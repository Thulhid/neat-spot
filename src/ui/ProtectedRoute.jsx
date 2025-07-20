import { useNavigate } from "react-router";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isPending, user } = useUser();
  useEffect(() => {
    if (isPending) return;

    // 1. Not authenticated
    if (!user) {
      navigate("/login");
      return;
    }

    // 2. Authenticated, but role is not admin and trying to access /admin
    const isAdminRoute = window.location.pathname.startsWith("/admin");
    const isNotAdmin = user.role !== "admin";

    if (isAdminRoute && isNotAdmin) {
      navigate("/login"); // Or redirect to /dashboard
    }
  }, [user, isPending, navigate]);

  if (isPending)
    return (
      <div className="mt-10 flex h-dvh items-start justify-center bg-slate-50 text-xl text-slate-700">
        Loading...
      </div>
    );

  if (user) return children;

  return null;
}

export default ProtectedRoute;
