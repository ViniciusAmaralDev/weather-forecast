import Layout from "@components/layout";
import styled from "styled-components/native";

export const Container = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SECONDARY};
`;
