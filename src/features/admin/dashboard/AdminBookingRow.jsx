import { format } from "date-fns";
import Menus from "../../../ui/Menus";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { HiArrowDownOnSquare, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import UpdateBooking from "../../../ui/UpdateBooking";
import { useDeleteBooking } from "../../../hooks/useDeleteBooking";
import { useUpdateBooking } from "../../../hooks/useUpdateBooking";

/**
 * AdminBookingRow
 * Renders a single booking row with full admin details.
 * Includes booking info and menu actions for updating or deleting.
 */
function AdminBookingRow({ booking }) {
  const { deleteBooking } = useDeleteBooking();
  const { updateBooking } = useUpdateBooking();

  const formattedDate = format(
    new Date(booking.date_time),
    "MMM dd, yyyy hh:mm a",
  );

  return (
    <Table.Row
      styles="grid gap-2 text-xs sm:text-sm md:text-base items-start border-t border-zinc-700 py-3 px-2
              grid-cols-2 sm:grid-cols-[1fr_1fr_1fr_1fr_0.2fr]"
    >
      {/* Service */}
      <div className="flex flex-col text-sm font-medium text-slate-800">
        <span className="text-base">{booking.customer_name}</span>
        <span className="text-xs text-slate-500">
          @{booking.user_id?.username}
        </span>
      </div>
      <div className="font-semibold text-zinc-800">
        {booking.service_id.name}
      </div>

      {/* Date & Time */}
      <div className="text-zinc-800">{formattedDate}</div>

      {/* Address */}
      <div className="text-zinc-800">{booking.address}</div>

      {/* Actions */}
      <div className="ml-auto">
        <Modal>
          <Menus>
            <Menus.Toggle id={booking._id} />
            <Menus.List id={booking._id}>
              <Modal.Open opens="booking-delete">
                <Menus.ButtonMenu
                  icon={
                    <HiTrash size={18} className="inline-block text-zinc-400" />
                  }
                  variant="small"
                >
                  Cancel
                </Menus.ButtonMenu>
              </Modal.Open>
              <Modal.Open opens="booking-update">
                <Menus.ButtonMenu
                  icon={
                    <HiArrowDownOnSquare
                      size={18}
                      className="inline-block text-zinc-400"
                    />
                  }
                  variant="small"
                >
                  Update
                </Menus.ButtonMenu>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="booking-delete">
              <ConfirmDelete
                resource="booking"
                onConfirm={() => deleteBooking(booking._id)}
              />
            </Modal.Window>
            <Modal.Window name="booking-update">
              <UpdateBooking
                onConfirm={() => updateBooking(booking._id)}
                booking={booking}
              />
            </Modal.Window>
          </Menus>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default AdminBookingRow;
