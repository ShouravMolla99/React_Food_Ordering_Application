import { Fragment } from "react";
import mainHeaderImage from "../../assets/headerBanner.jpg";
import classes from "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Ordering App</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mainHeaderImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};

export default Header;
