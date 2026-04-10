import { View, Text } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Subscriptions
      </Text>
    </SafeAreaView>
  )
}

export default Subscriptions