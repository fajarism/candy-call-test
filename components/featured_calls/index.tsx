import CTA from "@/components/featured_calls/subfeatures/cta";
import FeatureCallTitle from "@/components/featured_calls/subfeatures/title";
import Margin from "@/components/dimension/margin";
import PopularCalls from "@/components/featured_calls/subfeatures/popular_calls/index.ios";
import Recommendation from "@/components/featured_calls/subfeatures/recommendation/index.ios";
import TrendingPrimary from "@/components/featured_calls/subfeatures/trending/index.ios";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { StyledView } from "@/components/nativewind";

const FeaturedCalls = () => {
    const trendingData = [
        {title: "Donald Trump's Secret \nGambling Advice", duration: "01:59", numberOfUsers: "230k"}
    ]

    const popularCallsData = [
        {title: "Andrew Tate's McChiken Request \n", duration: "01:59", date: "2024-03-27", image: require("@/assets/images/app/andrewtate.png")},
        {title: "Prank Call: 'Vote for Me, Gen Z!' with Steve", duration: "01:59", date: "2024-03-27", image: require("@/assets/images/app/joebiden.png")},
        {title: "Bree: VP Machines, Conspiracy's Afoot! Among Us!", duration: "01:59", date: "2024-03-27", image: require("@/assets/images/app/simpsons.png")},
        {title: "Punking a Scammer: 'Hunter's Laptop Fiasco''", duration: "01:59", date: "2024-03-27", image: require("@/assets/images/app/andrewtate.png")},
        {title: "Femdom's BDSM Prank: Jerk, Slap, Edge & Humiliate!", duration: "01:59", date: "2024-03-27", image: require("@/assets/images/app/female.png")},
        {title: "You are gay for eating sushi", duration: "01:59", date: "2024-03-27", image: require("@/assets/images/app/andrewtate.png")}, 
    ]

    const bestForYouData = [
        {title: "Kratos vs. Tristen: A Prank Showdown", duration: "03:27", date: "2024-03-27", image: require("@/assets/images/app/kratos.png"), isPlaying: true},
        {title: "Rebecca, Husband Proud, Finger Healing!", duration: "03:27", date: "2024-03-27", image: require("@/assets/images/app/trump_angry.png")},
        {title: "Begging Evan for Throne: A Gambler's Prank", duration: "03:27", date: "2024-03-27", image: require("@/assets/images/app/queen.png")},
    ]

    return (
        <StyledView className="flex flex-1 items-center">
            <FeatureCallTitle />
            <Margin height={24} />
            <StyledView className="bg-[#FFECEC] rounded-[24px] w-[374px] p-2"> 
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    colors={['#f7998c', '#ffecec', '#ffffff']}
                    style={styles.background} />
                <TrendingPrimary data={trendingData}/>
                <Margin height={21} />
                <PopularCalls data={popularCallsData} />
                <Recommendation data={bestForYouData} />
                <Margin height={49} />
                <CTA />
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