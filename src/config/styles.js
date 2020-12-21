import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  input: {
    height: 85,
    fontSize: 15,
    borderRadius: 21,
    backgroundColor: colors.white,
    paddingLeft: 25,
    marginHorizontal: 50,
    marginVertical: 6,
    elevation: 6,
  },
  button: {
    height: 55,
    marginTop: 29,
    marginHorizontal: 74,
    elevation: 4,
    borderRadius: 21,
  },
  buttonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "bold",
  },
  listItem: {
    height: 80,
    marginBottom: 0,
  },
};
