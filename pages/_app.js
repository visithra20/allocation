import React from 'react'
import {ThemeProvider} from 'theme-ui'
import theme from '../utils/theme'
function MyApp({ Component }) {
    return (
        <>
            <ThemeProvider resetCSS theme={theme}>
                <Component/>
            </ThemeProvider>
        </>
    )
}

export default MyApp