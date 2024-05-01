import { CssVarsProvider } from "@mui/joy";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const render = (
  ui: React.ReactNode,
  { route = "/", ...renderOptions } = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <CssVarsProvider>
      <Router>{children}</Router>
    </CssVarsProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
