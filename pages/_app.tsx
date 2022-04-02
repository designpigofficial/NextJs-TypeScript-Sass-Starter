import '../globals.scss';
import * as React from "react";
import type { AppProps } from 'next/app';
const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default MyApp
