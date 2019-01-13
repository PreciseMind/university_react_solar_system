import React, {Component} from 'react'

export default class PlanetAnimation extends Component {

    render() {
        var sunRadius = 40;
        var sunAnimStyle = {
            background: '#FFCC00',
            width: (sunRadius * 2) + 'px',
            height: (sunRadius * 2) + 'px',
            borderRadius: '50%',
            margin: '40%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
        };

        return (
            <div className="wrap ">
                <div style={sunAnimStyle}>
                    <div className="textTitle">
                        <kbd>
                            <span>Sun</span>
                        </kbd>
                    </div>
                    {
                        this.props.planets.map((planet, planetIndex) => {
                            //var randomSpeed = Math.floor(Math.random() * 5) + 4;
                            var planetVelocity = planet.velocity;
                            var planetRadius = planet.radius;

                            var planetStyle = {
                                background: '#F68A56',
                                width: (planetRadius * 2) + 'px',
                                height: (planetRadius * 2) + 'px',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '50%',
                                transformOrigin: (planet.distance + sunRadius) + 'px ' + sunRadius + 'px 0px',
                                marginLeft: -planet.distance + 'px',
                                animation: 'rotate ' + planetVelocity + 's linear infinite',
                                position: 'absolute'
                            };
                            var planetRotateReverse = {
                                transformOrigin: planetRadius + 'px ' + planetRadius + 'px 0px',
                                animation: 'rotate ' + planetVelocity + 's linear infinite reverse',
                            };
                            return (
                                <div style={planetStyle}>
                                    <div style={planetRotateReverse}>
                                        <div className="textTitle">
                                            <kbd>
                                                <span>{planet.title}</span>
                                            </kbd>
                                        </div>
                                        {
                                            planet.satellites.map((satellite, satelliteIndex) => {
                                                var satelliteVelocity = satellite.velocity;
                                                var satelliteRadius = satellite.radius;
                                                var satelliteStyle = {
                                                    background: '#875678',
                                                    width: (satelliteRadius * 2) + 'px',
                                                    height: (satelliteRadius * 2) + 'px',
                                                    borderRadius: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    transformOrigin: (satellite.distance + planetRadius) + 'px ' + planetRadius + 'px 0px',
                                                    marginLeft: -satellite.distance + 'px',
                                                    animation: 'rotate ' + satelliteVelocity + 's linear infinite reverse',
                                                    position: 'absolute'
                                                };
                                                var satellinteRotateReverse = {
                                                    transformOrigin: satelliteRadius + 'px ' + satelliteRadius + 'px 0px',
                                                    animation: 'rotate ' + satelliteVelocity + 's linear infinite'
                                                };
                                                return (
                                                    <div style={satelliteStyle}>
                                                        <div style={satellinteRotateReverse} className="textTitle">
                                                            <kbd>
                                                                <span>{satellite.title}</span>
                                                            </kbd>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>


                                </div>
                            );
                        })
                    }

                </div>
            </div>

        )
    }
}