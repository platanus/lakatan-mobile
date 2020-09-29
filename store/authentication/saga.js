import { call, put, takeLatest } from 'redux-saga/effects'
import { actions as authenticationActions} from './slice'
import { SING_IN_REQUEST } from '../types'
import  api  from '../../api/authentication'

function* signInRequest({ payload }) {
    yield put(authenticationActions.start())
    try { 
        const { 
            messages, 
            is_success, 
            data: { 
                user: 
                { 
                    authentication_token 
                }
            }
        } = yield call(api.signInApi, payload)
        if (is_success) {
            yield put(authenticationActions.signInSuccess({
                [email]: payload, 
                authentication_token
            }))
        }
    } catch (error) {
        console.log(error)
    }
    yield put(authenticationActions.finish())
}


export default function* authenticactionSaga() {
    yield takeLatest(SING_IN_REQUEST, signInRequest)
}

