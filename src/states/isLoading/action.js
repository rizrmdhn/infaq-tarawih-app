const ActionType = {
    SET_IS_LOADING: 'SET_IS_LOADING',
}

function setIsLoadingActionCreator(isLoading) {
    return {
        type: ActionType.SET_IS_LOADING,
        payload: { isLoading },
    }
}

export { ActionType, setIsLoadingActionCreator };