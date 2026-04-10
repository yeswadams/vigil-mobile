import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {
  return (
    <Stack 
      initialRouteName="(tabs)" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
      
      <Stack.Screen name="(auth)" options={{ title: "Login" }} />
    </Stack>
  );
}