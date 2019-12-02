import React from 'react';
import { FiX } from "react-icons/fi";
import PropTypes  from 'prop-types';
const SuccessButton = ({buttonTitle, handleButtonClick }) => (
    <button className={"success-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);
const CloseButton = ({ handleButtonClick }) => (
    <FiX size={25} color={"#6c757d"} onClick={handleButtonClick}/>
);


SuccessButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired
};

CloseButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};



export {
    SuccessButton,
    CloseButton
}