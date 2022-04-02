import Explore from './explore';
import dynamic from 'next/dynamic';
import MobileMenu from './mobileMenu';
import { Modal } from '@mui/material';
import { useState, Fragment } from 'react';
import ScrollToDiscover from './scrollToDiscover';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IonCol, IonGrid, IonRow } from '../server/ionicImports';

export default function Main() {

  type Anchor = 'top' | 'left' | 'bottom' | 'right';

  const [open, setOpen] = useState<any>(false);
  const [state, setState] = useState<any>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <main id="mainSection">
      {(['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <div className="sideMenu">
            <div className="hamburger" title="Menu" onClick={toggleDrawer(anchor, true)}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
            <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
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
                      <h1>Next.js <span className="bottom">start <span className="primaryVariant">file</span>.</span></h1>   
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </div>
          <ScrollToDiscover />
          <Explore />
        </Fragment>
      ))}
    </main>
  );
}
