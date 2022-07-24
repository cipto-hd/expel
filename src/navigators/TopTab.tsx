import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Box, Pressable, useColorModeValue } from "native-base";
import Animated from "react-native-reanimated";
import { useTopTabContext } from "../providers";
import { DetailsScreen, HomeScreen } from "../screens";

const MyTabBar = ({
  state,
  descriptors,
  navigation,
  position,
}: {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
}) => {
  const { TopTabValues, setTopTabValues } = useTopTabContext();
  const { index } = TopTabValues;

  return (
    <Box className="flex-row px-2 pt-10 pb-2 bg-green-900 shadow-lg">
      {state.routes.map((route: any, i: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === i;

        const onPress = () => {
          setTopTabValues({ index: i });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // modify inputRange for custom behavior
        // const inputRange = state.routes.map((_: any, i: any) => i);
        // const opacity = props.position.interpolate({
        //   inputRange,
        //   outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        // });

        const tabTitleStyle =
          index === i
            ? { color: "#fff", opacity: 1 }
            : { color: "#c5c5c5", opacity: 0.5 };
        const borderColor =
          index === i
            ? "cyan.500"
            : useColorModeValue("coolGray.200", "gray.400");

        return (
          <Box
            borderBottomWidth="3"
            borderColor={borderColor}
            flex={1}
            alignItems="center"
            p="3"
            key={i}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Animated.Text style={tabTitleStyle}>{label}</Animated.Text>
            </Pressable>
          </Box>
        );
      })}
    </Box>
  );
};

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
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
