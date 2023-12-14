import useWebsocket from "../hooks/useWebsocket";

export default function DisconnectStatus() {
  const { connect } = useWebsocket();
  return (
    <div>
      <button
        onClick={connect}
        className="p-4 rounded-md text-lg w-full shadow-lg  cursor-pointer bg-sky-400 hover:bg-sky-500 uppercase font-bold"
      >
        Conectarse
      </button>
    </div>
  );
}
