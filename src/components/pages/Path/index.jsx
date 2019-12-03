import React, { Component } from 'react';
import { connect } from "react-redux";
import {Inputs, Buttons} from "../../blocks";
import {pathCreatePending, pathPending} from "../../../actions/pathActionCreator";
import {Loader} from "../../blocks";
import PathItem from "./PathItem";
import { EditPathModal } from "../";
import DeletePathModal from "../DeletePathModal";



class Path extends Component {
    state = {
        name: "",
        isOpenModal: false,
        isOpenDeleteModal: false,
        path: {}
    };
    handleIsOpenModalClick = () =>{
        this.setState({
            isOpenModal: !this.state.isOpenModal
        });
    };
    handleIsDeleteModalClick = () => {
       this.setState({
           isOpenDeleteModal: !this.state.isOpenDeleteModal
        })
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
    setPath = (path)=> {
        this.setState({
            path: path
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
        this.setPath(path);
        this.handleIsOpenModalClick();
    };
    handleDeleteButtonClick = (path) => {
        this.setPath(path);
        this.handleIsDeleteModalClick();
    };

    componentDidMount() {
        this.props.dispatch(pathPending());
    }

    render() {
        const { name, isOpenModal,isOpenDeleteModal, path } = this.state;
        const { paths: {isLoading }, paths } = this.props;
        if(isLoading) return <Loader/>;
        return (
            <>
                <EditPathModal
                    isOpen={isOpenModal}
                    path={path}
                    onClose={this.handleIsOpenModalClick}
                />
                <DeletePathModal
                    isOpen={isOpenDeleteModal}
                    path={path}
                    onClose={this.handleIsDeleteModalClick}
                />
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
                                    handleDeleteButtonClick={()=> this.handleDeleteButtonClick(path)}
                                    handleEditButtonClick={()=> this.handleEditButtonClick(path)}
                                />
                            })}
                        </section>
                    </section>
                </section>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    paths: state.paths
});
export default connect(mapStateToProps)(Path);
