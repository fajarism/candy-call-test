import CTA from "@/components/featured_calls/subfeatures/cta";
import FeatureCallTitle from "@/components/featured_calls/subfeatures/title";
import Margin from "@/components/dimension/margin";
import PopularCalls from "@/components/featured_calls/subfeatures/popular_calls/index";
import Recommendation from "@/components/featured_calls/subfeatures/recommendation/index";
import TrendingPrimary from "@/components/featured_calls/subfeatures/trending/index";
import useFeaturedCallsScreenHook, { FeaturedCallsData } from "@/hooks/components/useFeaturedCallsScreenHook";
import { LinearGradient } from "expo-linear-gradient";
import { Platform, StyleSheet } from "react-native";
import { StyledView } from "@/components/nativewind";

export type FeaturedCallsProps = {
    data: FeaturedCallsData;
}

const FeaturedCalls = ({data}: FeaturedCallsProps) => {
    const additionalClass = {
        container: Platform.OS === 'web' ? 'px-[71px] py-4' : '',
        cardContainer: Platform.OS === 'web' ? 'w-full px-[30px] py-[48px]' : 'p-2',
    }

    return (
        <StyledView className={`flex flex-1 items-center ${additionalClass.container}`}>
            <FeatureCallTitle />
            <Margin height={24} />
            <StyledView className={`bg-[#FFECEC] rounded-[24px] w-[374px] ${additionalClass.cardContainer}`}> 
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    colors={['#f7998c', '#ffecec', '#ffffff']}
                    style={styles.background} />
                <TrendingPrimary data={data?.trendingData}/>
                <Margin height={21} />
                <PopularCalls data={data?.popularCallsData} />
                {
                    Platform.OS === 'web' ? 
                        <StyledView className="flex flex-col flex-1">
                            <Margin height={108.5} />
                            <StyledView className="flex flex-row gap-[88px] flex-1 items-start">
                                <Recommendation data={data?.bestForYouData} />
                                <CTA />
                            </StyledView>
                        </StyledView>:
                        <>
                            <Recommendation data={data?.bestForYouData} />
                            <Margin height={49} />
                            <CTA />
                        </>
                }
                
            </StyledView>
        </StyledView>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1500,
        borderRadius: 24,
        overflow: 'hidden',
    },
});

export default FeaturedCalls;