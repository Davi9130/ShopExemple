import "./App.css";
import Login from "./components/pages/Login";
import Shop from "./components/pages/Shop";
import { createGlobalStyle } from "styled-components";

import Nav from "./components/organisms/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStorage } from "./components/Hooks/GlobalContext";
import FooterMain from "./components/organisms/FooterMain";

function App() {
  const GlobalStyle = createGlobalStyle`
  body {
  margin:0;

  }
`;
  const Nopage = () => {
    return (
      <p style={{ color: "red", textAlign: "center", padding: "25rem" }}>
        404 Pagina Não Encontarda
      </p>
    );
  };

  return (
    <>
      <GlobalStyle />
      <GlobalStorage>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/shop" component={Shop} />
            <Route component={Nopage} />
          </Switch>
          <FooterMain />
        </BrowserRouter>
      </GlobalStorage>
    </>
  );
}

export default App;
