import { Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';

import { Text } from 'app/design/typography';

export default function ButtonThemeChanger() {
    const { colorScheme, setColorScheme } = useColorScheme();
    const changeColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

    return (
        <>
            <Pressable onPress={changeColorScheme}>
                <Text className="px-6 py-2 max-w-[200px] mx-auto font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 !rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 select-none">Change color theme</Text>
            </Pressable>
            <Text className="dark:text-white text-center">{colorScheme}</Text>
        </>
    );
}
