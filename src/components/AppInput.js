import React from "react";
import { TextInput } from "react-native";
import defaultStyles from "../config/styles";

export default function AppInput({ children, style, ...otherProps }) {
  return (
    <TextInput style={[defaultStyles.input, style]} {...otherProps}>
      {children}
    </TextInput>
  );
}
