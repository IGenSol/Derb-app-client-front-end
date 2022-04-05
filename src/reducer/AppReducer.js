import React from 'react';

export default (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                userId: [action.payload, state.userId]
            }
        case 'REMOVE_ITEM':
            return {
                userId: null
            }
        default:
            return state;
    }
}