import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import isLoadingReducer from "./isLoading/reducer";
import infaqReducer from "./infaq/reducer";
import usersReducer from "./users/reducer";
import themeReducer from "./theme/reducer";

const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        isPreload: isPreloadReducer,
        isLoading: isLoadingReducer,
        loadingBar: loadingBarReducer,
        infaqs: infaqReducer,
        users: usersReducer,
        theme: themeReducer,
    },
});

export default store;