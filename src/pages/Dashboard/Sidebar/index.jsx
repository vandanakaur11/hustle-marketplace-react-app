import { Link } from "react-router-dom";
import add from "./../../../images/add.png";
import avatar1 from "./../../../images/avatar1.png";
import chat1 from "./../../../images/chat1.png";
import dashboard1 from "./../../../images/dashboard1.png";
import deliverystatus from "./../../../images/delivery-status1.png";
import logo from "./../../../images/Hustle-logo.png";
import logout1 from "./../../../images/logout1.png";
import payperclick from "./../../../images/pay-per-click1.png";
import pending1 from "./../../../images/pending1.png";
import repairtool1 from "./../../../images/repair-tool1.png";
import settings1 from "./../../../images/settings1.png";
import user1 from "./../../../images/user1.png";
import classes from "./Sidebar.module.css";

const Sidebar = ({ setShowScreen }) => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebarCont}>
        <div className={classes.sidebarInnerTop}>
          <div>
            <img alt="" src={avatar1} />
            <div className={classes.name}>Alex Jenin</div>
          </div>
          <div className={classes.info}>Owner CleanMart</div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("dashboardmain")}
          >
            <img alt="" src={dashboard1} />
            <div>Dashboard</div>
          </div>
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("services")}
          >
            <img alt="" src={repairtool1} />
            <div>Services</div>
          </div>
          <img alt="" src={add} className={classes.addimg} />
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("order-pending")}
          >
            <img alt="" src={pending1} />
            <div>Order Pending</div>
          </div>
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("order-status")}
          >
            <img alt="" src={deliverystatus} />
            <div>Order Status</div>
          </div>
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("payout-history")}
          >
            <img alt="" src={payperclick} />
            <div>Payout History</div>
          </div>
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("profile")}
          >
            <img alt="" src={user1} />
            <div>Profile</div>
          </div>
          {/* <img alt="" src={add} className={classes.addimg} /> */}
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("settings")}
          >
            <img alt="" src={settings1} />
            <div>Settings</div>
          </div>
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("review")}
          >
            <img alt="" src={chat1} />
            <div>Review</div>
          </div>
          <div></div>
        </div>
        <div className={classes.sidebarInner}>
          <div
            className={classes.sidebarInnerLeft}
            onClick={() => setShowScreen("logout")}
          >
            <img alt="" src={logout1} />
            <div>Log Out</div>
          </div>
          <div></div>
        </div>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
