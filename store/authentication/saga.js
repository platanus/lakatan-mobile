import { call, put, takeLatest } from 'redux-saga/effects'
import { actions as authenticationActions} from './slice'
import { SING_IN_REQUEST } from '../types'
import  api  from '../../api/authentication'

function* signInRequest(action) {
    yield put(authenticationActions.start())
    try { 
        const { data } = yield call(api.signInApi)
        yield console.log(data)
    } catch (error) {
        console.log(error)
    }
    yield put(authenticationActions.finish())
}


export default function* authenticactionSaga() {
    yield takeLatest(SING_IN_REQUEST, signInRequest)
}

