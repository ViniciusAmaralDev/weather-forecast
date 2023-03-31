import Light from "@theme/Light";
import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof Light;
  export interface DefaulTheme extends ThemeType {}
}
