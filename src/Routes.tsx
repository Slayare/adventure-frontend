import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { SignIn } from "@/pages/SignIn";

import theme from "./theme";
import { CssBaseline, ScopedCssBaseline } from "@mui/joy";

const Routes = () => (
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

export default Routes;
