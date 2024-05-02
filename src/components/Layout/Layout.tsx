import { Sheet } from "@mui/joy";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Sheet>
      <Header />
      {children}
      <Footer />
    </Sheet>
  );
};

export default Layout;
