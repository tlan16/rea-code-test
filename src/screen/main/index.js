import React from 'react';
import Column from './components/Column';
import { Grid, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getSavedProperties, getResultsProperties } from '../../store/properties/reducer'

class MainScreen extends React.Component{

    render(){
      const { saved, results } = this.props;
      return(
        <Grid>
          <Row>
            <Col xs = {6} md = {4}>Results</Col>
            <Col xs = {6} md = {4}>Saved Properties</Col>
          </Row>
          <Row>
            <Col xs = {6} md = {4}><Column ids = {results} isAdd = {true} /></Col>
            <Col xs = {6} md = {4}><Column ids = {saved} isAdd = {false} /></Col>
          </Row>
        </Grid>
      )
    }
}

const mapStateToProps = (state) => {
    return {
      saved: getSavedProperties(state),
      results: getResultsProperties(state)
    }
}

export default connect(mapStateToProps)(MainScreen);