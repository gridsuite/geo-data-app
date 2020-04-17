/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export const SELECT_THEME = 'SELECT_THEME';
export const DARK_THEME = 'Dark';
export const LIGHT_THEME = 'Light';

export function selectTheme(theme) {
    return { type: SELECT_THEME, theme: theme };
}

export const USE_NAME = 'USE_NAME';

export function toggleUseNameState() {
    return { type: USE_NAME };
}

export const USER = 'USER';

export function setLoggedUser(user) {
    return { type: USER, user : user};
}

export const SIGNIN_CALLBACK_ERROR = 'SIGNIN_CALLBACK_ERROR';

export function setSignInCallbackError(signInCallbackError) {
    return { type: SIGNIN_CALLBACK_ERROR, signInCallbackError : signInCallbackError};
}
