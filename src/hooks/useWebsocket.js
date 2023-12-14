import { useContext } from "react";
import WebsocketContext from "../context/WebsocketContext";

const useWebsocket = () => {
  return useContext(WebsocketContext);
};

export default useWebsocket;
