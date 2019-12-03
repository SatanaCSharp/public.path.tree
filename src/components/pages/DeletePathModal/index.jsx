import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import { connect } from "react-redux";
import { Buttons } from "../../blocks";
import {pathDeletePending} from "../../../actions/pathActionCreator";


class DeletePathModal extends Component {
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
    handleButtonClick = () => {
        const {pathId} = this.state;
        this.props.dispatch(pathDeletePending({pathId: pathId}));
        this.props.onClose();
    };

    render () {
        const { name } = this.state;
        return(
            <Modal
                title="Delete path"
                isOpen={this.props.isOpen}
                onClose={this.props.onClose}
            >
                <section className="delete-form">
                   <span className="title">{name}</span>
                    <div className="modal-buttons">
                        <Buttons.DeleteBtnModal
                            buttonTitle={"Delete"}
                            handleButtonClick={this.handleButtonClick}
                        />
                        <Buttons.DefaultButton
                            buttonTitle={"Cancel"}
                            handleButtonClick={this.props.onClose}
                        />
                    </div>
                </section>
            </Modal>

        )
    }
}
const mapStateToProps = (state) =>({
    paths: state.paths
});
export default connect(mapStateToProps)(DeletePathModal);
