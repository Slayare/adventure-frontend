import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { SignIn } from "@/pages/SignIn";

import theme from "./theme";

const Routes = () => (
  <CssVarsProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  </CssVarsProvider>
);

export default Routes;
