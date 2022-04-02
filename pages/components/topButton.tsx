import { Button } from "@mui/material";
import{useState, useEffect} from "react";

export default function TopButton() {

    const [show, setShow] = useState<any>(false);

    const scrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const showButton = () => {
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener(`scroll`, (event) => {
            showButton();
            return () => window.removeEventListener(`scroll`, (event) => {
                showButton();
            })
        })
    }, [])

    return (
        <Button className={show ? `visibleButton iconButton` : `hiddenButton iconButton`} onClick={() => scrollTop()} id="topButton" title="Scroll to top">
           <i className="fas fa-chevron-up"></i>
        </Button>
    )
}