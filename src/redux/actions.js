import { post } from 'axios'

// sandbox api key of no value
const api = '1828a8d2e9266281d9692eb0ec595a6b'

function fetchPhoneNumbers(data) {
  return {
    type: 'FETCH_NUMBERS',
    payload: data
  }
}

export function requestNumbers() {
  return dispatch => {
    post(
      `http://Sandbox.TossableDigits.com/apihttp.php?apikey=${api}&method=extensionList`
    )
      .then(({ data }) => {
        if (data.status) {
          dispatch(fetchPhoneNumbers(data.data))
        } else {
          console.error('error requesting numbers:', data.msgs)
        }
      })
      .catch(error => console.error('Error requesting numbers:', error))
  }
}
