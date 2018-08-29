import {SET_HOTELS, REQUEST_HOTELS} from '../actions'

const initialState = {
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: action.payload.hotels,
        loading: false
      }
    case REQUEST_HOTELS:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}