import React, { Component} from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import {Buttons, Inputs, Loader} from "../../blocks";
import {pathShowPending, pathUpdatePending} from "../../../actions/pathActionCreator";


class EditPath  extends Component {
    state = {
        pathId:'',
        name: ''
    };
    handleInputChange = ({target: { value } }) => {
        this.setState({
            name: value
        });
    };
    handleButtonClick = () => {
        const {pathId, name} = this.state;
        this.props.dispatch(pathUpdatePending({pathId, name}));
        if(!this.props.isLoading){
            this.props.history.push("/");
        }
    };
    componentDidMount() {
        const pathId = this.props.match.params.id;
        this.props.dispatch(pathShowPending({ pathId }));
    }

    render() {
        const {name} = this.state;
        const { paths: {isLoading } } = this.props;
        if(isLoading) return <Loader/>;
        return (
            <section className="container">
                <section className="create-form">
                    <Inputs.Input
                        nameOfClass={"create-form__input"}
                        name={"name"}
                        placeholder={"/home/default or D:\\Projects"}
                        handleInputChange={this.handleInputChange}
                        value={name||this.props.paths.name}
                    />
                    <Buttons.SuccessButton
                        buttonTitle={"Edit"}
                        handleButtonClick={this.handleButtonClick}
                    />
                </section>
            </section>
        )
    }
}
const mapStateToProps = (state) =>({
    paths: state.paths
});
export default withRouter(connect(mapStateToProps)(EditPath));
