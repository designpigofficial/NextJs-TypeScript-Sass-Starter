import Link from 'next/link';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from '../functions';
export default function Header({form,setForm}:any) {
    const [scrolled, setScrolled] = useState<any>(false);

    const scrollToForm = () => {
        document.body.scrollTop = window.innerHeight + 200; // For Safari
        document.documentElement.scrollTop = window.innerHeight + 200; // For Chrome, Firefox, IE and Opera
      }
  
      const setSignin = () => {
        scrollToForm();
        setForm(`signin`);
      }

      const setSignup = () => {
        scrollToForm();
        setForm(`signup`);
      }
    
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
                    <Button onClick={(event) => setSignin} id="signinBtn" className="btn regBtn lightBtn" title='Signin'>Signin</Button>
                    <Button onClick={(event) => setSignup} id="signupBtn" className="btn regBtn" title='Signup'>Signup</Button>
                </div>
            </div>
        </header>
    )
}