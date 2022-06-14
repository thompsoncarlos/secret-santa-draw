import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { useListParticipant } from '../state/hook/useListParticipant'
import Footer from './Footer'

jest.mock('../state/hook/useListParticipant', () => {
    return {
        useListParticipant: jest.fn()
    }
})

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe("Where there aren't enough participants", () => {
    beforeEach(() => {
        (useListParticipant as jest.Mock).mockReturnValue([])
    })
    test("shouldn't start", () => {
        // Arrange
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )
        // Act
        const button = screen.getByRole('button')
        
        // Assert
        expect(button).toBeDisabled()
    })
})

describe("When there are enough participants", () => {
    beforeEach(() => {
        (useListParticipant as jest.Mock).mockReturnValue(['Liana', 'Miguel', 'Matheus'])
    })
    test("should start", () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )
        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })

    test('The draw was started', () => {
        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )
        const buttonDraw = screen.getByRole('button')
        fireEvent.click(buttonDraw)
        expect(mockNavigate).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledWith('/draw')
    })
})