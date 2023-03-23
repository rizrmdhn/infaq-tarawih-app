import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from "../../utils/api";
import { setAuthUserActionCreator } from '../authUser/action';
import { setIsLoadingActionCreator } from '../isLoading/action';

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
}

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: { isPreload },
    }
}

function asyncPreloadProcess() {
    return async (dispatch) => {
        dispatch(showLoading());
        dispatch(setIsLoadingActionCreator(true));
        try {
            // preload process
            const authUser = await api.getOwnProfile()
            dispatch(setAuthUserActionCreator(authUser))
        } catch (error) {
            // fallback process
            dispatch(setAuthUserActionCreator(null))
        }
        finally {
            // end process
            dispatch(setIsPreloadActionCreator(false))
        }
        dispatch(setIsLoadingActionCreator(false));
        dispatch(hideLoading());
    }
}

export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess,
}