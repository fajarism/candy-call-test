import Margin from "@/components/dimension/margin";
import { Image } from "react-native";
import { OutfitText } from "@/components/font_text";
import { StyledImage, StyledView } from "@/components/nativewind";

export type RecommendationCardProps = {
    index: number;
    title: string;
    duration: string;
    date: string;
    image: string;
    isPlaying: boolean;
}

const RecommendationCard = ({title, duration, date, image, isPlaying = false, index = 0}: RecommendationCardProps) => {
    return <StyledView className="flex flex-col flex-1 max-w-full border-b-[1px] border-[#656565]">
        <Margin height={16} />
        <StyledView className="flex flex-row items-center">
            <StyledView className="w-[24px] h-[24px] flex">
                {isPlaying ? 
                    <Image source={require("@/assets/images/icon/play.png")} className="w-[24px] h-[24px]" style={{width: '24 !important', height: '24 !important'}} /> :
                    <OutfitText fontWeight="semibold" className="text-black-1 ml-[6px] text-[16px] leading-[20.16px]">{index + 1}</OutfitText>} 
            </StyledView>
            <Margin width={24} />
            <StyledImage source={image} className="w-[54px] h-[54px] rounded-[12px] text-center self-center" style={{width: '54 !important', height: '54 !important'}} />
            <Margin width={16} />
            <StyledView className="flex flex-row flex-1">
                <OutfitText numberOfLines={1} fontWeight="regular" className={`${isPlaying ? 'text-primary-red' : 'text-black-1'} text-[24px] leading-[16px] flex-1`}>{title}</OutfitText> 
                <StyledView className="flex flex-row items-center">
                    <Image source={require("@/assets/images/icon/clock_fill.png")} className="w-[24px] h-[24px] mr-[12px] self-center" style={{width: '24 !important', height: '24 !important'}} />
                    <OutfitText fontWeight="regular" className="text-black-1 text-[16px] leading-[20.16px] mr-[58px]">{duration}</OutfitText>
                    <Margin width={19.67} />
                    <Image source={require("@/assets/images/icon/calendar.png")} className="w-[24px] h-[24px] mr-[12px] self-center" style={{width: '24 !important', height: '24 !important'}} />
                    <OutfitText fontWeight="regular" className=" text-black-1 text-[16px] leading-[20.16px]">{date}</OutfitText>
                </StyledView>
            </StyledView>
        </StyledView>
        <Margin height={17.5} />
    </StyledView>
}

export default RecommendationCard