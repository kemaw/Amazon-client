import React, { useContext } from "react";
import classes from "./Headre.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  console.log(basket.length);

  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>US</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            <BsSearch size={38} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_the_United_States_of_America_%28American_Legion%29.jpg/640px-Flag_of_the_United_States_of_America_%28American_Legion%29.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, SignIn</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* order */}
            <Link to="/orders">
              <p>Return</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <IoMdCart size={35} />
              <span>{totalItems}</span>
            </Link>
            <div className={classes.cart__cart}>
              <span>
                <h3>Cart</h3>
              </span>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
