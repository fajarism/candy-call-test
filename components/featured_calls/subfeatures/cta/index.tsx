import { Image, Platform } from "react-native"

const CTA = () => {
    const additionalClass = {
        image: Platform.OS === 'web' ? 'self-start' : 'self-center',
    }

    return <Image source={require("@/assets/images/app/ad.png")} className={`w-[349.8px] h-[308px] rounded-[27.5px] ${additionalClass.image}`} />
}

export default CTA