import classes from './OfferButton.module.css'

const OfferButton = ({ innerText, setOfferScreen }) => {
  const clickHandler = ()=>{
    console.log(innerText);
    setOfferScreen(innerText)
  }
  
  return <div className={classes.container} onClick={clickHandler}>{innerText}</div>;
};

export default OfferButton