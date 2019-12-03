
import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import { connect } from "react-redux";
import {Buttons, Inputs} from "../../blocks";
import {pathUpdatePending} from "../../../actions/pathActionCreator";


class EditPathModal extends Component {
    state = {
        pathId:"",
        name: ""
    };
    static getDerivedStateFromProps(props, state) {
        if(!props.path._id && !props.path.name) return null;
        if(state.pathId && state.name) return null;
        return {
            pathId: props.path._id,
            name: props.path.name
        };
    }
    handleInputChange = ({target: { value } }) => {
        this.setState({
            name: value
        });
    };

    handleButtonClick = () => {
        const {pathId, name} = this.state;
        this.props.dispatch(pathUpdatePending({pathId, name}));
        this.props.onClose();
    };

    render () {
        const { name } = this.state;
        return(
            <Modal
                title="Edit path"
                isOpen={this.props.isOpen}
                onClose={this.props.onClose}
            >
                <section className="create-form">
                    <Inputs.Input
                        nameOfClass={"create-form__input"}
                        name={"name"}
                        placeholder={"/home/default or D:\\Projects"}
                        handleInputChange={this.handleInputChange}
                        value={name || " "}
                    />
                    <Buttons.SuccessButton
                        buttonTitle={"Update"}
                        handleButtonClick={this.handleButtonClick}
                    />
                </section>
            </Modal>

        )
    }
}
const mapStateToProps = (state) =>({
    paths: state.paths
});
export default connect(mapStateToProps)(EditPathModal);
