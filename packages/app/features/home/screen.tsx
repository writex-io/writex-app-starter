import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MotiLink } from 'solito/moti';
import { Pressable } from 'react-native';

import { A, H1, P, Text, TextLink } from 'app/design/typography';
import { Row } from 'app/design/layout';
import { View } from 'app/design/view';

import { incrementRequestAction, countSelector } from 'app/logic/empty/reducers/empty';
import ButtonThemeChanger from 'app/core/components/button-theme-change/index';

export function HomeScreen() {
    const [t] = useTranslation('common');

    const dispatch = useDispatch();
    const countOnClick = () => dispatch(incrementRequestAction());

    const count = useSelector(countSelector);

    return (
        <View className="flex-1 items-center justify-center p-3 bg-white dark:bg-gray-900">
            <H1 className="dark:text-white">{t('header')}</H1>
            <View className="h-[32px]">
                <Pressable onPress={countOnClick}>
                    <Text className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 !rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 select-none">Click me</Text>
                </Pressable>
            </View>
            <View className="max-w-xl">
                <P className="text-center dark:text-white">
                    Count: {count}
                </P>
                <P className="text-center dark:text-white">
                    {t('slogan')}
                </P>
                <ButtonThemeChanger />
                <P className="text-center dark:text-white">
                    Solito is made by{' '}
                    <A
                        href="https://twitter.com/fernandotherojo"
                        hrefAttrs={{
                            target: '_blank',
                            rel: 'noreferrer',
                        }}
                    >
                        Fernando Rojo
                    </A>
                    .
                </P>
                <P className="text-center dark:text-white">
                    NativeWind is made by{' '}
                    <A
                        href="https://twitter.com/mark__lawlor"
                        hrefAttrs={{
                            target: '_blank',
                            rel: 'noreferrer',
                        }}
                    >
                        Mark Lawlor
                    </A>
                    .
                </P>
            </View>
            <View className="h-[32px]" />
            <Row className="space-x-8">
                <TextLink href="/user/fernando">Regular Link</TextLink>
                <MotiLink
                    href="/user/fernando"
                    animate={({ hovered, pressed }) => {
                        'worklet';

                        return {
                            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                            rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
                        };
                    }}
                    transition={{
                        type: 'timing',
                        duration: 150,
                    }}
                >
                    <Text selectable={false} className="text-base font-bold dark:text-white">
                        Moti Link
                    </Text>
                </MotiLink>
            </Row>
        </View>
    );
}
