import { useNavigate } from "react-router-dom"
import { useListParticipant } from "../state/hook/useListParticipant"

import './Footer.css'

const Footer = () => {

    const participants = useListParticipant()
    const navigateTo = useNavigate()

    const start = () => {
        navigateTo('/draw')
    }
    
    return(
        <footer className="config-footer">
            <button className="button"
                disabled={participants.length < 3}
                onClick={start}    
            >Start</button>
        </footer>
    )
}

export default Footer