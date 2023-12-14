import { Manager } from "socket.io-client";

const url = "http://localhost:3000/socket.io/socket.io.js";

const manager = new Manager(url);
const socket = manager.socket("/");

export default socket;


