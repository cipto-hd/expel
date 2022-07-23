import { NativeBaseProvider } from "native-base";
import { TailwindProvider } from "tailwindcss-react-native";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import MyStack, { linking as Slinking } from "./src/components/MyStack";
import MyDrawer, { linking as Dlinking } from "./src/components/MyDrawer";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: "#fff",
  },
};

const linking = {
  drawer: Dlinking,
  stack: Slinking,
};

export default function App() {
  return (
    <TailwindProvider>
      <NativeBaseProvider>
        {/** There 2 nav types to fiddle with, ie drawer and stack */}
        <NavigationContainer linking={linking.stack} theme={MyTheme}>
          <MyStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </TailwindProvider>
  );
}
