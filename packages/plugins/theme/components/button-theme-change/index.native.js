import { Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';

import { Text } from 'app/design/typography';
import { useDispatch, useSelector } from 'react-redux';
import { changeAction, themeNameSelector } from '../../logic/reducers/theme';

export default function ButtonThemeChanger() {
    const [t] = useTranslation('common');
    const { colorScheme, setColorScheme } = useColorScheme();
    const dispatch = useDispatch();
    const themeName = useSelector(themeNameSelector);

    const changeColorScheme = () => {
        const newColorScheme = colorScheme === 'dark' ? 'light' : 'dark';
        setColorScheme(newColorScheme);
        dispatch(changeAction(newColorScheme));
    };

    return (
        <Pressable onPress={changeColorScheme}>
            <Text className="px-6 py-2 max-w-[300px] mx-auto font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 !rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 select-none">{t('buttonChangeTheme')} [{themeName}]</Text>
        </Pressable>
    );
}
