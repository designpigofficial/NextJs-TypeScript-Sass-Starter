import Link from 'next/link';
import { Button } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {
    return (
        <header>
            <div className="innerHeader">
                <Link href={`/`}>
                    <a title="Home">
                        <LazyLoadImage effect="blur" src={`/assets/GherkinLogo.svg`} id={`logo`} className="logo" alt={`logo`} width={`100%`} height={`auto`} />
                        Rakib
                    </a>
                </Link>
                <div className="buttons">
                    <Button className="login lightBtn" title='Login'>Login</Button>
                    <Button className="signUp" title='Signup'>Signup</Button>
                </div>
            </div>
        </header>
    )
}