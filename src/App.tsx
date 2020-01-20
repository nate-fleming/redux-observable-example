import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import table from "./img/table.png";
import paddle from "./img/paddle.png";

import { pingAction, pongAction, togglePlayingAction } from "./actions/actions";

interface IProps {
  isPing: boolean;
  isPong: boolean;
  isPlaying: boolean;
  togglePlayingAction: any;
  pingAction: any;
}

const App: React.FC<IProps> = ({
  isPing,
  isPong,
  isPlaying,
  togglePlayingAction,
  pingAction
}) => {
  console.log(isPlaying, isPing, isPong);
  return (
    <div className="App">
      <header className="App-header">
        <img src={table} className="Table" alt="logo" />
        <button
          onClick={() => {
            togglePlayingAction();
            pingAction();
            console.log("clicked");
          }}
          className="Start-Button"
        >
          {isPlaying ? "Stop" : "Start"}
        </button>
        <div style={{ display: "flex", width: "100%" }}>
          {isPlaying && (
            <>
              {isPing && (
                <div className="Ping">
                  Ping
                  <img src={paddle} className="Left-Paddle" alt="paddle" />
                </div>
              )}
              {isPong && (
                <div className="Pong">
                  Pong
                  <img src={paddle} className="Left-Paddle" alt="paddle" />
                </div>
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isPing: state.isPing,
    isPong: state.isPong,
    isPlaying: state.isPlaying
  };
};

const matchDispatchToprops = (dispatch: any) => {
  return bindActionCreators(
    { pingAction, pongAction, togglePlayingAction },
    dispatch
  );
};

export default connect(mapStateToProps, matchDispatchToprops)(App);
