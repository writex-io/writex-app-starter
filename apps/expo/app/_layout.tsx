import { useEffect } from 'react';
import { Provider } from 'app/provider';
import { Stack } from 'expo-router';
import * as Localization from 'expo-localization';

import initI18next from 'app/core/mechanisms/i18n';

export default function Root() {
    useEffect(() => {
        // Set the initial language based on device locale
        const locale = Localization.locale.split('-')[0];
        initI18next.changeLanguage(locale);
    }, []);

    return (
        <Provider>
            <Stack />
        </Provider>
    );
}
