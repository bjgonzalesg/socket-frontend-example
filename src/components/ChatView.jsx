import { useEffect, useState } from "react";
import ServerStatus from "./ServerStatus";
import socket from "../socket";
import DisconnectStatus from "./DisconnectStatus";
import ConnectStatus from "./ConnectStatus";
import useWebsocket from "../hooks/useWebsocket";

export default function ChatView() {
  const { isConnected, setIsConnected, setClientsConnected } = useWebsocket();

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("clientsUpdated", (clients) => {
      setClientsConnected(clients);
    });
  });

  return (
    <div className="flex items-center justify-between flex-1">
      <div className="bg-white w-full rounded-lg shadow-lg p-3 py-5">
        <h1 className="text-4xl font-bold text-center uppercase mb-4">
          ChatView - Sockets
        </h1>
        <ServerStatus />
        {!isConnected ? <DisconnectStatus /> : <ConnectStatus />}
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}
