import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import { Provider } from 'react-redux'
import configureStore from 'model/store'

import Navbar from './features/Navbar'
import HotelList from './features/HotelList'
import Filters from './features/Filters'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={configureStore()}>
        <div className='app'>
          <Navbar/>
          <div className='layout'>
            <Grid fluid>
              <Row>
                <Col md={3}>
                  <Filters/>
                </Col>
                <Col md={9}>
                  <HotelList/>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
