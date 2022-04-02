import Head from "next/head";
import { Modal } from '@mui/material';
import Footer from "../components/footer";
import Header from "../components/header";
import Signup from "../components/signup";
import Explore from '../components/explore';
import TopButton from "../components/topButton";
import MobileMenu from '../components/mobileMenu';
import { useState, Fragment, useEffect } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ScrollToDiscover from '../components/scrollToDiscover';
import { IonCol, IonGrid, IonRow, getWindowSize } from '../functions';

export default function Home() {
  type Anchor = 'left';
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState<any>(false);
  const [state, setState] = useState<any>({left: false});

  useEffect(() => {
    getWindowSize(width, setWidth);
  }, [width]);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    anchor = `left`
      if (event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <>
      <Head>
        <title>Next.js Starter | Rakib Ahmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/GherkinLogo.svg" />
      </Head>
      <Header />
      <TopButton />
      <main id="mainSection">
        <Fragment>
          <div className="sideMenu">
            <div className="hamburger" title="Menu" onClick={toggleDrawer(`left`, true)}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
            <SwipeableDrawer anchor={`left`} open={state[`left`]} onClose={toggleDrawer(`left`, false)} onOpen={toggleDrawer(`left`, true)}>
              <MobileMenu />
            </SwipeableDrawer>
            <div className="search" title="Search" onClick={(event) => setOpen(true)}>
              <i className="fas fa-search"></i>
            </div>
            <Modal open={open} onClose={(event) => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div className="innerModal">
                    <div className="innerContent">
                      <span className="searchText"><i className="fas fa-search"></i> Search</span>
                      <input type="text" placeholder='Search' className='searchField'/>
                    </div>
                </div>
              </Modal>
          </div>
          <div className="innerMain">
            <div className="mainBanner">
              <div className="textCol">
                <IonGrid>
                  <IonRow>
                    <IonCol size='1' id='mainspacercol' />
                    <IonCol class="mainSpace">
                      <h1>Next.js <span className={`bottomText`}>start <span className="primaryVariant">file</span>.</span></h1>   
                      <p>Created a successful Next.js with Sass/TypeScript starter template ready made for deployment to Heroku with all the packages and dependencies I normally use. Will probably use this to make my new updated portfolio.</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </div>
          <ScrollToDiscover />
          <Explore />
        </Fragment>
      </main>
      <div className="spacer"></div>
      <Signup />
      <Footer />
    </>
  );
}
