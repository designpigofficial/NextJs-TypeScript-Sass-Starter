import { Button } from '@mui/material';

export default function Explore() {
    return (
        <div className="explore" title='Explore'>
            <div className="innerExplore">
                <p>Explore</p>
                <Button className="arrow lightBtn" title="Explore">
                    <i className="fas fa-chevron-right"></i>
                </Button>
            </div>
        </div>
    )
}