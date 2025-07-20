import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking as updateBookingApi } from "../services/apiBookings";
import toast from "react-hot-toast";

export function useUpdateBooking() {
  const queryClient = useQueryClient();

  const { mutate: updateBooking, isPending: isUpdating } = useMutation({
    mutationFn: updateBookingApi,
    onSuccess: () => {
      toast.success("Booking successfully updated");
      queryClient.invalidateQueries({ queryKey: ["bookings"] }); // Refresh bookings list
    },
    onError: (err) => {
      toast.error(err.message || "Update failed");
    },
  });

  return { updateBooking, isUpdating };
}
