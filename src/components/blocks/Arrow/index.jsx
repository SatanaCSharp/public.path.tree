import React from 'react';

 const Arrow = ({arrowClassName, onClick})=>(
    <div
        className={arrowClassName}
        onClick={onClick}>
        ▾
    </div>
);
export {
    Arrow
}
