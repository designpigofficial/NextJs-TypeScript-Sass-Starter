import Link from 'next/link';
import { Button } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MobileMenu() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
        <ul className='innerMenu'>
            <Link href={`/`}>
                <a title="Home">
                    <LazyLoadImage effect="blur" src={`/assets/GherkinLogo.svg`} id={`logo`} className="logo" alt={`logo`} width={`100%`} height={`auto`} />
                    Next.js
                </a>
            </Link>
            <li className="navigation-tab firstLink">
                <Link href={`/`}>
                <a className="current active hoverLink" href="./"><i className="fas fa-home"></i> Home</a>
                </Link>
            </li>
            <li className="navigation-tab">
                <Link href={`/profile`}>
                <a className="hoverLink" href="./profile" title='Profile'><i className="fas fa-user"></i> Profile</a>
                </Link>
            </li>
            <li className="navigation-tab">
                <Link href={`/files`}>
                <a className="hoverLink" href="./files" title='Files'><i className="fas fa-file"></i> Files</a>
                </Link>
            </li>
            <li className="navigation-tab">
            <Button
                    className='logoutButton mobileLogout'
                    title="Log Out"
                    style={{
                        color: `white`,
                        textTransform: `none`,
                        fontWeight: `400`,
                        fontSize: `14px !important`,
                    }}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                </Button>
            </li>
        </ul>
        <div className="menuDash menuFooter">
            <div className="nameText">
                <a className="customLink hoverLink" target={`_blank`} href="https://github.com/strawhat19/NextJsTypescriptStarterTemplate" title="Next.js Starter"><i className="fab fa-github"></i> Next.js Starter</a>
            </div>
            <div className="siteText copyright" title="Copyright">
                <a href="./" className="hoverLink"><i className="fas fa-copyright"></i> {year}</a>
            </div>
        </div>
        </>
    )
}