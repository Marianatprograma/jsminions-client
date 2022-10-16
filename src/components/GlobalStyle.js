import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`

:root{

    --PrimaryColor: #FCE029;
    --SecondaryColor: #0A75BC;
    --Black: #231F20;
    --White:   #FFFFFF;
    --Coffee:  #A87A51;
    --Grey: #949699;



}
*, ::after, ::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Quicksand', sans-serif;
}
body{
    background: var(--SecondaryColor);
    
}

h3{
    color: white;
}

`

