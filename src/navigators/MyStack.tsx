import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { DetailsScreen, HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }: { navigation: any }) => ({
        /** Override bars/humberger menu button, because not showing in electron */
        ...(navigation.canGoBack() && {
          headerLeft: () => (
            <Icon
              as={FontAwesome}
              name="chevron-left"
              size={30}
              color="#000"
              mr={2}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        }),
        headerStyle: {
          backgroundColor: "rgb(239, 246, 255)",
        },
        headerTintColor: "#0c4a6e",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

/** Enable URL integration in browser when using on web */
export const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    /* configuration for matching screens with paths */
    screens: {
      Home: "/",
      Details: "details",
    },
  },
};
