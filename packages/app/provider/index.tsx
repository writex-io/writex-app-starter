import React, { useState, useEffect } from 'react';
import { SafeArea } from './safe-area';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from 'app/core/store/configure-store.prod';

export function Provider({ children }: { children: React.ReactNode }) {
    return <SafeArea>
        <ReduxProvider store={configureStore()}>
            {children}
        </ReduxProvider>
    </SafeArea>;
}
