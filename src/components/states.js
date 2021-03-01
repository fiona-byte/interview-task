import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../actions/data';
import './CovidData/style.css';

class States extends Component {
    componentDidMount = () => {
        this.props.fetchData(this.state)
    }
    
    render() {
        const statesData = this.props.states;
        return (
            <div>
                <table className="data__table">
                    <thead>
                        <tr>
                            <th>State</th>
                            <th>Confirmed Cases</th>
                            <th>Cases On Admission</th>
                            <th>Discharged</th>
                            <th>Death</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            statesData.map(stateData => {
                                return <tr key={stateData._id}>
                                            <td>{stateData.state}</td>
                                            <td>{stateData.confirmedCases}</td>
                                            <td>{stateData.casesOnAdmission}</td>
                                            <td>{stateData.discharged}</td>
                                            <td>{stateData.death}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        states: state.data.states
    }
}

export default withRouter(connect(mapStateToProps, { fetchData })(States));