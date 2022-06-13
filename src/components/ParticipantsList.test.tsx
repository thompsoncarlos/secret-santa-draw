import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useListParticipant } from '../state/hook/useListParticipant';
import ParticipantsList from './ParticipantsList';

jest.mock('../state/hook/useListParticipant', () => {
    return {
        useListParticipant: jest.fn()
    }
})

describe('A empty participants list', () => {
    beforeEach(() => {
        (useListParticipant as jest.Mock).mockReturnValue([])
    })
    test('should render without elements', () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    })
})

describe('A fill participants list', () => {
    const participants = ['Miguel', 'Matheus']
    beforeEach(() => {
        (useListParticipant as jest.Mock).mockReturnValue(participants);
    })

    test('should render with elements', () => {
        render(
            <RecoilRoot>
                <ParticipantsList />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participants.length);
    })
})