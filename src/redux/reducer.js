/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import {createReducer} from "@reduxjs/toolkit";

import {
    getLocalStorageTheme,
    getLocalStorageUseName,
    saveLocalStorageTheme,
    saveLocalStorageUseName
} from "./local-storage";

import {SELECT_THEME, SIGNIN_CALLBACK_ERROR, USE_NAME, USER} from "./actions";

const initialState = {
    theme: getLocalStorageTheme(),
    useName : getLocalStorageUseName(),
    user : null,
    signInCallbackError : null
};

export const reducer = createReducer(initialState, {

    [SELECT_THEME]: (state, action) => {
        state.theme = action.theme;
        saveLocalStorageTheme(state.theme);
    },

    [USE_NAME]: (state) => {
        state.useName = !state.useName;
        saveLocalStorageUseName(state.useName);
    },

    [USER]: (state, action) => {
        state.user = action.user;
    },

    [SIGNIN_CALLBACK_ERROR]: (state, action) => {
        state.signInCallbackError = action.signInCallbackError;
    },
});
