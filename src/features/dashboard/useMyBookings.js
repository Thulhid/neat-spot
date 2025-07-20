import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useMyBookings() {
  const { data, isPending } = useQuery({
    queryKey: ["bookings"],
    queryFn: getMyBookings,
    onError: () => toast.error("Bookings could not be loaded"),
  });

  return { bookings: data?.data.doc, isPending };
}
