import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";

const rootEl = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
