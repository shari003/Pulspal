import { Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="ad_img"
        src="http://localhost:3001/assets/adidas.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Adidas</Typography>
        <Typography color={medium}>adidas.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facilis accusantium magni!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
