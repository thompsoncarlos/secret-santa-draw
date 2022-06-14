import { render } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Config from './Config'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe('The config page', () => {
    test('should be render correctly', () => {
        const { container } = render(
            <RecoilRoot>
                <Config />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})