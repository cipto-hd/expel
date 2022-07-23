import * as React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Divider, Icon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Divider h={3} className="bg-transparent" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
function DetailsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Divider h={3} className="bg-transparent" />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
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
}

export default MyStack;

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
