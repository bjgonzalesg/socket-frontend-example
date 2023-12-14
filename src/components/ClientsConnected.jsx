export default function ClientsConnected({ client }) {
  return (
    <ul className="font-bold">
      {"Cliente: "}
      <span className="font-normal">{client}</span>
    </ul>
  );
}
