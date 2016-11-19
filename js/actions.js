export const ADD_REVIEW = 'ADD_REVIEW';

export function addReview(text, reviewer, rating) {
    return {
        type: ADD_REVIEW,
        text: text,
        reviewer: reviewer,
        rating: rating
    }
}

