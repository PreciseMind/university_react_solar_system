import React, {Component} from 'react'

export default class PlanetAnimation extends Component {

    render() {

        var sunRadius = 50;
        var sunStyle = this.defineSunStyle(sunRadius);

        return (

            <div className="wrap ">
                <div style={sunStyle}>
                    <div className="textTitle">
                        <kbd>
                            <span>Sun</span>
                        </kbd>
                    </div>
                    {
                        this.props.planets.map((planet, planetIndex) => {

                            var planetStyle = this.definePlanetStyle(sunRadius, planet);
                            var planetRotateReverse = this.definePlanetTextStyle(planet);

                            var planetRadius = planet.radius;

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

                                                var satelliteStyle = this.defineSatelliteStyle(planetRadius, satellite);
                                                var satellinteRotateReverse = this.defineSatelliteTextStyle(satellite);
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
    };

    defineSunStyle = (sunRadius) => {

        return {
            background: 'yellow',
            width: (sunRadius * 2) + 'px',
            height: (sunRadius * 2) + 'px',
            borderRadius: '50%',
            margin: '40%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
        };
    };

    definePlanetStyle = (sunRadius, planet) => {

        return {
            background: 'green',
            width: (planet.radius * 2) + 'px',
            height: (planet.radius * 2) + 'px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            transformOrigin: (planet.distance + sunRadius) + 'px ' + sunRadius + 'px 0px',
            marginLeft: -planet.distance + 'px',
            animation: this.defineAnimation(planet.velocity, false),
            position: 'absolute'
        };
    };

    definePlanetTextStyle = (planet) => {

        return {
            transformOrigin: planet.radius + 'px ' + planet.radius + 'px 0px',
            animation: this.defineAnimation(planet.velocity, true)
        };
    };


    defineSatelliteStyle = (planetRadius, satellite) => {

        return {
            background: 'indigo',
            width: (satellite.radius * 2) + 'px',
            height: (satellite.radius * 2) + 'px',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            transformOrigin: (satellite.distance + planetRadius) + 'px ' + planetRadius + 'px 0px',
            marginLeft: -satellite.distance + 'px',
            animation: this.defineAnimation(satellite.velocity, false),
            position: 'absolute'
        };
    };

    defineSatelliteTextStyle = (satellite) => {

        return {
            transformOrigin: satellite.radius + 'px ' + satellite.radius + 'px 0px',
            animation: this.defineAnimation(satellite.velocity, true)
        }
    };

    defineAnimation = (velocity, isText) => {

        var animationValue = 'rotate';
        animationValue += ' ' + Math.abs(velocity) + 's';
        var isReverse;

        animationValue += ' linear infinite';

        if (isText) {
            isReverse = !(velocity < 0);
        } else {
            isReverse = (velocity < 0);
        }

        if (isReverse) {
            animationValue += ' reverse';
        }

        console.log(animationValue);
        return animationValue;
    };

}