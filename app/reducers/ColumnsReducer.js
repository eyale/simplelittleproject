import {
    COLUMN_ADD,
    COLUMN_REMOVE
} from '../actions/ColumnsActions'

export default function columnReducer(state = [], action) {
    console.log(state)
    switch(action.type) {
        case COLUMN_ADD:
            return [...state, {
                name: action.name,
                id: action.id
            }]
        case COLUMN_REMOVE:
        default:
            return state;
    }
}