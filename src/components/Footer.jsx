import React from "react";


function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>All Rights Reserved. Francis Adeboye ⓒ {year}</p>
        </footer>
    )
}

export default Footer;