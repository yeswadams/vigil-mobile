import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding">
        <Text className="text-lg text-blue-500 underline">
          Get Started
        </Text>
      </Link>
      <Link href="/(auth)/sign-in">
        <Text className="text-lg text-blue-500 underline">
          Sign In
        </Text>
      </Link>
      <Link href="/(auth)/sign-up">
        <Text className="text-lg text-blue-500 underline">
          Sign Up
        </Text>
      </Link>
      
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "spotify" },
      }}>
        Subscriptions
      </Link>
    </View>
  );
}
