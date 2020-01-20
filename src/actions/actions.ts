const PING = "PING";
const PONG = "PONG";
const TOGGLEPLAYING = "TOGGLEPLAYING";

export const pingAction = () => ({
  type: PING
});

export const pongAction = () => ({
  type: PONG
});

export const togglePlayingAction = () => ({
  type: TOGGLEPLAYING
});
