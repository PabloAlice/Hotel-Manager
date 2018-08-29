import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

const Hotel = ({image, name, stars, amenities, price}) => (
  <div className='bg-white mb-2 p-2'>
    <Grid fluid>
      <Row>
        <Col md={9} sm={12}>
          <Row>
            <Col md={6} sm={12}>
              <img src={`${process.env.REACT_APP_SERVER_URL}/images/hotels/${image}`} alt=''/>
            </Col>
            <Col md={6}>
              <h6>{name}</h6>
              {stars}
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <div className='hotel-price-container'>
            <p className='mb-0'>Precio por noche</p>
            <p>por habitacion</p>
            <p className='hotel-price'>
              <span>ARS</span>
              <span className='hotel-price-number'>{price}</span>
            </p>
            <button>VER HOTEL</button>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default Hotel