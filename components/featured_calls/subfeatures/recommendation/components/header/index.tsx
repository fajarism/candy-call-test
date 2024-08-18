import { OutfitText } from "@/components/font_text"
import { StyledView } from "@/components/nativewind"

const RecommendationHeader = () => {
    return <StyledView className="flex flex-row">
        <OutfitText fontWeight="semiBold" className="text-black-1 text-[22px] leading-[33px] flex-1">Best For You</OutfitText>
    </StyledView>
}

export default RecommendationHeader