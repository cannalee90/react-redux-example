
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore