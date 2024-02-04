import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as Localization from 'expo-localization';

import { Provider } from 'app/provider';
import initI18next from 'app/core/mechanisms/i18n';
// import {useColorScheme} from 'nativewind';

export default function Root() {
    // When updating the navigation color, then all page reloads and reset the state
    // meaning that switching between dark and light can't be done without a full reload
    const colorScheme = 'light';
    // const { colorScheme } = useColorScheme();
    useEffect(() => {
        // Set the initial language based on device locale
        const locale = Localization.locale.split('-')[0];
        initI18next.changeLanguage(locale);
    }, []);

    return (
        <Provider>
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: colorScheme === 'light' ? '#fff' : '#101827',
                },
                headerTintColor: colorScheme === 'light' ? '#000' : '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }} />
        </Provider>
    );
}
