import { Button } from "@mui/material";
import{useState, useEffect} from "react";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <Button className={show ? `visibleButton` : `hiddenButton`} onClick={() => scrollTop()} id="topButton" title="Scroll to top">
           <FontAwesomeIcon className="upArrow" icon={faChevronUp} />
        </Button>
    )
}