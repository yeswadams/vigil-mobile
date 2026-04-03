import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, Link } from "expo-router";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>SubscriptionDetails: {id}</Text>
      <Link href="/subscriptions">
        <Text className="text-lg text-blue-500 underline">
          Back to Subscriptions
        </Text>
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
