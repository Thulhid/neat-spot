import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getBookings } from "../../../services/apiBookings";

export function useBookings() {
  const { data, isPending } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
    onError: () => toast.error("Bookings could not be loaded"),
  });

  return { bookings: data?.data.doc, isPending };
}
