import { ADD_REVIEW } from './actions'

const initialState = {
    drivingSchool: {
        name: "Mark's Driving School",
        description: "Thousands of pupils have trusted Mark's Driving School.  We have over a decade of experience in the industry and would be more than happy to answer any question you may have.  We offer high quality training and we maintain consistently high pass rates. We are also able to offer intensive or semi-intensive courses, refreshers and all other driver training.",
        overallRating: 0
    },
    reviews: []
};

function round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}

export function reviewApp(state = initialState, action = {}) {

    switch(action.type) {
        case ADD_REVIEW:

            var sumOfExistingRatings = state.reviews
                    .map(r => r.rating)
                    .reduce((a,b) => Number(a) + Number(b), 0);

            var newOverallRating = round( (sumOfExistingRatings + Number(action.rating)) / (state.reviews.length + 1), 1);
            var id = state.reviews.length + 1;

            return Object.assign({}, state, {
                drivingSchool: {
                    name: state.drivingSchool.name,
                    description: state.drivingSchool.description,
                    overallRating: newOverallRating
                },
                reviews: [
                    {
                        id: id,
                        text: action.text,
                        reviewer: action.reviewer,
                        rating: action.rating
                    },
                    ...state.reviews
                ]
            });
        default:
            return state;
    }

}