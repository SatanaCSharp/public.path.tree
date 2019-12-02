import React, { Component } from 'react';
import {Inputs, Buttons} from "../../blocks";
class Tree extends Component {
    state = {
        name: ""
    }
    handleInputChange = ({target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    }
    handleButtonClick = () => {
        console.log("Click!");
    }
    render() {
        const { name } = this.state;
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
                </section>
            </section>
        )
    }
}

export default Tree;