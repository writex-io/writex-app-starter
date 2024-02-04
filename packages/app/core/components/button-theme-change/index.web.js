import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';
import Cookies from 'universal-cookie';

import { Text } from 'app/design/typography';

import { COOKIE_THEME } from 'app/core/constants/cookies';
import { THEME_LIGHT } from 'app/core/constants/themes';

export default function ButtonThemeChanger() {
    const cookies = new Cookies();
    const [colorScheme, setColorScheme] = useState(THEME_LIGHT);

    useEffect(() => {
        const themeCookieParsed = cookies.get(COOKIE_THEME) || THEME_LIGHT;
        setColorScheme(themeCookieParsed);
        NativeWindStyleSheet.setColorScheme(themeCookieParsed);
        document.getElementsByTagName( 'html' )[0].classList.add(themeCookieParsed);
    }, []);

    const changeColorScheme = () => {
        const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
        document.getElementsByTagName( 'html' )[0].classList.remove(colorScheme);
        setColorScheme(newColorScheme);
        document.getElementsByTagName( 'html' )[0].classList.add(newColorScheme);
        NativeWindStyleSheet.setColorScheme(newColorScheme);
        cookies.set(COOKIE_THEME, newColorScheme, { path: '/' });
    };

    return (
        <>
            <Pressable onPress={changeColorScheme}>
                <Text className="px-6 py-2 mx-auto font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 !rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 select-none max-w-[200px]">Change color theme</Text>
            </Pressable>
            <Text className="dark:text-white text-center">{colorScheme}</Text>
        </>
    );
}
