import { FontType, TextProps } from "@/types";

import Text from "../../Text";

const Heading = ({ children, ...props }: TextProps) => {
  return (
    <Text type={FontType.HEADING} {...props}>
      {children}
    </Text>
  );
};

export default Heading;
