import Link from "next/link";
import Head from "next/head";
import Main from "../components/main";
import Footer from "../components/footer";
import Header from "../components/header";
import Signup from "../components/signup";
import TopButton from "../components/topButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Starter | Rakib Ahmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/GherkinLogo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css"
        />
      </Head>
      <Header />
      <TopButton />
      <Main />
      <div className="spacer"></div>
      <Signup />  
      <Footer />
    </>
  );
}
