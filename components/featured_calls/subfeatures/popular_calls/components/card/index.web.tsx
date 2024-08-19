import Margin from "@/components/dimension/margin";
import { Image, Platform } from "react-native";
import { OutfitText } from "@/components/font_text";
import { StyledImage, StyledView } from "@/components/nativewind";

export type PopularCallsCardProps = {
    title: string;
    duration: string;
    date: string;
    image: string;
}

const PopularCallsCard = ({title, duration, date, image}: PopularCallsCardProps) => {
    const additionalClass = {
        container: Platform.OS === 'web' ? 'w-1/6' : 'w-[50%]',
    }

    return <StyledView className={`flex flex-col px-3 ${additionalClass.container}`}>
        <StyledImage source={image} className="w-[180px] h-[128px] rounded-[9.39px]" style={{width: `180 !important`, height: `128 !important`}} />
        <Margin height={24.46} />
        <OutfitText numberOfLines={3} fontWeight="regular" className="text-black-1 h-[72px] w-[180px] text-[16px] leading-[24px]">{title}</OutfitText>
        <Margin height={4} />
        <StyledView className="flex flex-row items-center">
            <Image source={require("@/assets/images/icon/clock_black.png")} className="w-[16px] h-[16px] mr-[5.3px] self-center" style={{width: `16 !important`, height: `16 !important`}} />
            <OutfitText fontWeight="regular" className="text-black-1 text-[14px] leading-[16.8px]">{duration}</OutfitText>
            <Margin width={4.7} />
            <StyledView className="w-[6px] h-[6px] bg-gray-action rounded-full self-center"></StyledView>
            <Margin width={4.7} />
            <OutfitText fontWeight="regular" className=" text-black-1 text-[14px] leading-[16.8px]">{date}</OutfitText>
        </StyledView>
        <Margin height={39} />
    </StyledView>
}

export default PopularCallsCard