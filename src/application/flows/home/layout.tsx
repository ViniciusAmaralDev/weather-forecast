import React from "react";
import Header from "@components/header";
import { ThemeModeEnum } from "@hooks/settings/type";
import { Container, ThemeModeButton, ThemeModeIcon } from "./styles";

type Props = {
  themeMode: ThemeModeEnum;
  toggleThemeMode: () => void;
};

const HomeLayout = ({ themeMode, toggleThemeMode }: Props) => {
  const themeModeIconName = themeMode === ThemeModeEnum.LIGHT ? "moon" : "sun";

  return (
    <Container
      header={
        <Header
          title="Weather Forecast"
          leftContainer={<></>}
          rightContainer={
            <ThemeModeButton onPress={toggleThemeMode}>
              <ThemeModeIcon name={themeModeIconName} />
            </ThemeModeButton>
          }
        />
      }
    >
      <></>
    </Container>
  );
};

export default HomeLayout;
