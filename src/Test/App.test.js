import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'
import * as actions from '../Store/Actions'
import * as types from '../Store/Actions/ActionTypes'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// ACTION CREATOR
describe('Common actions', () => {
  it('should clear all form entries', () => {
    const expectedAction = {
      type: types.ALTER_ALL,
    }
    expect(actions.clearAll()).toEqual(expectedAction)
  })
}) // this one is a dummy test?

describe('String actions', () => {
  it('should create a short String w/o delimiter w/o dup, 50 * 50', () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const numChars = 50
    const delimiter = ''
    const numCases = 50
    const allowDuplicate = false
    const expectedAction = {
      type: types.SET_OUTPUT,
      chars,
      numChars,
      delimiter,
      numCases,
      allowDuplicate
    }
    expect(actions.startStringGen()).toEqual(expectedAction)
  })
})

describe('String actions', () => {
  it('should create a short String with delimiter w/o dup, 50 * 50', () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    const numChars = 50
    const delimiter = ','
    const numCases = 50
    const allowDuplicate = false
    const expectedAction = {
      type: types.SET_OUTPUT,
      chars,
      numChars,
      delimiter,
      numCases,
      allowDuplicate
    }
    expect(actions.startStringGen()).toEqual(expectedAction)
  })
})

describe('String actions', () => {
  it('should create a short String w/o delimiter with dup, 50 * 50', () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    const numChars = 50
    const delimiter = ''
    const numCases = 50
    const allowDuplicate = true
    const expectedAction = {
      type: types.SET_OUTPUT,
      chars,
      numChars,
      delimiter,
      numCases,
      allowDuplicate
    }
    expect(actions.startStringGen()).toEqual(expectedAction)
  })
})

describe('String actions', () => {
  it('should create a short String with delimiter with dup, 50 * 50', () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    const numChars = 50
    const delimiter = ''
    const numCases = 50
    const allowDuplicate = true
    const expectedAction = {
      type: types.SET_OUTPUT,
      chars,
      numChars,
      delimiter,
      numCases,
      allowDuplicate
    }
    expect(actions.startStringGen()).toEqual(expectedAction)
  })
})