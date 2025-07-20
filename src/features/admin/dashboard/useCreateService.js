import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createService as createServiceApi } from "../../../services/apiServices";
import toast from "react-hot-toast";

export function useCreateService() {
  const queryClient = useQueryClient();

  const { mutate: createService, isPending } = useMutation({
    mutationFn: createServiceApi,
    onSuccess: () => {
      toast.success("Service created successfully");
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (err) => {
      toast.error(err.message || "Failed to create service");
    },
  });

  return { createService, isPending };
}
