import React, { Fragment } from 'react'

import search from './search.svg'

class NameFilter extends React.Component {
  render () {
    return (
      <Fragment>
        <img className='d-inline-block' width={24} height={24} src={search} alt=''/>
        <p className='d-inline-block'>Nombre del Hotel</p>
        <input name='hotelName' onChange={this.props.onChange}/>
        <button className='float-right' type='submit'>Aceptar</button>
      </Fragment>
    )
  }
}

export default NameFilter