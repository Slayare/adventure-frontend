import { FontType, TextProps } from "@/types";

import Text from "../../Text";

const BodyText = ({ children, ...props }: TextProps) => {
  return (
    <Text type={FontType.BODY} level="body-md" {...props}>
      {children}
    </Text>
  );
};

export default BodyText;
