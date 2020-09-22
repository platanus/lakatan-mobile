import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga';
import { configureStore } from "@reduxjs/toolkit" 
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware(); // crear el middleware de saga para eventos asíncronos

const persistConfig = {         // envuelve el AsyncStorage (memoria local) en el persistor
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authentication'] // persistirán solo el estado del reducir auth...
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // envuelve el reducer en el persistor

const store = configureStore({     // se crea la store y se le entrega el reducer
    reducer: persistedReducer,
    middleware: [sagaMiddleware]
})

const persistor = persistStore(store)  // permite generar un delay hasta que los datos son obtenidos de la store
                                        // sirve para implementar la splash screen

export {store, persistor}