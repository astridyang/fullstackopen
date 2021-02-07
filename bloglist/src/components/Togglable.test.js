import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './Togglable'


describe('<Togglable />', () => {
    let component

    beforeEach(() => {
        component = render(
            <Togglable buttonLabel='show...'>
                <div className="testDiv"></div>
            </Togglable>
        )
    })

    test('render its children', () => {
        expect(component.container.querySelector('.testDiv')).toBeDefined()
    })

    test('after click the button, the children are displayed.', () => {
        const button = component.getByText('show...')
        fireEvent.click(button)

        const div = component.container.querySelector('.togglableContent')
        expect(div).not.toHaveStyle('diplay: none')
    })

})