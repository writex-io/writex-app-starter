# Solito + NativeWind + Redux + Redux-Saga Starter Monorepo 🕴

And just like that, you now have an Expo + Next.js + Redux + Redux-Saga app that is styled with Tailwind CSS.

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Redux + Redux-Saga app using [NativeWind](https://nativewind.dev) for its styling & [Solito](https://solito.dev) for navigation.

## 👓 How NativeWind works with Solito

### Fast on every platform

NativeWind lets you use Tailwind while reducing runtime work on every platform.

### iOS and Android

Most approaches to using Tailwind in React Native do something like this at runtime:

```ts
const styles = props.className
  .split(' ')
  .map((className) => makeStyle(className))

return <View style={styles} />
```

This means that every component ends up parsing strings to construct predictable style objects.

NativeWind takes a new approach by doing this work upfront with a Babel plugin.

NativeWind turns `className` strings into cached `StyleSheet.create` objects at build time, avoiding the [slow string parsing problem](https://twitter.com/terrysahaidak/status/1470735820915150850?s=20&t=w9VUPwiTFxBkRBHWTtDz1g) of libraries like `styled-components/native`.

Keep in mind that the Babel plugin will get used on iOS/Android only; on Web, we don't need the plugin since we are using `className`.

### Web

On Web, NativeWind uses Next.js' `PostCSS` feature to output CSS StyleSheets.

Which means that **on Web, you're using CSS class names.**

Yes, that's right. We aren't parsing className strings into objects for React Native Web to use. Instead, we're actually forwarding CSS classnames to the DOM. That means you can get responsive styles, dark mode support, & pseudo-selectors _with server-side rendering support_.

This is finally possible with the release of React Native Web 0.18.

As a result, using NativeWind with React Native doesn't have significant overhead compared to plain old Tailwind CSS in a regular React app.

If you're planning on making a website with Tailwind, why not use Solito with NativeWind?

You might accidentally make a great native app when you thought you were just making a website.

### Bringing it together

Components are written using the `styled()` higher-order component.

In your app's design system, you can start by building your own UI primitives:

```tsx
// packages/app/design/typography
import { Text } from 'react-native'
import { styled } from 'nativewind'

export const P = styled(Text, 'text-base text-black my-4')
```

Notice that you can set base styles using the second argument of `styled`.

You can then use the `className` prop, just like regular Tailwind CSS:

```tsx
<P className="dark:text-white">Text</P>
```

Take a look at the [`packages/app/design`](https://github.com/writex-io/writex-app/tree/master/example-monorepos/with-tailwind/packages/app/design) folder to see how components are created with ease.

> If you're reading the NativeWind docs, you might find that you can use `className` directly without using `styled`. Since this requires the Babel plugin for all platforms, it won't work with Solito. Be sure to always wrap your components with `styled`.

## 📦 Included packages

- `solito` for cross-platform navigation
- `moti` for animations
- `nativewind` for theming/design (you can bring your own, too)
- Expo SDK 49
- Next.js 13
- Expo Router 2
- `Redux` for state management
- `Redux-Saga` for side effects and business logic

## 🗂 Folder layout

- `apps` entry points for each app

   - `expo`
    - `app` you'll be creating files inside of `apps/expo/app` to use file system routing on iOS and Android.
  - `next`

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `design` your app's design system. organize this as you please.
      - `typography` (components for all the different text styles)
      - `layout` (components for layouts)
    - `locales` (translations)
    - `logic` (static sagas, reducers, and actions that are shared across features and applicable to the entire app)
  - `plugins` (modules that contains dynamically loaded components, and also dynamically loaded sagas and reducers for a runtime injection of new features)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`
  - Runs `yarn next`
- Expo local dev:
  - First, build a dev client onto your device or simulator
    - `cd apps/expo`
    - Then, either `expo run:ios`, or `eas build`
  - After building the dev client, from the root of the monorepo...
    - `yarn native` (This runs `expo start --dev-client`)

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `apps/expo`:

```sh
cd apps/expo
yarn add react-native-reanimated

cd ../..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

## 🎙 About the creators
`Solito` – [@FernandoTheRojo](https://twitter.com/fernandotherojo)

`NativeWind` – [@mark\_\_lawlor](https://twitter.com/mark__lawlor)

`Writex` – [@maximvetrenko](https://twitter.com/maximvetrenko)

