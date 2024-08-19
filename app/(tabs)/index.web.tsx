import FeaturedCalls from '@/components/featured_calls';
import useFeaturedCallsScreenHook from '@/hooks/components/useFeaturedCallsScreenHook';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  const data = useFeaturedCallsScreenHook();
  return (
    <div className="flex flex-1 bg-background-mobile w-[100vw] overflow-scroll">
      <FeaturedCalls data={data} />
    </div>
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
