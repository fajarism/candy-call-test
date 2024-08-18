import MaskedView from "@react-native-masked-view/masked-view"
import { LinearGradient } from "expo-linear-gradient"
import { OutfitText } from "@/components/font_text"
import { StyledView } from "@/components/nativewind"

const FeatureCallTitle = () => {
    return <StyledView>
        <OutfitText fontWeight="medium" className="text-center text-title-mobile line-height-title-mobile text-[#E12121]">
            🔥 Featured Calls
        </OutfitText>
    </StyledView>
}

export default FeatureCallTitle