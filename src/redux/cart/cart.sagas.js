//first import all needed effects
import { takeLatest, call, put, all } from 'redux-saga/effects';
//third import UserActionTypes
import UserActionTypes from '../user/user.types';
//4. and the action
import { clearCart } from './cart.actions';

//6. create a new clearcartonsignout
export function* clearCartOnSignOut() {
    yield put(clearCart())
}

//5. export new saga function
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

//second create cartSagas for rootSagas
export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
    ])
}

//7.add cartSagas to root-saga.js
//8.update reducer to listen for a new action type
