import React, {PureComponent} from 'react'
import PlanetManager from './PlanetManager'
import './app.css'

class App extends PureComponent {

    render() {
        return (
            <div className="container-fluid">
                <PlanetManager/>
            </div>
        )
    }
}

export default App