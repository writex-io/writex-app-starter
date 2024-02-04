import { Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Text } from 'app/design/typography';

import { changeRequestAction, themeNameSelector } from '../../logic/reducers/theme';

export default function ButtonThemeChanger() {
    const [t] = useTranslation('common');
    const dispatch = useDispatch();
    const countOnClick = () => dispatch(changeRequestAction());
    const themeName = useSelector(themeNameSelector);

    return (
        <Pressable onPress={countOnClick}>
            <Text className="px-6 py-2 mx-auto font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 !rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 select-none">{t('buttonChangeTheme')} [{themeName}]</Text>
        </Pressable>
    );
}