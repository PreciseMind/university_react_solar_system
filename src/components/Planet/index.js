import React, {Component} from 'react'

export default class Planet extends Component {
    constructor(props) {
        super(props);
    };

    editMode = () => {
        this.props.selectFunction(this.props.index)
    };
    remove = () => {
        this.setState({editMode: false});
        this.props.deleteFunction(this.props.index)
    };
    save = () => {
        var newPlanetTitle = this.refs.editTitleRef.value;
        var newPlanetRadius = this.refs.editRadiusRef.value;
        var newPlanetDistance = this.refs.editDistanceRef.value;
        var newPlanetVelocity = this.refs.editVelocityRef.value;
        var updatedPlanet = {
            title: newPlanetTitle,
            distance: parseInt(newPlanetDistance),
            radius: parseInt(newPlanetRadius),
            velocity: parseInt(newPlanetVelocity)
        };
        this.props.updateFunction(this.props.index, updatedPlanet);
        this.setState({editMode: false})
    };
    renderView = () => {
        console.log(this.props.planetData.title + " "+ this.props.planetData.velocity);
        return (
            <div className="panel panel-primary" onClick={this.editMode}>
                <div className="panel-body">
                    <div className="form-group">
                        <label>Title:</label>
                        <div className="text">{this.props.planetData.title}</div>
                    </div>
                    <div className="form-group">
                        <label>Radius:</label>
                        <div className="text">{this.props.planetData.radius}</div>
                    </div>
                    <div className="form-group">
                        <label>Distance:</label>
                        <div className="text">{this.props.planetData.distance}</div>
                    </div>
                    <div className="form-group">
                        <label>Velocity:</label>
                        <div className="text">{this.props.planetData.velocity}</div>
                    </div>
                </div>
            </div>
        );
    };
    renderEdit = () => {
        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" ref="editTitleRef" className="form-control"
                               defaultValue={this.props.planetData.title}/>
                    </div>
                    <div className="form-group">
                        <label>Radius:</label>
                        <input type="number" ref="editRadiusRef" className="form-control"
                               defaultValue={this.props.planetData.radius}/>
                    </div>
                    <div className="form-group">
                        <label>Distance:</label>
                        <input type="number" ref="editDistanceRef" className="form-control"
                               defaultValue={this.props.planetData.distance}/>
                    </div>
                    <div className="form-group">
                        <label>Velocity:</label>
                        <input type="number" ref="editVelocityRef" className="form-control"
                               defaultValue={this.props.planetData.velocity}/>
                    </div>
                    <div className="form-group">

                        <button onClick={this.remove} className="btn btn-danger">Delete</button>
                        <button onClick={this.save} className="btn btn-default">Save</button>
                    </div>
                </div>

            </div>
        );
    };

    render() {
        if (this.props.planetData.isSelected) {
            return this.renderEdit();
        } else {
            return this.renderView();
        }
    }
}