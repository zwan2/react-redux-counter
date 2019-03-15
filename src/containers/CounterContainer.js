import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from "react-redux";
import { getRandomColor } from '../utils';

//State - Props
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
});

//Action - Props
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
})

//Counter (Component) - App
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;