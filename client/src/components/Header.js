import React from "react";
import Button from "react-bootstrap/Button";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>ICE CREAM!</h1>
                    </div>
                    <div className="col-md-4">
                        <Button>Log-in</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;