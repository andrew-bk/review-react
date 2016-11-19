/*
- prettify the form
- prettify the reviews
- prettify the rating

 */
"use strict";
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { reviewApp } from './reducers'
import DrivingSchoolReviewWidget from './DrivingSchoolReviewWidget'

let store = createStore(reviewApp);

render(
    <Provider store={store}>
        <DrivingSchoolReviewWidget />
    </Provider>,
    document.getElementById('content')
);