const { withExpo } = require('@expo/next-adapter');
// @ts-check
const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reanimated (and thus, Moti) doesn't work with strict mode currently...
    // https://github.com/nandorojo/moti/issues/224
    // https://github.com/necolas/react-native-web/pull/2330
    // https://github.com/nandorojo/moti/issues/224
    // once that gets fixed, set this back to true
    reactStrictMode: false,
    i18n,
    transpilePackages: [
        'react-native',
        'react-native-web',
        'solito',
        'moti',
        'app',
        'react-native-reanimated',
        'nativewind',
        'react-native-gesture-handler',
    ],
};

module.exports = withExpo(nextConfig);
