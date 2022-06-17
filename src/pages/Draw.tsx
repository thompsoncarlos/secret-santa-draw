import React, { useState } from "react";
import Card from "../components/Card";
import { useListParticipant } from "../state/hook/useListParticipant";
import { useResultDraw } from "../state/hook/useResultDraw";

import "./Draw.css";

const Draw = () => {
  const participants = useListParticipant();
  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");

  const result = useResultDraw();

  const drawer = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (result.has(currentParticipant)) {
      setSecretFriend(result.get(currentParticipant)!);
    }
  };

  return (
    <Card>
      <section className="draw">
      <h2>Who will take the paper?</h2>
        <form onSubmit={drawer}>
          <select
            required
            name="currentParticipant"
            id="currentParticipant"
            placeholder="Select your name"
            value={currentParticipant}
            onChange={(evento) => setCurrentParticipant(evento.target.value)}
          >
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <p>Click on Draw to see who your secret santa is!</p>
          <button className="draw-btn">Draw</button>
        </form>
        {secretFriend && <p className="result" role="alert">{secretFriend}</p>}
        <footer className="draw">
                <img src="/images/plane.png" className="plane" alt="A drawing of a paper plane" />
            </footer>
      </section>
    </Card>
  );
};

export default Draw;
