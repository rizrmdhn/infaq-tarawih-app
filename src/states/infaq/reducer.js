import { ActionType } from './action';

function infaqReducer(infaqs = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_INFAQS:
            return action.payload.infaqs;
        case ActionType.CREATE_INFAQ:
            return [...infaqs, action.payload.infaq];
        case ActionType.DELETE_INFAQ:
            return infaqs.filter((infaq) => infaq.id !== action.payload.infaqId);
        default:
            return infaqs;
    }
}

export default infaqReducer;