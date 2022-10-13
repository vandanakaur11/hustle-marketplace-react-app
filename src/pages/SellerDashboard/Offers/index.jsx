import classes from './Offers.module.css'
import OfferButton from './OfferButton';
import { useState } from 'react';
import ActiveOffers from './ActiveOffers';
import PendingApproval from "./PendingApproval";
import Draft from "./Draft";
import Denied from "./Denied";
import Paused from "./Paused";

const Offers = ({ setShowScreen }) => {
  const [offerScreen, setOfferScreen] = useState("Active");

  return (
    <div className={classes.container}>
      <div className={classes.heading}>Offers</div>
      <div className={classes.buttonContainer}>
        <div className={classes.leftButtons}>
          <OfferButton setOfferScreen={setOfferScreen} innerText="Active" />
          <OfferButton
            setOfferScreen={setOfferScreen}
            innerText="Pending Approval"
          />
          <OfferButton setOfferScreen={setOfferScreen} innerText="DRAFT" />
          <OfferButton setOfferScreen={setOfferScreen} innerText="DENIED" />
          <OfferButton setOfferScreen={setOfferScreen} innerText="PAUSED" />
        </div>
        <div className={classes.right}>
          <div
            className={classes.btn}
            onClick={() => setShowScreen('createNewOffer')}
          >
            CREATE NEW OFFER
          </div>
        </div>
      </div>
      <div className={classes.offerContainer}>
        {offerScreen === "Active" && <ActiveOffers />}
        {offerScreen === "Pending Approval" && <PendingApproval />}
        {offerScreen === "DRAFT" && <Draft />}
        {offerScreen === "DENIED" && <Denied />}
        {offerScreen === "PAUSED" && <Paused />}
      </div>
    </div>
  );
};

export default Offers