import { OutfitText } from "@/components/font_text"
import { StyledView } from "@/components/nativewind"

const PopularCallsHeader = () => {
    return <StyledView className="flex flex-row">
        <OutfitText fontWeight="semiBold" className="text-black-1 text-[22px] leading-[33px] flex-1">Popular Calls</OutfitText>
        <OutfitText fontWeight="semiBold" className="text-primary-red text-[14px] leading-[17.64px] self-center">See All</OutfitText>
    </StyledView>
}

export default PopularCallsHeader