import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouterKey } from "./Routes";
import Home from "../Screens/Home/Home";
import ChooseImage from "../Screens/ChooseImage/ChooseImage";
import Settings from "../Screens/Settings/Settings";
import RenderTabIcon from "../Utils/RenderTabIcon";
import Colors from "../Utils/Colors";
import CameraIcon from "../Assets/Icons/camera-icon.svg";
import HomeIcon from "../Assets/Icons/home-icon.svg";
import SettingsIcon from "../Assets/Icons/settings-icon.svg";

const { Navigator, Screen } = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  tabStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerShown: false,
};

const tabBarStyle = {
  height: 90,
  paddingTop: 20,
  backgroundColor: Colors.BLACK,
  borderTopColor: Colors.BLACK,
};

const CameraIconTab = {
  tabBarIcon: ({ focused }: { focused: boolean }) =>
    RenderTabIcon(35, 35, focused ? Colors.RED : Colors.WHITE, CameraIcon),
};

const HomeIconTab = {
  tabBarIcon: ({ focused }: { focused: boolean }) =>
    RenderTabIcon(35, 35, focused ? Colors.RED : Colors.WHITE, HomeIcon),
};

const SettingsIconTab = {
  tabBarIcon: ({ focused }: { focused: boolean }) =>
    RenderTabIcon(35, 35, focused ? Colors.RED : Colors.WHITE, SettingsIcon),
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        ...tabBarOptions,
        tabBarStyle,
      }}
    >
      <Screen
        name={RouterKey.HOME_SCREEN}
        component={Home}
        options={() => HomeIconTab}
      />
      <Screen
        name={RouterKey.CHOOSE_IMAGE_SCREEN}
        component={ChooseImage}
        options={() => CameraIconTab}
      />
      <Screen
        name={RouterKey.SETTINGS_SCREEN}
        component={Settings}
        options={() => SettingsIconTab}
      />
    </Navigator>
  );
};

export default BottomTabNavigator;
