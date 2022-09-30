import { colors } from './colors'

export default {
    breakpoints: ['0px', '768px', '1024px', '1192px'],
    fontSizes: [12, 14, 15, 16, 20, 24, 32],
    fonts: {
        roboto: 'Roboto',
        heading: 'Roboto'
    },
    fontWeight: {
        body: 400,
        heading: 500,
        bold: 600,
    },
    theme: {
        layout: {
            color: colors.secondary,
            backgroundColor: colors.primary,
            fontSize: 5,
            fontFamily: 'roboto',
            lineHeight: ['20px', '20px', '24px', '24px'],
            padding: '4',
            fontWeight: 'heading',
        },
        text: {
            heading: {
                color: colors.black,
                backgroundColor: colors.secondary,
                fontSize: ['30px', '30px', '32px', '32px'],
                fontFamily: 'roboto',
                lineHeight: ['34px', '34px', '38px', '38px'],
                textAlign: 'center',
               // fontWeight: 'heading',
            },
            block: {
                variant: 'paragraph',
                display: 'block',
                textAlign: 'center',
                
            },
        },
        forms: {
            label: {
                m: '1.5% 0%',
                fontSize: 2,
                fontWeight: 'body',
            },
            input: {
                p: '2.7%',
                border: '1px solid ',
                borderColor: colors.bordercolor,
                fontWeight: 'body',
            },
        },
        links: {
            nav: {
                py: '2.5%',
                color: colors.link,
                fontWeight: 400
            },
        },
        buttons: {
            primary: {
                color: colors.secondary,
                bg: colors.primary,
                textAlign: 'center',
                width: '100%',
                m: '3% 0% 0% 0%',
                borderRadius: '5px',
                //padding: '2.7%',
                fontSize: 2,
                // fontFamily: 'roboto',
            },
            secondary: {
                color: colors.black,
                bg: colors.secondary,
                textAlign: 'center',
                width: '100%',
                mt: '4%',
                borderRadius: '5px',
                fontSize: 2,
                border: '1px solid ',
                // fontFamily: 'roboto',
                borderColor: colors.bordercolor,
            },
        },
    },
}
