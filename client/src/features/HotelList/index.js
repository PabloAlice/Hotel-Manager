import React from 'react'
import {connect} from 'react-redux'
import { getHotels } from 'model/actions'
import Hotel from 'features/Hotel'

class HotelList extends React.Component {
  async componentDidMount() {
    this.props.getHotels()
  }

  render() {
    console.log(this.props)
    const {hotels, loading} = this.props
    if (loading) return <p>Loading ...</p>
    return (
      <ul className='hotels-layout list-unstyled mb-0'>
        {hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotelReducer.hotels,
    loading: state.hotelReducer.loading
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getHotels: (hotels) => dispatch(getHotels(hotels))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(HotelList)

