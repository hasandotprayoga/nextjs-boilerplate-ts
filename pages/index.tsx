import Modal from "@/components/shared/modal";
import { useState } from "react";
import Balancer from "react-wrap-balancer";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="bg-blue-100" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="border rounded-lg p-2 bg-white shadow-lg w-[300px] text-center">
          <Balancer>
            Ini adalah title yang harusnya seimbang dalam ukuran apapun
          </Balancer>
        </div>
      </Modal>
    </>
  );
}
