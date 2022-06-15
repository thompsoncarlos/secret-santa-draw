import { useListParticipant } from "../state/hook/useListParticipant";

const ParticipantsList = () => {
  
  const participants: string[] = useListParticipant();

  return (
    <ul>
        {participants.map(participant => <li key={participant}>{participant}</li>)}
    </ul>
    )
}

export default ParticipantsList;
