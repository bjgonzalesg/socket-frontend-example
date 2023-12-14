import { createContext, useState } from "react";
import socket from "../socket";

const WebsocketContext = createContext();

const WebsocketProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [clientsConnected, setClientsConnected] = useState([]);

  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  return (
    <WebsocketContext.Provider
      value={{
        isConnected,
        clientsConnected,
        setClientsConnected,
        setIsConnected,
        connect,
        disconnect,
      }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};

export { WebsocketProvider };
export default WebsocketContext;
