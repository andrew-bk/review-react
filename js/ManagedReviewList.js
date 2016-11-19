"use strict";

import { connect } from 'react-redux';
import ReviewList from './ReviewList';


const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ManagedReviewList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewList);

export default ManagedReviewList;
