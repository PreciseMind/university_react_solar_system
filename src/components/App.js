import React, {PureComponent} from 'react'
import PlanetController from './planetController'
import './app.css'

export default class App extends PureComponent {

    render() {
        return (
            <div className="container-fluid">
                <PlanetController/>
            </div>
        )
    }
}