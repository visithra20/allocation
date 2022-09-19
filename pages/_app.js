import React from 'react'
import {ThemeProvider} from 'theme-ui'
import { Header } from '../src/header'
import theme from '../utils/theme'
function MyApp({ Component }) {
    return (
        <>
            <ThemeProvider resetCSS theme={theme}>
            <Header/>
                <Component/>
            </ThemeProvider>
        </>
    )
}

export default MyApp