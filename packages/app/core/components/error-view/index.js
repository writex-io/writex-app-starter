import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export const ErrorOccurred = () => {
    const [t] = useTranslation('common');

    return (
        <View>
            <Text>{t('error.header')}</Text>
            <Text>{t('error.message')}</Text>
        </View>
    );
};
