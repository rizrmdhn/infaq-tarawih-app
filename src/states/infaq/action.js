import { hideLoading, showLoading } from 'react-redux-loading-bar';
import myToast from '../../components/Toast';
import api from '../../utils/api';
import { setIsLoadingActionCreator } from '../isLoading/action';

const ActionType = {
    RECEIVE_INFAQS: 'RECEIVE_INFAQS',
    CREATE_INFAQ: 'CREATE_INFAQ',
    DELETE_INFAQ: 'DELETE_INFAQ',
};

function receiveInfaqsActionCreator(infaqs) {
    return {
        type: ActionType.RECEIVE_INFAQS,
        payload: { infaqs },
    };
}

function createInfaqActionCreator(infaq) {
    return {
        type: ActionType.CREATE_INFAQ,
        payload: { infaq },
    };
}

function deleteInfaqActionCreator(infaqId) {
    return {
        type: ActionType.DELETE_INFAQ,
        payload: { infaqId },
    };
}

function asyncGetInfaqs() {
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(setIsLoadingActionCreator(true));
        try {
            const infaqs = await api.getAllInfaq();
            dispatch(receiveInfaqsActionCreator(infaqs));
        } catch (error) {
            myToast.fire({
                icon: 'error',
                title: error.message,
            });
        }
        dispatch(setIsLoadingActionCreator(true));
        dispatch(hideLoading());
    };
}

function asyncCreateInfaq({ total }) {
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(setIsLoadingActionCreator(true));
        try {
            const infaq = await api.createInfaq({ total });
            dispatch(createInfaqActionCreator(infaq));
        } catch (error) {
            myToast.fire({
                icon: 'error',
                title: error.message,
            });
        }
        dispatch(setIsLoadingActionCreator(true));
        dispatch(hideLoading());
    };
}

function asyncDeleteInfaq(infaqId) {
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(setIsLoadingActionCreator(true));
        try {
            await api.deleteInfaq(infaqId);
            dispatch(deleteInfaqActionCreator(infaqId));
        } catch (error) {
            myToast.fire({
                icon: 'error',
                title: error.message,
            });
        }
        dispatch(setIsLoadingActionCreator(true));
        dispatch(hideLoading());
    };
}

export { ActionType, asyncGetInfaqs, asyncCreateInfaq, asyncDeleteInfaq };