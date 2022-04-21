import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import { ThemeProvider } from "./contexts/theme-context";
import PageLayout from "./layout";

import "./assets/styles/main.scss";

const HostRouter = () => (
  <BrowserRouter>
    <ThemeProvider>
        <PageLayout>
            <Routing />
        </PageLayout>
    </ThemeProvider>
  </BrowserRouter>
);

ReactDOM.render(<HostRouter />, document.getElementById("root"));