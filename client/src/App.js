import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Order from "./pages/Order";
import Manage from "./pages/Manage";
import Stripe from "./pages/StripeContainer"
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div>
            <Header />
            <NavTabs />
            <Route exact path="/" component={Order} />
            <Route exact path="/manage"  component={Manage} />
            <Route exact path="/stripeContainer" component={Stripe} />
            </div>
        </Router>
    )
}

export default App;
