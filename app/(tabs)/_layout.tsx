import { TabIcon } from "@/components/TabIcon/TabIcon";
import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '#0f0d23'
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => <TabIcon title="Home" focused={focused} icon={icons.home} />
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ 
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => <TabIcon title="Search" focused={focused} icon={icons.search} />
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => <TabIcon title="Saved" focused={focused} icon={icons.save} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ 
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) =>  <TabIcon title="Profile" focused={focused} icon={icons.home} />
        }}
      />
    </Tabs>
  );
}
