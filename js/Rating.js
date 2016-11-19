import React from 'react'

class Rating extends React.Component {
    render() {

        var stars = '';

        for(var i = 0; i < 5; i++) {
            if(i < Number(this.props.numberOfStars)) {
                stars += '<span class="glyphicon glyphicon-star"></span>'
            } else {
                stars += '<span class="glyphicon glyphicon-star-empty"></span>'
            }
        }

        var starsObj = {__html: stars};

        return (
            <span dangerouslySetInnerHTML={starsObj}/>
        )
    }
}

export default Rating