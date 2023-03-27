// utils.ts

import { useState, useCallback, useEffect } from "react";
import { ModalType } from "../constants/modalType";
import { ModalStatus, User } from "../types";

export default function useShowModal(user: User) {
  const [modalStatus, setModalStatus] = useState<ModalStatus>({
    todo: false,
    annual: false,
  });
  const handleShowModal = (modalType: ModalType, command: boolean) => {
    switch (modalType) {
      case ModalType.ANNUAL:
        setModalStatus({ ...modalStatus, annual: command });
        break;
      case ModalType.TODO:
        setModalStatus({ ...modalStatus, todo: command });
        break;
    }
  };

  return { modalStatus, handleShowModal };
}
