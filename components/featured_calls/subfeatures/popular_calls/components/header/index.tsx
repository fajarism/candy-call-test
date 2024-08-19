import { OutfitText } from "@/components/font_text"
import { Platform } from "react-native"
import { StyledView } from "@/components/nativewind"

const PopularCallsHeader = () => {
    const additionalClass = {
        popularCallHeader: Platform.OS === 'web' ? 'text-[28px] leading-[42px]' : 'text-[22px] leading-[33px]',
        seeAllHeader: Platform.OS === 'web' ? 'text-[24.46px] leading-[30.82px]' : 'text-[14px] leading-[17.64px]',
    }

    return <StyledView className="flex flex-row">
        <OutfitText fontWeight="semiBold" className={`text-black-1 flex-1 ${additionalClass.popularCallHeader}`}>Popular Calls</OutfitText>
        <OutfitText fontWeight="semiBold" className={`text-primary-red self-center ${additionalClass.seeAllHeader}`}>See All</OutfitText>
    </StyledView>
}

export default PopularCallsHeader