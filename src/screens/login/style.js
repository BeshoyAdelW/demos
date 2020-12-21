import colors from "../../config/colors";

const React = require("react-native");

const { StyleSheet } = React;

export default {
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 30,
    textAlign: "center",
  },
  title: {
    color: colors.primary,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
    marginTop: 24,
    marginBottom: 30,
    marginHorizontal: 100,
    textAlign: "center",
  },
  logoImage: {
    height: 34,
    width: 73,
    marginTop: 60,
    alignSelf: "center",
  },
  loginFormView: {
    flex: 1,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 120,
  },
  fbLogo: {
    alignSelf: "flex-start",
    width: 50,
    height: 50,
  },
};
