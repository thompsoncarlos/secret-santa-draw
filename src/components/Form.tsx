import { useRef, useState } from "react";
import { useAddParticipant } from "../state/hook/useAddParticipant";
import { useErrorMessage } from "../state/hook/useErrorMessage";

const Form = () => {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const addList = useAddParticipant();

  const errorMessage = useErrorMessage();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addList(name);  
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Add participants name"
      />
      <button disabled={!name}>Add</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};

export default Form;
