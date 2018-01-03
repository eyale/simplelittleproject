export const COLUMN_ADD = 'COLUMN_ADD'
export const COLUMN_REMOVE = 'COLUMN_REMOVE'

export function addColumn(name) {
    return {
        type: COLUMN_ADD,
        name
    };
}

export function removeColumn(name) {
    return {
        type: COLUMN_REMOVE,
        name
    };
}
