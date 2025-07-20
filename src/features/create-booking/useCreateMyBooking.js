import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMyBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useCreateMyBooking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createBooking, isPending } = useMutation({
    mutationFn: createMyBooking,
    onSuccess: () => {
      toast.success("Booking created successfully");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.message || "Failed to create booking");
    },
  });

  return { createBooking, isPending };
}
