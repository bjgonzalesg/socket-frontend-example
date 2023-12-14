import useWebsocket from "../hooks/useWebsocket";

export default function ServerStatus({ message }) {
  const { isConnected } = useWebsocket();
  return (
    <div
      className={`flex justify-center items-center mb-4 0 p-1 rounded-lg ${
        isConnected ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <img
        src="/serverStatusIcon.svg"
        alt="server_status_icon"
        className="w-12 rounded p-2"
      />
      {isConnected ? "Conectado" : "Desconectado"}
    </div>
  );
}
