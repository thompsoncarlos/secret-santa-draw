import { useSetRecoilState } from "recoil"
import { resultSecretFriend } from "../atom"
import { doDraw } from "../helpers/doDraw"
import { useListParticipant } from "./useListParticipant"

export const useDraw = () => {
    const participants = useListParticipant()
    const setResult = useSetRecoilState(resultSecretFriend)

    return () => {
        const result = doDraw(participants)
        setResult(result)
    }
}