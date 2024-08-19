import { PropsWithoutRef } from "react"
import { StyledText } from "@/components/nativewind"

const OutfitText = (props: PropsWithoutRef<any>) => {
    const {fontWeight = "regular"} = props;
    return <StyledText {...props} style={[{ fontFamily: `Outfit_${fontWeight}` }, props.style]} />
}

export { OutfitText }