import { combineReducers } from 'redux'

function phoneNumbersReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_NUMBERS':
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  phoneNumbers: phoneNumbersReducer
})
