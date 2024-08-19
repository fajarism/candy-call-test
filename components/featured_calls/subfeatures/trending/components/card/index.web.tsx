import FeatureCallTitle from "@/components/featured_calls/subfeatures/title"
import Margin from "@/components/dimension/margin"
import { Image, Text } from "react-native"
import { OutfitText } from "@/components/font_text"
import { StyledImage, StyledView } from "@/components/nativewind"
import { VerifiedArtistProps } from "@/components/featured_calls/subfeatures/trending/components/card/types"

const VerifiedArtist = ({text, duration, numberOfUsers, isPrimary = false}: VerifiedArtistProps) => {
    return <StyledView className={`flex flex-row items-start bg-[#1C1D20] rounded-[18px] ${isPrimary ? 'w-2/3' : 'w-1/3'}`}>
        <StyledView className={`flex flex-col items-start ${isPrimary ? 'py-[21.5px] px-[56px]' : 'py-[21px] px-[27px]'}`}>
            <StyledView className="flex flex-row rounded-[50px] border-[#E12121] border-[1px] px-[6px] py-1">
                <StyledImage source={require("@/assets/images/app/verified.png")} className="w-[14px] h-[14px] mr-[7px] self-center" style={{width: `14 !important`, height: `14 !important`}} />
                <OutfitText fontWeight="medium" className="text-white text-xs self-center">Trending</OutfitText>
            </StyledView>
            <Margin height={10} />
            <OutfitText fontWeight="medium" className="text-white text-xs text-[32px] leading-[40.32px]">{text}</OutfitText>
            <Margin height={18.5} />
            <StyledView className="flex flex-row">
                <StyledImage source={require("@/assets/images/icon/clock.png")} className="w-[18px] h-[18px] mr-[5.3px] self-center" style={{width: `18 !important`, height: `18 !important`}}/>
                <OutfitText fontWeight="medium" className="text-white text-xs self-center">{duration}</OutfitText>
                <Margin width={8.95} />
                <StyledView className="w-[6px] h-[6px] bg-gray-action rounded-full self-center"></StyledView>
                <Margin width={8.95} />
                <StyledImage source={require("@/assets/images/icon/phone.png")} className="w-[18px] h-[18px] mr-[5.3px] self-center" style={{width: `18 !important`, height: `18 !important`}} />
                <OutfitText fontWeight="medium" className="text-white text-xs self-center">{`${numberOfUsers} users`}</OutfitText>
            </StyledView> 
            <Margin height={27} />
            <StyledImage source={require("@/assets/images/app/play_button_web.png")} className="w-[120px] h-[46px]" style={{width: `120 !important`, height: `46 !important`}} />
        </StyledView>
        {isPrimary ? <StyledImage source={require("@/assets/images/app/trump.png")} className="flex flex-1 w-[351.93px] h-full" style={{width: `351.93px !important`, height: `100% !important`}} /> : null}
    </StyledView>
}

export default VerifiedArtist