import { NativeBaseProvider } from "native-base";
import { TailwindProvider } from "tailwindcss-react-native";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  BTlinking,
  MyStack,
  Slinking,
  MyDrawer,
  Dlinking,
  BottomTab,
  TTlinking,
  TopTab,
} from "./src/navigators";
import { useTopTabContext } from "./src/providers";

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
  btab: BTlinking,
  ttab: TTlinking,
};

export default function App() {
  const { TopTabProvider } = useTopTabContext();

  return (
    <TailwindProvider>
      <NativeBaseProvider>
        {/** There 2 nav types to fiddle with, ie drawer and stack */}
        <NavigationContainer linking={linking.ttab} theme={MyTheme}>
          <TopTabProvider>
            <TopTab />
          </TopTabProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </TailwindProvider>
  );
}
