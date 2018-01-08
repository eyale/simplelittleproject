import {
    COLUMN_ADD,
    COLUMN_REMOVE,
    COLUMN_MENU_SHOW
} from '../actions/ColumnsActions'

export default function columnReducer(state = [], action) {
    switch(action.type) {
        case COLUMN_ADD:
            return [...state, {
                name: action.name,
                id: action.id
            }]
        case COLUMN_REMOVE:
            return [...state.filter(column => column.id !== action.id)]
        default:
            return state;
    }
}