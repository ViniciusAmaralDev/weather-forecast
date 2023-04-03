import Input from "@components/base/input";
import Button from "@components/base/button";
import React, { useRef, useState } from "react";
import { Container, SearchIcon, CloseIcon } from "./styles";
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";
import Shadow from "@flows/utils/Shadow";

type Props = TextInputProps & {
  handleClear: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const SearchBar = ({ containerStyle, handleClear, ...rest }: Props) => {
  const ref = useRef<TextInput>(null);

  const [inputValue, setInputValue] = useState("");

  const handleClearInput = () => {
    handleClear();
    setInputValue("");
    ref.current?.clear();
  };

  return (
    <Container style={[Shadow, containerStyle]}>
      <SearchIcon />
      <Input
        ref={ref}
        value={inputValue}
        onChange={({ nativeEvent: { text } }) => setInputValue(text)}
        {...rest}
      />

      {inputValue.length > 0 && (
        <Button onPress={handleClearInput}>
          <CloseIcon />
        </Button>
      )}
    </Container>
  );
};

export default SearchBar;
