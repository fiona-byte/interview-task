import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/data';
import States from '../states';
import './style.css';

class CovidData extends Component {

  componentDidMount = () => {
    this.props.fetchData(this.state);
  }

  render () {
    return (
      <div className="data">
        <h2 className="data__header">COVID Breakdown in Nigeria</h2>
        <div className="data__container">
          <div className="data__card--container">
            <div className="data__card">
              <h2 className="data__card--header">Total Samples Tested</h2>
              <p className="data__card--info">{this.props.fetchedData.fetchedData.totalSamplesTested}</p>
            </div>
            <div className="data__card">
              <h2 className="data__card--header">Total Confirmed Cases</h2>
              <p className="data__card--info">{this.props.fetchedData.fetchedData.totalConfirmedCases}</p>
            </div>
            <div className="data__card">
              <h2 className="data__card--header">Total Active Cases</h2>
              <p className="data__card--info">{this.props.fetchedData.fetchedData.totalActiveCases}</p>
            </div>
            <div className="data__card">
              <h2 className="data__card--header">Discharged</h2>
              <p className="data__card--info">{this.props.fetchedData.fetchedData.discharged}</p>
            </div>
            <div className="data__card">
              <h2 className="data__card--header">Death</h2>
              <p className="data__card--info">{this.props.fetchedData.fetchedData.death}</p>
            </div>
          </div>
          <div className="data__table--container">
            <States />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.data.loading,
    fetchedData: state.data
  }
}

export default withRouter(connect(mapStateToProps, { fetchData })(CovidData));