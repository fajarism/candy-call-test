# Answers

1. Send a screenshot of the final component in Expo. Show it in different devices (web, iOS)

   Here is the screenshot for the web version

   ![Alt text](screenshot/web_01.png?raw=true "Title")
   ![Alt text](screenshot/web_02.png?raw=true "Title")

   Here is the screenshot for the iOS version
   ![Alt text](screenshot/ios_01.png?raw=true "Title")
   ![Alt text](screenshot/ios_02.png?raw=true "Title")

2. Send the code for the component, Speficy which libraries you used

   ``` tsx
   <!-- This is the code for the FeaturedCalls component -->
   const data = useFeaturedCallsScreenHook();
   return (
      <div className="flex flex-1 bg-background-mobile w-[100vw] overflow-scroll">
         <FeaturedCalls data={data} />
      </div>
   );
   ```

   Inside the `FeaturedCalls` component, I separated the components into subfeatures such as `TrendingPrimary`, `PopularCalls`, `BestForYou` and `CTA`. Some of the components have different styles for the web and mobile version. In that case, I used the `Platform` library to conditionally render the components. Please look at the code for more details.

   ``` tsx
    // This is the code for the PopularCalls component in ios
    // index.tsx 
    
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
   ```

   ``` tsx
    // This is the code for the PopularCalls component in ios
    // index.web.tsx 
    
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

   ```

   I used file based expo router template along with nativewind as mentioned in the instructions. So the libraries are the built-in ones.

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
