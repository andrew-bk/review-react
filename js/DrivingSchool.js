import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from './ReviewForm'

class DrivingSchool extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title">{this.props.name}</h1>
                </div>
                <div className="panel-body">
                    <div className="container-fluid school-section">
                        <div className="row">
                            <div className="col-lg-10">
                                {this.props.description}
                            </div>
                            <div className="col-lg-2 rating-panel">
                                <span className="rating">{this.props.overallRating}</span><br/>
                                rating
                            </div>
                        </div>
                    </div>
                    <ReviewForm />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.drivingSchool.name,
        description: state.drivingSchool.description,
        overallRating: state.drivingSchool.overallRating
    };
};

DrivingSchool = connect(
    mapStateToProps,
    undefined
)(DrivingSchool);

export default DrivingSchool