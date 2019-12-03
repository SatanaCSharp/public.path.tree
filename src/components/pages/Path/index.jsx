import React, { Component } from 'react';
import { connect } from "react-redux";
import {Inputs, Buttons} from "../../blocks";
import {pathCreatePending, pathDeletePending, pathPending} from "../../../actions/pathActionCreator";
import {Loader} from "../../blocks";
import PathItem from "./PathItem";



class Path extends Component {
    state = {
        name: "",
    };
    handleInputChange = ({target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    clearState = ()=> {
        this.setState({
            name: ''
        });
    };
    handleButtonClick = () => {
        const { name }= this.state;
        this.props.dispatch(pathCreatePending({name}));
        this.clearState();
    };
    handleTreeButtonClick = (path) => {
        this.props.history.push(`/tree/path/${path._id}`);
    };
    handleEditButtonClick = (path) => {
        this.props.history.push(`/path/${path._id}`);
    };
    handleDeleteButtonClick = (path) => {
        console.log("Path: ", path);
        this.props.dispatch(pathDeletePending({pathId: path._id}));
    };

    componentDidMount() {
        this.props.dispatch(pathPending());
    }

    render() {
        const { name } = this.state;
        const { paths: {isLoading } } = this.props;
        const { paths } = this.props;
        if(isLoading) return <Loader/>;
        return (
            <section className="tree">
                <section className="container">
                    <section className="create-form">
                        <Inputs.Input
                            nameOfClass={"create-form__input"}
                            name={"name"}
                            placeholder={"/home/default or D:\\Projects"}
                            handleInputChange={this.handleInputChange}
                            value={name}
                        />
                        <Buttons.SuccessButton
                            buttonTitle={"Create"}
                            handleButtonClick={this.handleButtonClick}
                        />
                    </section>
                    <section className="paths-list">
                        {Object.values(paths).map((path)=> {
                            return !path ? '': <PathItem
                                key={path._id}
                                path={path}
                                handleTreeButtonClick={()=> this.handleTreeButtonClick(path)}
                                handleDeleteButtonClick={this.handleDeleteButtonClick.bind(this, path)}
                                handleEditButtonClick={()=> this.handleEditButtonClick(path)}
                            />
                        })}
                    </section>
                </section>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    paths: state.paths
});
export default connect(mapStateToProps)(Path);
