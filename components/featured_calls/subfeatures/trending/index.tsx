import FeatureCallTitle from "@/components/featured_calls/subfeatures/title"
import Margin from "@/components/dimension/margin"
import ScrollIndicator from "@/components/featured_calls/subfeatures/trending/components/scroll_indicator"
import VerifiedArtist from "@/components/featured_calls/subfeatures/trending/components/card"
import { Platform } from "react-native"
import { StyledView } from "@/components/nativewind"
import { VerifiedArtistData } from "@/components/featured_calls/subfeatures/trending/components/card/types"

export type TrendingPrimaryProps = {
    data: VerifiedArtistData[];
}

const TrendingPrimary = ({data = []}: TrendingPrimaryProps) => {
    const children = Platform.OS === 'web' ?  
    <>
        {data.map((item, index) => <VerifiedArtist key={index} {...item} index={index} isPrimary={index === 0} />)}
    </> :
    <VerifiedArtist key={0} {...data[0]} index={0} isPrimary={false} /> 
    
    return <StyledView className="flex flex-col">
        <StyledView className={Platform.OS === 'web' ? 'flex flex-row gap-3' : 'flex flex-col'}> 
            {children}
        </StyledView>
        <Margin height={10} />
        {Platform.OS !== 'web' && <ScrollIndicator />}
    </StyledView>
}

export default TrendingPrimary