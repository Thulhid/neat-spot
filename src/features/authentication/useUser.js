import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { data, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { user: data?.data?.doc, isPending };
}
