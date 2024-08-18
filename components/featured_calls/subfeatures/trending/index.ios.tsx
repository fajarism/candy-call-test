import FeatureCallTitle from "@/components/featured_calls/subfeatures/title"
import Margin from "@/components/dimension/margin"
import ScrollIndicator from "@/components/featured_calls/subfeatures/trending/components/scroll_indicator"
import VerifiedArtist from "@/components/featured_calls/subfeatures/trending/components/card"
import { StyledView } from "@/components/nativewind"
import { Text } from "react-native"

const TrendingPrimary = ({data = []}: {data: any[]}) => {
    return <StyledView className="flex flex-col">
        <StyledView className="flex flex-col bg-[#1C1D20] rounded-[18px]">
            {data.map((item, index) => <VerifiedArtist key={index} {...item} index={index} />)}
        </StyledView>
        <Margin height={10} />
        <ScrollIndicator />
    </StyledView>
}

export default TrendingPrimary