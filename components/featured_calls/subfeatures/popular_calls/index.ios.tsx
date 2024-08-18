import Margin from "@/components/dimension/margin"
import PopularCallsCard from "@/components/featured_calls/subfeatures/popular_calls/components/card/index.ios"
import PopularCallsHeader from "@/components/featured_calls/subfeatures/popular_calls/components/header"
import { StyledView } from "@/components/nativewind"

const PopularCalls = ({data = []}: {data: any[]}) => {
    return <StyledView className="flex flex-col">
        <PopularCallsHeader />
        <Margin height={12} />
        <StyledView className="flex flex-row flex-wrap">
            {data.map((item, index) => <PopularCallsCard key={index} {...item} />)}
        </StyledView>
    </StyledView>
}

export default PopularCalls