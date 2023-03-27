import React from "react";
import "./Navigation.css";

class Navigation extends React.Component
{
    render()
    {
        return(
            <>
            <div className="nav">
                <ul>
                    <li>Riley Hendrickson</li>
                    <li><a href="https://www.linkedin.com/in/riley-hendrickson/" target={"_blank"}><img src="../../../public/linkedInButton.png"/></a></li>
                </ul>
            </div>
            </>
        )
    }
}
export default Navigation;