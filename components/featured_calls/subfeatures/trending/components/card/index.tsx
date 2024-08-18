import FeatureCallTitle from "@/components/featured_calls/subfeatures/title"
import Margin from "@/components/dimension/margin"
import { Image, Text } from "react-native"
import { OutfitText } from "@/components/font_text"
import { StyledView } from "@/components/nativewind"

export type VerifiedArtistProps = {
    text: string;
    duration: string;
    numberOfUsers: string;
}

const VerifiedArtist = ({text, duration, numberOfUsers}: VerifiedArtistProps) => {
    return <StyledView className="flex flex-row items-start">
        <StyledView className="flex flex-col items-start py-[10px] px-[16px]">
            <StyledView className="flex flex-row rounded-[50px] border-[#E12121] border-[1px] px-[6px] py-1">
                <Image source={require("@/assets/images/app/verified.png")} className="w-[14px] h-[14px] mr-[7px] self-center" />
                <OutfitText fontWeight="medium" className="text-white text-xs self-center">Trending</OutfitText>
            </StyledView>
            <Margin height={10} />
            <OutfitText fontWeight="medium" className="text-white text-xs text-[16px] leading-[20.16px]">{text}</OutfitText>
            <Margin height={10} />
            <StyledView className="flex flex-row">
                <Image source={require("@/assets/images/icon/clock.png")} className="w-[18px] h-[18px] mr-[5.3px] self-center" />
                <OutfitText fontWeight="medium" className="text-white text-xs self-center">{duration}</OutfitText>
                <Margin width={8.95} />
                <StyledView className="w-[6px] h-[6px] bg-gray-action rounded-full self-center"></StyledView>
                <Margin width={8.95} />
                <Image source={require("@/assets/images/icon/phone.png")} className="w-[18px] h-[18px] mr-[5.3px] self-center" />
                <OutfitText fontWeight="medium" className="text-white text-xs self-center">{`${numberOfUsers} users`}</OutfitText>
            </StyledView> 
            <Margin height={18} />
            <Image source={require("@/assets/images/app/play_button.png")} className="w-[24px] h-[24px]" />
        </StyledView>
        <Image source={require("@/assets/images/app/trump.png")} className="flex flex-1 h-full" />
    </StyledView>
}

export default VerifiedArtist