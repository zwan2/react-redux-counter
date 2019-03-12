import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

//Presentational: 함수형
const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
    return (
        <div
            className="Counter"
            onClick={onIncrement}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
            onDoubleClick={onSetColor}
            style={{ backgroundColor: color }}>
            {number}
        </div>
    );
};

//자료형을 지정 (대소문자 주의)
Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;