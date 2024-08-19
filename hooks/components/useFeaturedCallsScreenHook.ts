import { BestForYouData } from "@/components/featured_calls/subfeatures/recommendation/types";
import { PopularCallsData } from "@/components/featured_calls/subfeatures/popular_calls/types";
import { VerifiedArtistData } from "@/components/featured_calls/subfeatures/trending/components/card/types"

export type FeaturedCallsData = {
    trendingData: VerifiedArtistData[];
    popularCallsData: PopularCallsData[];
    bestForYouData: BestForYouData[];
}

const useFeaturedCallsScreenHook = (): FeaturedCallsData => {
    const trendingData: VerifiedArtistData[] = [
        {text: "Donald Trump's Secret \nGambling Advice", duration: "01:59", numberOfUsers: "230k"},
        {text: "Persuading Sanam: Ditch \nRamadan, Try Wine!", duration: "01:59", numberOfUsers: "230k"}
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

    return {
        trendingData,
        popularCallsData,
        bestForYouData,
    }
}

export default useFeaturedCallsScreenHook;