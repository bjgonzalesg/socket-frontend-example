import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ChatView from "./components/ChatView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ChatView />,
      },
    ],
  },
]);

export default router;
