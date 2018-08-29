import React, { Fragment } from 'react'
import starSrc from './star.svg'

const STARS = [1, 2, 3, 4, 5]

class StarsFilter extends React.Component {
  render () {
    return (
      <Fragment>
        <div className='mb-3'>
          <img className='d-inline-block align-text-top mr-2' width={16} height={16} src={starSrc} alt=''/>
          <p className='d-inline-block mb-0'>Estrellas</p>
        </div>
        <div>
          {STARS.map((_, index) => <StarCheckbox key={index} stars={STARS.slice(index)} onChange={this.props.onChange}/>)}
        </div>
      </Fragment>
    )
  }
}

const StarCheckbox = ({stars, onChange}) => (
  <div>
    <label>
      <input className='mr-2' name='stars' type='checkbox' onChange={onChange} value={stars.length}/>
      {stars.map(id => <img key={id} className='d-inline-block' width={24} height={24} src={starSrc} alt=''/>)}
    </label>
  </div>
)

export default StarsFilter