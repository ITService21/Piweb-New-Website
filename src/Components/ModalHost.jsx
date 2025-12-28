import FormModal from "./FormModal";
import { useModal } from "../Context/ModalContext";

// Renders global modals controlled by ModalContext
export default function ModalHost() {
  const { isAnyModalOpen, closeModal } = useModal();

  return (
    <>
      <FormModal open={!!isAnyModalOpen} onClose={() => closeModal()} />
    </>
  );
}
