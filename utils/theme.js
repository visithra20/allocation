import { colors } from './colors'

export default {
    fontSizes: [12, 14, 15, 16, 20, 24, 32],
    theme: {
        layout: {
            p: '2%',
            bg: colors.primary,
            color: colors.secondary,
            fontSize: 4,
        },
        text: {
            heading: {
                fontSize: 5,
                fontWeight:'500',
                textAlign:'center',
                fontFamily:'roboto'
            },
            block: {
                variant: 'paragraph',
                display: 'block',
                textAlign: 'center',
                fontFamily:'roboto',
              },
          },
        forms: {
            label: {
                m: '1.5% 0%',
                fontSize: 2,
                fontWeight: 'normal',
                fontFamily:'roboto',
            },
            input: {
                p: '2.7%',
                border: '1px solid ',
                borderColor:colors.bordercolor,
               
            },
        },
        links: {
            nav: {
                 py: "2.5%",
                 color:colors.link,
                
            }
          },
        buttons: {
            primary: {
                color: colors.secondary,
                bg: colors.primary,
                textAlign: 'center',
                width: '100%',
                 m: '4% 0% 0% 0%',
                borderRadius: '5px',
                //padding: '2.7%',
                fontSize: 2,
                fontFamily:'roboto'
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
                fontFamily:'roboto',
                borderColor:colors.bordercolor,
            },
        },

    },

    
}
