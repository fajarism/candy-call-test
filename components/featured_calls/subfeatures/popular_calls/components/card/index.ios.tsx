import Margin from "@/components/dimension/margin";
import { Image } from "react-native";
import { OutfitText } from "@/components/font_text";
import { StyledImage, StyledView } from "@/components/nativewind";

export type PopularCallsCardProps = {
    title: string;
    duration: string;
    date: string;
    image: string;
}

const PopularCallsCard = ({title, duration, date, image}: PopularCallsCardProps) => {
    return <StyledView className="flex flex-col w-[50%] px-3">
        <StyledImage source={image} className="w-[141px] h-[100px] rounded-[9.39px]" />
        <Margin height={19.15} />
        <OutfitText numberOfLines={3} fontWeight="regular" className="text-black-1 text-[16px] leading-[20.16px]">{title}</OutfitText>
        <Margin height={4} />
        <StyledView className="flex flex-row items-center">
            <Image source={require("@/assets/images/icon/clock_black.png")} className="w-[12.5px] h-[12.5px] mr-[5.3px] self-center" />
            <OutfitText fontWeight="regular" className="text-black-1 text-[11px] leading-[13.15px]">{duration}</OutfitText>
            <Margin width={4.7} />
            <StyledView className="w-[6px] h-[6px] bg-gray-action rounded-full self-center"></StyledView>
            <Margin width={4.7} />
            <OutfitText fontWeight="normal" className=" text-black-1 text-[11px] leading-[13.15px]">{date}</OutfitText>
        </StyledView>
        <Margin height={39} />
    </StyledView>
}

export default PopularCallsCard