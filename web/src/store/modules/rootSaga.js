import { all } from 'redux-saga/effects';
import shop from './shop/saga';

export default  function* rootSaga() {
    return yield all([shop]);
}