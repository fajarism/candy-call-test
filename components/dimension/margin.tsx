import { StyledView } from "@/components/nativewind"

export type MarginProps = {
    height?: number,
    width?: number
}

const Margin = ({height = 0, width = 0}: MarginProps) => {
    return (
        <StyledView style={{height, width}} />
    )
}

export default Margin;