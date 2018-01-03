import {
    COLUMN_ADD,
    COLUMN_REMOVE
} from '../actions/ColumnsActions'

export default function columnReducer(state = [], action) {
    switch(action.type) {
        case COLUMN_ADD:
        console.log(state)
            return [...state, {name: action.name}]
        default:
            return state;
    }
}