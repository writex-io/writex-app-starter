import React from 'react';
import { Text, View } from 'react-native';

export const ErrorOccurred = () => {
    return (
        <View>
            <Text>Error Occurred 🚨</Text>
            <Text>Can't render page. Please try again</Text>
        </View>
    );
};
