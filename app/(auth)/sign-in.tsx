import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex flex-col items-center justify-center h-screen">
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Don&apos;t have an account? Sign Up</Link>
    </View>
  );
};

export default SignIn;
