import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('render blog list', () => {
    const mockHandler = jest.fn()

    const blog = {
        'title': 'react test',
        'author': 'kaori',
        'url': 'https://www.sde.com',
        'likes': 10,
        'user': {
            id: '60052af61055141aa47f9018',
            name: 'kaori',
            username: 'kaori'
        }
    }
    const component = render(
        <Blog blog={blog} addLikes={mockHandler} removeBlog={mockHandler}/>
    )
    const div = component.container.querySelector('.togglableContent')
    expect(component.container).toHaveTextContent('react test')
    expect(component.container).toHaveTextContent('kaori')
    expect(div).toHaveStyle('display: none')

    const likeBtn = component.getByText('like')
    fireEvent.click(likeBtn)
    fireEvent.click(likeBtn)
    expect(mockHandler.mock.calls.length).toBe(2)


})