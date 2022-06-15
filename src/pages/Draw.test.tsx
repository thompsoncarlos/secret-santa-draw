import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListParticipant } from '../state/hook/useListParticipant';
import { useResultDraw } from '../state/hook/useResultDraw';
import Draw from './Draw';

jest.mock('../state/hook/useListParticipant', () => {
    return {
        useListParticipant: jest.fn()
    }
})

jest.mock('../state/hook/useResultDraw', () => {
    return {
        useResultDraw: jest.fn()
    }
})

describe('Render Draw page', () => {
    const participants = ['Miguel', 'Matheus', 'Liana']

    const result = new Map([
        ['Miguel', 'Liana'],
        ['Liana', 'Matheus'],
        ['Matheus', 'Miguel']
    ])

    beforeEach(() => {
        (useListParticipant as jest.Mock).mockReturnValue(participants);
        (useResultDraw as jest.Mock).mockReturnValue(result);
    })
    test('should all participants can see their secret-santa', () => {
        // Arrange
        render(
            <RecoilRoot>
                <Draw />
            </RecoilRoot>
        )
        // Act
        const options = screen.queryAllByRole('option')
        // Assert
        expect(options).toHaveLength(participants.length)
    })

    test('The secret friend is showed when request', () => {
        render(
            <RecoilRoot>
                <Draw />
            </RecoilRoot>
        )

        const select = screen.getByPlaceholderText('Select your name')
        fireEvent.change(select, {
            target: {
                value:participants[0]
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const secretFriend = screen.getByRole('alert')
        expect(secretFriend).toBeInTheDocument()
    })
})