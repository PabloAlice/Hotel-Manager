import React from 'react'
import NameFilter from './NameFilter'
import StarsFilter from './StarsFilter'
import { connect } from 'react-redux'
import { getHotels } from '../../model/actions'

class Filters extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      stars: []
    }
  }
  onSubmit = async (e) => {
    e.preventDefault()
    const {hotelName, stars} = this.state
    const nameQuery = hotelName ? `name=${hotelName}` : ''
    const starsQuery = stars.length ? `stars=[${stars}]` : ''
    const queryParams = nameQuery ? `${starsQuery}&${nameQuery}` : starsQuery
    this.props.getHotels(queryParams)
  }

  onChange = (e) => {
    const {value} = e.target
    this.setState({hotelName: value})
  }

  onStarsChange = (e) => {
    const {value, checked} = e.target
    this.setState(prevState => {
      const stars = checked ? [value, ...prevState.stars] : prevState.stars.filter(star => star !== value)
      return {stars}
    })
  }

  render () {
    return (
      <div>
        <div className='p-3 bg-white'>
          <h6 className='m-0'>Filtros</h6>
        </div>
        <form onSubmit={this.onSubmit}>
          <div className='p-3 bg-white mt-1'>
            <NameFilter onChange={this.onChange}/>
          </div>
          <div className='p-3 bg-white mt-1'>
            <StarsFilter onChange={this.onStarsChange}/>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    getHotels: (hotels) => dispatch(getHotels(hotels))
  }
)

export default connect(null, mapDispatchToProps)(Filters)
