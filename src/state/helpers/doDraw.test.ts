import { doDraw } from "./doDraw"

describe('give a draw secret santa', () => {
    test("each participant don't draw yourself", () => {
        const participants = [
            'Liana',
            'Miguel',
            'Matheus',
            'Luca',
            'Mia'
        ]

        const draw = doDraw(participants)
        participants.forEach(participant => {
            const secretFriend = draw.get(participant)
            expect(secretFriend).not.toEqual(participant)
        })
    })
})