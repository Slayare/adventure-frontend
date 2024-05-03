import { Flex } from "@/base/Container";
import { Wrapper } from "@/base/Wrapper";

import { Header } from "../Header";
import { Footer } from "../Footer";

import { background } from "../../../public/assets";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Flex
        sx={{
          flex: 1,
          position: "relative",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${background})`,
            backgroundRepeat: "repeat",
            opacity: 0.65,
            filter: "blur(8px)",
          },
        }}
      >
        {children}
      </Flex>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
