import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getServices } from "../services/apiServices";

export function useServices() {
  const { data, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    onError: () => toast.error("Services could not be loaded"),
  });

  return { services: data?.data.doc, isPending };
}
