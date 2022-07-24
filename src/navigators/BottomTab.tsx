import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { DetailsScreen, HomeScreen } from "../screens";

type TIconTypes = {
  [key: string]: string;
};

const icon_names: TIconTypes = {
  Home: "home",
  Details: "info-circle",
};

const MyTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  return (
    /** Styles applied to TabBar */
    <Box className="flex-row items-center self-center justify-around w-64 p-2 font-semibold">
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          >
            <VStack
              space="1"
              alignItems="center"
              className={
                (isFocused ? "bg-blue-200" : "bg-blue-50") +
                " p-2 rounde-md transition-colors duration-300 ease-in-out"
              }
            >
              <Icon
                as={FontAwesome}
                name={icon_names[route.name]}
                size={30}
                color="#000"
              />
              <Text>{label}</Text>
            </VStack>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

const Tab = createBottomTabNavigator();

export const BottomTab = () => (
  <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={DetailsScreen} />
  </Tab.Navigator>
);

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
