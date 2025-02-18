import { io } from "socket.io-client";

const socket = io("http://localhost:4000", {
  transports: ["websocket"],
  withCredentials: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export function useWebSocket() {
  return { socket, isConnected: socket.connected };
}
