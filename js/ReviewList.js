import React from 'react';
import Rating from './Rating';

class Review extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-group-item">
                <div className="well review-text">
                    "{this.props.text}"
                </div>
                <div className="reviewer-line">{this.props.reviewer} <Rating numberOfStars={this.props.rating}/></div>
            </div>
        )
    }
}

class ReviewList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var reviews = this.props.reviews.map(function(review) {
            return (
                <Review key={review.id} reviewer={review.reviewer} text={review.text} rating={review.rating}/>
            )
        });
        return (
            <div>
                {this.props.reviews.length == 0 ? (
                    <div className="panel panel-default no-ratings">
                        <div className="panel-body">
                            This driving school has not been rated yet.
                        </div>
                    </div>
                ) : (
                    <div className="list-group">
                        {reviews}
                    </div>
                )}
            </div>
        )
    }
}

export default ReviewList