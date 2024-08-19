import Margin from "@/components/dimension/margin"
import RecommendationCard from "@/components/featured_calls/subfeatures/recommendation/components/card/index"
import RecommendationHeader from "@/components/featured_calls/subfeatures/recommendation/components/header"
import { StyledView } from "@/components/nativewind"

const Recommendation = ({data = []}: {data: any[]}) => {
    return <StyledView className="flex flex-col flex-1">
        <RecommendationHeader />
        <Margin height={9} />
        <StyledView className="flex flex-col">
            {data.map((item, index) => <RecommendationCard key={index} {...item} index={index} />)}
        </StyledView>
    </StyledView>
}

export default Recommendation