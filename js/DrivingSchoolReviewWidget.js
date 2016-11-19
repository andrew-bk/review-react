import React from 'react'
import ManagedReviewList from './ManagedReviewList'
import DrivingSchool from './DrivingSchool'

class DrivingSchoolReviewWidget extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <DrivingSchool />
                    <ManagedReviewList />
                </div>
            </div>
        )
    }
}

export default DrivingSchoolReviewWidget



