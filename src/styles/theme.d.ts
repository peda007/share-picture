import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        mainColor: string;
        subColor: string;
        backgroundColor: string;
        fontColor: string;
        reversedFontColor: string;
        highLightedFontColor: string;
    }
}
