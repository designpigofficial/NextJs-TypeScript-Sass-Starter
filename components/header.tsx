import Link from 'next/link';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from '../functions';
export default function Header(props:any) {
    const [scrolled, setScrolled] = useState<any>(false);
    useEffect(() => {
        window.addEventListener('scroll', (event?:any) => window.scrollY > 5 ? setScrolled(true) : setScrolled(false));
    }, [setScrolled]);
    return (
        <header className={scrolled ? `scrolledHeader` : `nonscrolledHeader`}>
            <div className="innerHeader">
                <Link href={`/`}>
                    <a title="Home">
                        <LazyLoadImage effect="blur" src={`/assets/GherkinLogo.svg`} id={`logo`} className="logo" alt={`logo`} width={`100%`} height={`auto`} />
                        Next.js
                    </a>
                </Link>
                <div className="buttons">
                    <Button id="signinBtn" className="btn regBtn lightBtn" title='Signin'>Signin</Button>
                    <Button id="signupBtn" className="btn regBtn" title='Signup'>Signup</Button>
                </div>
            </div>
        </header>
    )
}