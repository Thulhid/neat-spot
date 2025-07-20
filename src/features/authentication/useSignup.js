import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success("Account created!");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message || "Signup failed");
    },
  });

  return { signup, isPending };
}
