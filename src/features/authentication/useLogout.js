import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: logout,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      // Remove cached user and other data
      queryClient.removeQueries();

      toast.success("Logged out successfully");

      navigate("/login", { replace: true });
    },

    onError: () => {
      toast.error("Failed to logout. Try again.");
    },
  });

  return { logout, isPending, isSuccess };
}
