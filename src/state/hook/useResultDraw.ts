import { useRecoilValue } from "recoil"
import { resultSecretFriend } from "../atom"

export const useResultDraw = () => {
    return useRecoilValue(resultSecretFriend)
}