import { ThemeProvider } from "styled-components";
import "react-multi-carousel/lib/styles.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import THEMES from "./style/theme";
import Navbar from "./components/Navbar/Navbar";
import Discover from "./pages/Discover/Discover";
import Home from "./pages/Home/Home";
import Feed from "./pages/Feed/Feed";
import Store from "./pages/Store/Store";

import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <Router>
      <ThemeProvider theme={THEMES}>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/home" exact component={Home} />
          <Route path="/store" exact component={Store} />
          <Route path="/discover" exact component={Discover} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
