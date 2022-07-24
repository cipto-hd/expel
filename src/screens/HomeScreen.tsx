import { Link } from "@react-navigation/native";
import { Button, Divider, Text, View } from "native-base";
import React from "react";

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Divider h={3} className="bg-transparent" />

      <Button onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button>

      <Divider h={3} className="bg-transparent" />

      <Link to={{ screen: "Details" }}>
        <Button>Link to path '/details'</Button>
      </Link>
    </View>
  );
};
