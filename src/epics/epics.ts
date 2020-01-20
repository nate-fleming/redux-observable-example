import { ofType } from "redux-observable";
import { mapTo, delay } from "rxjs/operators";

export const pingEpic = (action$: any) =>
  action$.pipe(
    ofType("PING"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PONG" })
  );

export const pongEpic = (action$: any) =>
  action$.pipe(
    ofType("PONG"),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: "PING" })
  );
