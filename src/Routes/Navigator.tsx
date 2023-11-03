import { RouterKey } from "./Routes";
import Home from "../Screens/Home/Home";
import ChooseImage from "../Screens/ChooseImage/ChooseImage";
import Login from "../Screens/Login/Login";
import Settings from "../Screens/Settings/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";

const screenRoutes = [
  { name: RouterKey.HOME_SCREEN, component: Home },
  { name: RouterKey.CHOOSE_IMAGE_SCREEN, component: ChooseImage },
  { name: RouterKey.LOGIN_SCREEN, component: Login },
  { name: RouterKey.BOTTOM_TAB_NAVIGATOR, component: BottomTabNavigator },
  { name: RouterKey.SETTINGS_SCREEN, component: Settings },
];

const tabBarOptions = {
  headerShown: false,
};

export const RoutesMapping = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={tabBarOptions}
      initialRouteName={RouterKey.LOGIN_SCREEN}
    >
      {screenRoutes.map((route) => {
        return (
          <Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Navigator>
  );
};

export default RoutesMapping;
