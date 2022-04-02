import { Button } from '@mui/material';
// Import the FontAwesomeIcon component
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Explore() {
    return (
        <div className="explore" title='Explore'>
            <div className="innerExplore">
                <p>Explore</p>
                <Button className="arrow lightBtn" title="Explore">
                    <FontAwesomeIcon icon={faChevronRight} />
                </Button>
            </div>
        </div>
    )
}