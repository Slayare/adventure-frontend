import { CssBaseline, ScopedCssBaseline } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { SignIn } from "@/pages/SignIn";

import theme from "./theme";

const App = () => (
  <CssVarsProvider theme={theme}>
    <CssBaseline />
    <ScopedCssBaseline>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/sign-in" component={SignIn} />
        </Switch>
      </Router>
    </ScopedCssBaseline>
  </CssVarsProvider>
);

export default App;
