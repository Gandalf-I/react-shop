// Sagas
import {call, put, takeEvery} from "@redux-saga/core/effects";

function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
          .then(res => res.json())
      }
    );
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}
