import { useRecoilValue } from "recoil"
import { participantsListState } from "../atom"

export const useListParticipant = () => {
    return useRecoilValue(participantsListState);
}