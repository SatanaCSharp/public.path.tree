import React from 'react';
import { FiX } from "react-icons/fi";

const SuccessButton = ({buttonTitle, handleButtonClick, }) => (
    <button className={"success-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);
const CloseButton = ({ handleButtonClick }) => (
    <FiX size={25} color={"#6c757d"} onClick={handleButtonClick}/>
);

export {
    SuccessButton,
    CloseButton
}