import '../globals.scss';
import React, { FC } from "react";
declare global { 
  interface Component {
    [key: string]: any
  }
  interface pageProps {
    [key: string]: any
  }
}
const MyApp: FC<Component> = ({ Component, pageProps }) => <Component {...pageProps} />;
export default MyApp
