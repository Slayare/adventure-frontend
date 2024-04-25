import { CssVarsProvider } from "@mui/joy/styles";
import React from "react";

import Routes from "./Routes";

const App = () => {
  return (
    <CssVarsProvider>
      <Routes />
    </CssVarsProvider>
  );
};

export default App;
