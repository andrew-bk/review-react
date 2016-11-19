import React from 'react'
import { addReview } from './actions'
import { connect } from 'react-redux';

class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.dispatch(addReview(this.text.value, this.reviewer.value, this.rating.value));
        event.preventDefault();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="container-fluid">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <div className="col-lg-12">
                                    <label>Review</label>
                                    <textarea className="form-control review-textarea" rows="3" name="reviewer" ref={(text) => this.text = text}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-1 col-form-label">Name</label>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" name="reviewer" ref={(reviewer) => this.reviewer = reviewer}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-1 col-form-label">Rating</label>
                                <div className="col-lg-2">
                                    <select className="form-control" name="rating"  ref={(rating) => this.rating = rating}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <button className="btn btn-primary pull-right" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

ReviewForm = connect()(ReviewForm);

export default ReviewForm