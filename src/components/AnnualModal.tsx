import { useEffect, useState } from "react";
import { useAnnual } from "../hooks";
import { User } from "../types";
import AnnualCalendar from "./AnnualCalendar";
import Modal from "./Modal";
import ModalFooter from "./ModalFooter";

interface Props {
  showModal: boolean;
  user: User;
  onClose: () => void;
  data: Date[];
}

function AnnualModal({ user, data, onClose }: Props) {
  const [selected, setSelected] = useState<Date>(new Date());
  const { annual, fetchAnnual, updateAnnual } = useAnnual(user);
  const handleContentChange = (date: Date) => {
    setSelected(date);
  };
  const handleSubmitModal = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateAnnual(selected, onClose);
  };
  const existAnnual = () => {
    if (annual > 0) return true;
    return false;
  };
  useEffect(() => {
    fetchAnnual();
  }, [annual, fetchAnnual]);
  return (
    <Modal>
      <form onSubmit={handleSubmitModal}>
        <div>{annual === 0 && "남은 연가가 없습니다."}</div>
        <AnnualCalendar
          data={data}
          selected={selected}
          onChangeSelect={handleContentChange}
        />
        <ModalFooter title="신청" onClose={onClose} disabled={existAnnual} />
      </form>
    </Modal>
  );
}
export default AnnualModal;
