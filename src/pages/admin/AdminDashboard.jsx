import { HiPlus } from "react-icons/hi2";
import AdminBookingTable from "../../features/admin/dashboard/AdminBookingTable";
import { useBookings } from "../../features/admin/dashboard/useBookings";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateServiceForm from "../../features/admin/dashboard/CreateServiceForm";

function AdminDashboard() {
  const { bookings, isPending } = useBookings();

  return (
    <>
      <h1 className="mb-6 ml-4 text-2xl font-semibold text-slate-700 sm:text-2xl md:text-3xl">
        Admin Dashboard
      </h1>

      {isPending && <p className="ml-4 text-slate-500">Loading bookings...</p>}
      <Modal>
        <Modal.Open opens="create-service">
          <Button variant="primary" configStyles="ml-auto my-5">
            <HiPlus /> <span> new Service</span>
          </Button>
        </Modal.Open>
        <Modal.Window name="create-service">
          <CreateServiceForm />
        </Modal.Window>
      </Modal>

      {!isPending && <AdminBookingTable bookings={bookings} />}
    </>
  );
}

export default AdminDashboard;
