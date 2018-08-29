export const SET_HOTELS = 'SET_HOTELS'
export const REQUEST_HOTELS = 'REQUEST_HOTELS'

export const getHotels = (queryParams = '') => async dispatch => {
  try {
    dispatch({
      type: REQUEST_HOTELS,
    })
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/hotels?${queryParams}`)
    const hotels = await response.json()
    dispatch({
      type: SET_HOTELS,
      payload: hotels
    })
  } catch (e) {
    console.error('something went wrong asking for hotels', e)
  }
}