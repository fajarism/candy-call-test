import Margin from "@/components/dimension/margin"
import { StyledView } from "@/components/nativewind"

const ScrollIndicator = () => {
    return <StyledView className="flex flex-row items-center">
        <StyledView className="bg-primary-red w-6 h-[8px] rounded-[50px]" />
        <Margin width={2} />
        <StyledView className="bg-primary-red w-[8px] h-[8px] rounded-[50px]" />
    </StyledView>
}

export default ScrollIndicator