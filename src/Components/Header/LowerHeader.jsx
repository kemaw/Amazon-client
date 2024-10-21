import React, { useState } from "react";
import classes from "./Headre.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineMinimize } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function LowerHeader() {
  const [hoverd, setHoverd] = useState(false);
  const [rufushoverd, setRufusHoverd] = useState(false);
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <span>
            {" "}
            <IoMenuOutline size={35} />
          </span>
          <span>All</span>
        </li>

        <li>
          <span>Rufus</span>
        </li>
        <li>
          <span>Same-Day Delivery</span>
        </li>
        <li>
          <span className={classes.downmenu__container}>MedicalCare{<RiArrowDownSFill/>}</span>
           {/* <span>
            <RiArrowDownSFill />
            <div className={hoverd ? "" : classes.medical__container}>
              <h2>your health</h2>
              <div>
                member ship
                <div>
                  <h1>get your needs</h1>
                </div>
              </div>
              <div>
                <div>one medical</div>
                <div>health condition</div>
                <div>healthT</div>
              </div>
            </div>
          </span> */}
        </li> 
        <li>
          <span>Groceroes</span>
          <span>
            <RiArrowDownSFill />
          </span>
        </li>
        <li>
          <span>Buy Again</span>
        </li>
        <li>
          <span>Amazon Business{<RiArrowDownSFill />}</span>
          {/* <span>
            // {/* <RiArrowDownSFill /> */}
          {/* </span>  */}
        </li>
        <li>
          <span>Livestreams</span>
        </li>
        <li>
          <span>Amazon Basics</span>
        </li>
        <li>
          <span>Household, Health & Baby Care</span>
        </li>
        <li>
          <span>Shop By Interest</span>
        </li>
        <li>
          {" "}
          <span>ToNight Football:</span>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
