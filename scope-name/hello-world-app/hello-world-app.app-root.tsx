import ReactDOM from "react-dom/client";
import { HelloWorld } from "@ksr20612/my-scope.ui.hello-world";

export const HelloWorldApp = () => <HelloWorld />;

const root = document!.getElementById('root');
ReactDOM.createRoot(root as HTMLElement).render(<HelloWorldApp />);

