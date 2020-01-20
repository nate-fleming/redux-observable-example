import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { combineEpics } from "redux-observable";

import reducers from "../reducers/reducers";
import { pingEpic, pongEpic } from "../epics/epics";

const rootEpic = combineEpics(pingEpic, pongEpic);

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}
