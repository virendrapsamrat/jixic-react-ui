"use client";

import { useState } from "react";
import { Button, Modal } from "@jixic/react-ui";

export function ModalPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} title="Edit profile">
        <p style={{ marginTop: 0 }}>Keep dialog content focused and easy to dismiss.</p>
        <Button onClick={() => setIsOpen(false)} variant="secondary">
          Done
        </Button>
      </Modal>
    </>
  );
}
