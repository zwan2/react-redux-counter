import number from './number';
import color from './color';
import { combineReducers} from "redux";

//서브 리듀서를 합쳐줌
const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;