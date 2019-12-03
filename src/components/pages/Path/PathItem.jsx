import React from 'react';
import {Buttons} from "../../blocks";
const PathItem = ({ path, handleTreeButtonClick, handleDeleteButtonClick, handleEditButtonClick })=>(
    <section className="paths-list__item">
        <span className="title">{path.name}</span>
        <section className="buttons">
            <Buttons.TreeButton handleButtonClick={handleTreeButtonClick}/>
            <Buttons.EditButton handleButtonClick={handleEditButtonClick}/>
            <Buttons.DeleteButton handleButtonClick={handleDeleteButtonClick.bind(path)}/>
        </section>
    </section>
);
export default  PathItem;
