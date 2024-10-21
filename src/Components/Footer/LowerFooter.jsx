import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import LanguageIcon from "@mui/icons-material/Language";
function LowerFooter() {
  return (
    <>
      <section className={classes.lower__footer}>
        <div className={classes.lower__section}>
          <div className={classes.amazonfooter_logo}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon footer_logo"
              />
            </a>
          </div>

          <div className={classes.lower__language}>
            <a href="/">
              <span>{<LanguageIcon />} English</span>
            </a>
          </div>
          <div className={classes.language}>
            <a href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_the_United_States_of_America_%28American_Legion%29.jpg/640px-Flag_of_the_United_States_of_America_%28American_Legion%29.jpg"
                alt=""
              />

              <span>United State</span>
            </a>
          </div>
        </div>
      </section>
      <section className={classes.lower__footer__bottom}>
        <div className={classes.footer__bottom}>
          <h3>Amazon Music</h3>

          <span>
            streaming milbrons
            <br />
            of songs
          </span>
          <h3>Amazon Business</h3>

          <span>
            Everything for
            <br />
            your Business
          </span>
          <h3>Goodreads</h3>

          <span>
            Book reviews
            <br />
            & <br />
            recommendations
            <br />
          </span>
          <h3>Amazon Resale</h3>

          <span>
            Great Deals on
            <br />
            Quabrty used
            <br />
            products
            <br />
          </span>
        </div>
        <div className={classes.footer__bottom}>
          <h3>Amazon Ads</h3>

          <span>
            Reach
            <br />
            customers
            <br />
            wherever
            <br />
            they
            <br />
            spend their
            <br />
            time
          </span>
          <h3>Amazon Fresh</h3>

          <span>
            Groceries &
            <br />
            More
            <br />
            Right to Your
            <br />
            Door
          </span>
          <h3>IMDB</h3>

          <span>
            Movies, TV
            <br />& Celebrities
          </span>
          <h3>Whole Food Market</h3>

          <span>
            America's
            <br />
            Healthiest
            <br />
            Grocery Store
          </span>
          <h3>Neighbors App</h3>

          <span>
            Real-Time Crime
            <br />
            & Safety
            <br />
            Alerts
          </span>
        </div>
        <div className={classes.footer__bottom}>
          <h3>6pm</h3>

          <span>
            Score deals
            <br />
            on fashion brands
          </span>
          <h3>AmazonGlobal</h3>

          <span>
            Ship Orders
            <br />
            Internationally
          </span>
          <h3>IMDbpro</h3>

          <span>
            Get Info Entertainment
            <br /> Professionals Need
          </span>
          <h3>Woot!</h3>

          <span>
            Deals &
            <br />
            Shenanigans
          </span>
          <h3>Amazon Subscription Boxes</h3>

          <span>
            Top subscription boxes-
            <br />
            right to your door
          </span>
        </div>
        <div className={classes.footer__bottom}>
          <h3>AbeBooks</h3>

          <span>
            Books, Art
            <br /> & collectibles
          </span>
          <h3>Home Services</h3>

          <span>
            Experienced pros
            <br />
            Happiness <br />
            Guarantee
          </span>
          <h3>Kindle Direct Pubbrshing</h3>

          <span>
            Indie Digital &
            <br />
            print pubbrshing
            <br />
            Made Easy
          </span>
          <h3>Zappos</h3>

          <span>
            Shoes &
            <br />
            Clothing
          </span>
          <h3>Pillpack</h3>

          <span>
            Pharmacy
            <br /> Simpbrfied
          </span>
        </div>
        <div className={classes.footer__bottom}>
          <h3>ACX</h3>

          <span>
            Audiobook
            <br /> Pubbrshing
            <br /> Made Easy
          </span>
          <h3>Amazon Web Services</h3>

          <span>
            Scalable Cloud <br />
            Computing <br />
            Services
          </span>
          <h3>Amazon Photos</h3>

          <span>
            Unlimited
            <br /> Photo Storage <br />
            Free With Prime
          </span>
          <h3>Ring</h3>

          <span>
            Smart Home <br />
            Security <br />
            Systems
          </span>
          <h3>Amazon Renewed</h3>

          <span>
            like-new
            <br /> products <br />
            you can trust
          </span>
        </div>
        <div className={classes.footer__bottom}>
          <h3>Sell on Amazon</h3>

          <span>
            Start a selling <br />
            Account
          </span>
          <h3>Audible</h3>

          <span>
            listen to Books & <br />
            Original
            <br /> Audio
            <br /> performances
          </span>
          <h3>Prime Video Direct</h3>

          <span>
            Video <br />
            Distribution <br />
            Made Easy
          </span>
          <h3>eero WiFi</h3>

          <span>
            Stream 4k Video <br />
            in Every Room
          </span>
        </div>
        <div className={classes.footer__bottom}>
          <h3>veeqo</h3>

          <span>
            Shipping
            <br /> Software
            <br /> Inventory
            <br /> Management
          </span>
          <h3>Box Office Mojo</h3>

          <span>
            Find Movie <br />
            Box Office Data
          </span>
          <h3>Shopbop</h3>

          <span>
            Designer
            <br /> Fashion Brands
          </span>
          <h3>Blink</h3>
          <span>
            Smart Security <br />
            For Every Home
          </span>
        </div>
      </section>
    </>
  );
}

export default LowerFooter;
