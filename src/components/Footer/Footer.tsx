import { Stack } from "@mui/joy";

import { BodyText } from "@/base/Text/";
import { Container } from "@/base/Container/";
import { SecondaryButton } from "@/base/Button";
import { Link } from "@/components/Link";

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        mt: 8,
        py: 2,
        px: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "sm",
        boxShadow: "md",
      }}
      variant="soft"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <BodyText>
          © {new Date().getFullYear()} My App. All rights reserved.
        </BodyText>
        <Stack direction="row" gap={2}>
          <Link destination="privacy-policy">
            <SecondaryButton>Privacy policy</SecondaryButton>
          </Link>
          <Link destination="terms-of-service">
            <SecondaryButton>Terms of Service</SecondaryButton>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
