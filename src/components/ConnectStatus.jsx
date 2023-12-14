import useWebsocket from "../hooks/useWebsocket";
import ClientsConnected from "./ClientsConnected";

export default function ConnectStatus() {
  const { disconnect, clientsConnected } = useWebsocket();

  return (
    <div className="w-full bg-gray-50 ">
      <div className="w-full ">
        <p className="text-center font-bold mb-4">Usuarios conectados</p>
        <ul>
          {clientsConnected.map((client) => (
            <ClientsConnected key={client} client={client} />
          ))}
        </ul>
      </div>
      <button
        onClick={disconnect}
        className="bg-sky-400 p-4 rounded-md text-lg w-full shadow-lg hover:bg-sky-500 duration-75 mt-4 uppercase font-bold"
      >
        Desconectarse
      </button>
    </div>
  );
}
