import FeaturedCalls from '@/components/featured_calls';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex flex-1 items-center bg-background-mobile">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        <FeaturedCalls />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
