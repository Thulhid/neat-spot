import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),

    onSuccess: (data) => {
      // Save user data in cache
      queryClient.setQueryData(["user"], data.user);

      // Navigate after login
      if (data.data?.user?.role === "admin")
        return navigate("/admin/dashboard", { replace: true });

      navigate("/dashboard", { replace: true });
    },

    onError: () => {
      toast.error("Provided username or password incorrect");
    },
  });

  return { login, isPending, isSuccess };
}
