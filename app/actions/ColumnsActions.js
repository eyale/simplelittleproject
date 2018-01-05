export const COLUMN_ADD = 'COLUMN_ADD'
export const COLUMN_REMOVE = 'COLUMN_REMOVE'

export function addColumn(name, id) {
    return {
        type: COLUMN_ADD,
        name,
        id
    };
}

export function removeColumn(name, id) {
    return {
        type: COLUMN_REMOVE,
        name,
        id
    };
}
