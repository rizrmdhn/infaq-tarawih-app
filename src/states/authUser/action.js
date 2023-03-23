
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from "../../utils/api";
import myToast from "../../components/Toast";

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
}

function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser
        }
    }
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
    }
}

function asyncSetAuthUser({ username, password }) {
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const token = await api.login({ username, password })
            api.putAccessToken(token)
            const authUser = await api.getOwnProfile()

            dispatch(setAuthUserActionCreator(authUser))

            myToast.fire({
                icon: 'success',
                title: 'Login success',
            })


        } catch (error) {
            myToast.fire({
                icon: 'error',
                title: error.message,
            })
        }
        dispatch(hideLoading())
    }

}

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(unsetAuthUserActionCreator())
        api.putAccessToken('')
    }
}

export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
}