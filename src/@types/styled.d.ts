import "styled-components";
import Light from "@theme/Light";
import { fonts } from "@theme/index";

const theme = { colors: Light, fonts };
declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
