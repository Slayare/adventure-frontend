import { CssVarsProvider } from "@mui/joy/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "@/pages/HomePage";
import { SignIn } from "@/pages/SignIn";
import { ColorSchemeToggle } from "@/ui/ColorSchemeToggle";

const Routes = () => (
  <CssVarsProvider>
    <ColorSchemeToggle />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  </CssVarsProvider>
);

export default Routes;
