import React, {Component} from 'react'

import Planet from '../Planet'
import PlanetAnimation from '../PlanetAnimation'

export default class PlanetManager extends Component {
    constructor(props) {
        super(props);
        this.deletePlanet = this.deletePlanet.bind(this);
        this.state = {
            planets: [
                {
                    title: "Mercury",
                    distance: 121,
                    isSelected: false,
                    radius: 25,
                    velocity: 8,
                    satellites: [
                        {
                            title: "Mercury's sat1",
                            distance: 40,
                            isSelected: false,
                            radius: 10,
                            velocity: 5
                        }
                    ]
                },
                {
                    title: "Venus",
                    distance: 220,
                    isSelected: false,
                    radius: 45,
                    velocity: 9,
                    satellites: [
                        {
                            title: "Venus's sat1",
                            distance: 30,
                            isSelected: false,
                            radius: 15,
                            velocity: 5
                        },
                        {
                            title: "Venus's sat2",
                            distance: 45,
                            isSelected: false,
                            radius: 5,
                            velocity: 5
                        }
                    ]
                },
                {
                    title: "Earth",
                    distance: 340,
                    isSelected: false,
                    radius: 35,
                    velocity: 10,
                    satellites: [{
                        title: "Earth's sat1",
                        distance: 32,
                        isSelected: false,
                        radius: 15,
                        velocity: 5
                    }]
                },
            ]
        };
    };

    deletePlanet = (index) => {
        let currentPlanets = this.state.planets;
        currentPlanets.splice(index, 1);
        this.setState({planets: currentPlanets});
    };

    deleteSatelline = (satellineIndex) => {
        let currentPlanets = this.state.planets;
        currentPlanets.forEach((planet, index) => {
            if (planet.isSelected) {
                let currentSatellines = planet.satellites;
                currentSatellines.splice(satellineIndex, 1);
            }
        });
        this.setState({planets: currentPlanets});
    };


    updatePlanet = (index, planetDataModel) => {
        let currentPlanets = this.state.planets;
        currentPlanets[index].title = planetDataModel.title;
        currentPlanets[index].radius = planetDataModel.radius;
        currentPlanets[index].distance = planetDataModel.distance;
        currentPlanets[index].velocity = planetDataModel.velocity;
        currentPlanets[index].isSelected = false;
        this.setState({planets: currentPlanets});
    };

    updateSatelline = (satellineIndex, satellineData) => {
        let currentPlanets = this.state.planets;
        currentPlanets.forEach((planet, index) => {
            if (planet.isSelected) {
                let currentSatellines = planet.satellites;
                currentSatellines[satellineIndex] = satellineData;
            }
        });
        this.setState({planets: currentPlanets});
    };

    selectPlanet = (planetIndex) => {
        let currentPlanets = this.state.planets;
        currentPlanets.forEach((planet, index) => {
            if (planetIndex !== index) {
                planet.isSelected = false;
            } else {
                planet.isSelected = true;
            }
            currentPlanets[index].satellites.forEach((satellite, jindex) => {
                satellite.isSelected = false;
            });
        });
        this.setState({planets: currentPlanets});
    };

    selectSatelline = (satellineIndex) => {
        let currentPlanets = this.state.planets;
        currentPlanets.forEach((planet, index) => {
            if (planet.isSelected) {
                let currentSatellines = planet.satellites;
                currentSatellines.forEach((satelline, jindex) => {
                    if (satellineIndex !== jindex) {
                        satelline.isSelected = false;
                    } else {
                        satelline.isSelected = true;
                    }
                });
            }
        });
        this.setState({planets: currentPlanets});
    };


    addNewPlanet = () => {
        let minVelocity = 0;
        let maxVelocity = 32;
        let currentPlanets = this.state.planets;
        let newDefaultPlanet = {
            title: "Default",
            distance: Math.floor(Math.random() * 50) + 30,
            radius: (Math.floor(Math.random() * 3) + 1) * 5,
            velocity: Math.floor(Math.random()*(maxVelocity-minVelocity))+minVelocity,
            isSelected: false,
            satellites: []
        };
        currentPlanets.push(newDefaultPlanet);
        this.selectPlanet(currentPlanets.length - 1);
    };


    addNewSatelline = () => {
        let currentPlanets = this.state.planets;
        currentPlanets.forEach((planet, index) => {
            if (planet.isSelected) {
                let minVelocity = 0;
                let maxVelocity = 32;
                let currentSatellines = planet.satellites;
                let newDefaultSatelline = {
                    title: "Default's sat",
                    distance: Math.floor(Math.random() * 50) + 30,
                    radius: (Math.floor(Math.random() * 3) + 1) * 5,
                    velocity: Math.floor(Math.random()*(maxVelocity-minVelocity))+minVelocity,
                    isSelected: false
                };
                currentSatellines.push(newDefaultSatelline);
                this.selectSatelline(currentSatellines.length - 1);
            }
        });
        this.setState({planets: currentPlanets});
    };

    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <h3 className="text-center">Planets</h3>
                    {
                        this.state.planets.map((item, i) => {
                            return (
                                <Planet key={i}
                                        index={i}
                                        planetData={item}
                                        updateFunction={this.updatePlanet}
                                        deleteFunction={this.deletePlanet}
                                        selectFunction={this.selectPlanet}
                                />
                            );
                        })
                    }
                    <button onClick={this.addNewPlanet} className="btn btn-default">Add</button>
                </div>
                <div className="col-sm-3">
                    <h3 className="text-center">Satellites</h3>
                    {
                        this.state.planets.filter(planet => planet.isSelected).map((planet, planetIndex) => {
                            return planet.satellites.map((item, i) => {
                                return (
                                    <Planet key={i}
                                            index={i}
                                            planetData={item}
                                            updateFunction={this.updateSatelline}
                                            deleteFunction={this.deleteSatelline}
                                            selectFunction={this.selectSatelline}
                                    />
                                );
                            })
                        })
                    }
                    {
                        this.state.planets.filter(planet => planet.isSelected).map((planet, planetIndex) => {
                            return (
                                <button onClick={this.addNewSatelline} className="btn btn-default">Add</button>
                            );
                        })
                    }
                </div>
                <div className="col-sm-6">
                    <h3 className="text-center">Solar System</h3>
                    <PlanetAnimation planets={this.state.planets}/>
                </div>
            </div>
        );
    }
}