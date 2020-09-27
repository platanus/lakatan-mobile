import { all } from 'redux-saga/effects'
import authenticactionSaga from './authentication/saga'

export default function* rootSagas() {
    yield all ([
        authenticactionSaga()
      ])
}