import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isPending: isDeleting } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully canceled and removed");
      queryClient.invalidateQueries({ queryKey: ["bookings"] }); //  refetch list
    },
    onError: (err) => {
      toast.error(err.message || "Failed to cancel booking");
    },
  });

  return { deleteBooking, isDeleting };
}
