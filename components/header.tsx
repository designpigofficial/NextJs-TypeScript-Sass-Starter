import Link from 'next/link';
import { Button } from '@mui/material';
import { LazyLoadImage } from '../functions';
export default function Header(props:any) {
    return (
        <header>
            <div className="innerHeader">
                <Link href={`/`}>
                    <a title="Home">
                        <LazyLoadImage effect="blur" src={`/assets/GherkinLogo.svg`} id={`logo`} className="logo" alt={`logo`} width={`100%`} height={`auto`} />
                        Next.js
                    </a>
                </Link>
                <div className="buttons">
                    <Link href={`#login`}><Button id="loginBtn" className="btn lightBtn" title='Login'>Login</Button></Link>
                    <Link href={`#signup`}><Button id="signupBtn" className="btn" title='Signup'>Signup</Button></Link>
                    {/* {props.form === `signup` ? (
                        <Link href={`#login`}><Button id="loginBtn" className="btn lightBtn" title='Login'>Login</Button></Link>
                        ) : (
                        <Link href={`#signup`}><Button id="signupBtn" className="btn" title='Signup'>Signup</Button></Link>
                    )} */}
                </div>
            </div>
        </header>
    )
}