import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/css/bootstrap-theme.css'

/*
    1) Add speed
    - >0
    - <0
    - ==0
    2) Change interface
    - color planets
    - name of columns
    - board color
 */
render(<App/>, document.getElementById('main-content'))