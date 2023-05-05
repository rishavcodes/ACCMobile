import * as React from 'react';
import baseTheme from './baseTheme';

export default {
    ...baseTheme,
    role: baseTheme.colors.tenant,
    bottomBarModalItems: [
        {title:"Test",link:""}, {title:"Test",link:""},
    ]
}