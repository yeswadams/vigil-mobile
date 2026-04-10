import { tabs } from "@/constants/data";
import { clsx } from "clsx";
import { Image, View  } from "react-native";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {colors, components, spacing} from "@/constants/theme";

const TabLayout = () => {
  const insets = useSafeAreaInsets(); // call the hook
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image
            source={icon}
            resizeMode="contain"
            className="tabs-glyph"
          />
        </View>
      </View>
    );
  };
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: Math.max(insets.bottom, components.tabBar.horizontalInset),
        height: components.tabBar.height,
        marginHorizontal: components.tabBar.horizontalInset,
        borderRadius: components.tabBar.radius,
        backgroundColor: colors.primary,
        borderTopWidth: 0,
      },
      tabBarItemStyle: {
        paddingVertical: components.tabBar.height / 2 - components.tabBar.iconFrame / 2.5,
      }
     }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
