import React from "react";
import classes from "./DashboardMain.module.css";
import cardImg1 from "./../../../images/cardImg1.png";
import cardImg2 from "./../../../images/cardImg2.png";
import cardImg3 from "./../../../images/cardImg3.png";
import cardImg4 from "./../../../images/cardImg4.png";
import cardImg1Dark from "./../../../images/cardImg1Dark.png";
import cardImg2Dark from "./../../../images/cardImg2Dark.png";
import cardImg3Dark from "./../../../images/cardImg3Dark.png";
import cardImg4Dark from "./../../../images/cardImg4Dark.png";
import user1 from "./../../../images/user1.png";
import pending1 from "./../../../images/pending1.png";
import payperclick from "./../../../images/pay-per-click1.png";
import deliverystatus from "./../../../images/delivery-status1.png";
import dropdownIcon from "./../../../images/dropdownIcon.png";
import deliverystatusBig from "./../../../images/delivery-statusBig.png";
import payperclickBig from "./../../../images/pay-per-click3Big.png";
import pending3Big from "./../../../images/pending3Big.png";
import user2Big from "./../../../images/user2Big.png";
import chart1 from "./../../../images/chart1.png";
import chart2 from "./../../../images/chart2.png";
import total from "../../../images/Icon121total.png";
import earnings from "../../../images/Icon120earning.png";
import business from "../../../images/Icon122business.png";

function index() {
  return (
    <div className={classes.container}>
      <div className={classes.cardSection}>
        <div className={classes.cardWrap}>
          <img alt="" src={total} className={classes.lightImage} />
          <img alt="" src={cardImg2Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Projects</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={earnings} className={classes.lightImage} />
          <img alt="" src={cardImg1Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>$150</div>
            <div className={classes.cardPara}>Total Earning</div>
          </div>
        </div>
        <div className={classes.cardWrap}>
          <img alt="" src={business} className={classes.lightImage} />
          <img alt="" src={cardImg4Dark} className={classes.darkImage} />
          <div className={classes.cardTextWrap}>
            <div className={classes.cardHeading}>2</div>
            <div className={classes.cardPara}>Total Offers</div>
          </div>
        </div>
      </div>
      <div className={classes.projectsSection}>
        <div className={classes.heading}>
          <h2>Your Projects</h2>
          <button>View All</button>
        </div>
        <div className={classes.project}>
          <div className={classes.projectHeading}>
            <div>Painting</div>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout....
            </span>
          </div>
          <div className={classes.right}>
            <div className={classes.keyValue}>
              <span>Start Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>End Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>Payout</span>
              <div> $8</div>
            </div>
            <div className={classes.projectBtn}>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectHeading}>
            <div>Painting</div>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout....
            </span>
          </div>
          <div className={classes.right}>
            <div className={classes.keyValue}>
              <span>Start Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>End Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>Payout</span>
              <div> $8</div>
            </div>
            <div className={classes.projectBtn}>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <div className={classes.projectHeading}>
            <div>Painting</div>
            <span>
              It is a long established fact a reader will be distracted by the
              readable content of a page when looking at its layout....
            </span>
          </div>
          <div className={classes.right}>
            <div className={classes.keyValue}>
              <span>Start Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>End Date</span>
              <div> 12 Jun - 2022</div>
            </div>
            <div className={classes.keyValue}>
              <span>Payout</span>
              <div> $8</div>
            </div>
            <div className={classes.projectBtn}>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
