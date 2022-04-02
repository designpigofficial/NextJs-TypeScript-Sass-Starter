export default function ScrollToDiscover() {

    const scrollBottom = () => {
        window.scrollTo(0,document.body.scrollHeight); // For Safari
        window.scrollTo(0,document.documentElement.scrollHeight); // For Chrome, Firefox, IE and Opera
      }
      
    return (
        <div className="scrollToDiscover" onClick={() => scrollBottom()} title="Scroll To Discover">
            <div className="arrowDown">
                <svg width="9" height="28" viewBox="0 0 9 28" fill="none" xmlns="http://www.w3.org/2000/svg" id={`arrowDown`} className="arrowDown">
                <path d="M1.5 1.5V26.5" stroke="#23211F"/>
                <path d="M1.5 26.5L7.5 20.5" stroke="#23211F"/>
                <path d="M4.5 23.5V15.5" stroke="#23211F"/>
                </svg>
            </div> SCROLL TO DISCOVER
        </div>
    )
}