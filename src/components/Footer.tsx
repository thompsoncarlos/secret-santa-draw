import { useNavigate } from "react-router-dom";
import { useDraw } from "../state/hook/useDraw";
import { useListParticipant } from "../state/hook/useListParticipant";

import "./Footer.css";

const Footer = () => {
  const participants = useListParticipant();
  const navigateTo = useNavigate();
  const draw = useDraw();

  const start = () => {
    draw();
    navigateTo("/draw");
  };

  return (
    <footer className="config-footer">
      <button
        className="button"
        disabled={participants.length < 3}
        onClick={start}
      >
        Start
      </button>
      <img src="/images/sacolas.png" alt="shopping bags" />
    </footer>
  );
};

export default Footer;
