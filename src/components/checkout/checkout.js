import useStyles from "./styles";
import { Container, Button, BottomNavigation, BottomNavigationAction, Paper, TextField } from "@material-ui/core";
import { useState } from "react";
import { Save } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Payment from "./payment";
import { useNavigate } from "react-router-dom";


export const Checkout = () => {

  const classes = useStyles();
  const [value, setValue] = useState(false);
  const data = useSelector(state => state.checkoutReducer?.checkoutData[0]);
  const [ amount, setAmount ] = useState(0);
  const navigate = useNavigate();

  let x = 0;
  data.forEach(element => {
    x = x+parseInt(element.price);
  });

  useEffect(() => {
     setAmount(x);
  })


  const payment = () => {
    navigate('/payment');
  }

  const Edit = () => {
    setValue(true);
  }

  const Save = () => {
    setValue(false)
  }

  return (
    <>
      <Container style={{ maxWidth: "100%" }}>
        <div className={classes.headerDiv}>Billing & Payment</div>
        <Container
          style={{
            border: "1px solid grey",
            margin: "2%",
            display: "flex",
            padding: "1%",
            maxWidth: "96%",
          }}
        >
            {value ? (<>
                <TextField
                    style={{marginRight: '3%'}}
                    className={classes.textField}
                    variant="outlined"
                    label="Deliver to this Address"
                    fullWidth
                    required
                    />
                    <Button onClick={(e) => Save(e)} style={{backgroundColor: 'greenyellow', height: '5%', marginTop: '1%'}}>Save</Button>
            </>
          ) : (<>
            <div style={{ marginTop: "0.7%" }}>
              Satyansh Prakash, S-17B, Ganpati Infinity, Vrindavan, Mathura, Uttar
              Pradesh
            </div>
            <Button
              onClick={() => Edit()}
              style={{
                float: "right",
                backgroundColor: "blue",
                color: "white",
                marginLeft: "45%",
              }}
            >
              Edit
            </Button>
            </>
            )}
        </Container>
        <div className={classes.restaurantName}>Indian Accent</div>
        <hr style={{ maxWidth: "100%" }} />
        <Container className={classes.mainContainer}>
          {data.map((element) => {
            return(
            <div className={classes.itemDetails}>
              <div className={classes.itemName}>{element.itemName} x 1</div>
              <div className={classes.price}>&#8377;{element.price}</div>
            </div>
            )
          })}
          {/* <div className={classes.itemDetails}>
            <div className={classes.itemName}>Item Name x 1</div>
            <div className={classes.price}>Price</div>
          </div>

          <div className={classes.itemDetails}>
            <div className={classes.itemName}>Item Name x 1</div>
            <div className={classes.price}>Price</div>
          </div>

          <div className={classes.itemDetails}>
            <div className={classes.itemName}>Item Name x 1</div>
            <div className={classes.price}>Price</div>
          </div> */}
          <hr />
          <div style={{float:'right'}}>&#8377;{amount}</div>
        </Container>
      </Container>
      <BottomNavigation style={{position: 'fixed', bottom: '0', left: '0', right: '0', border: '1px solid grey'}}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <span style={{color: 'grey', marginTop: '1.3%', paddingLeft: '2%'}}>Payment</span>
        <BottomNavigationAction label="Pay on Delivery" style={{ marginLeft: '66%'}}/>
        <BottomNavigationAction onClick={() => payment()} label="Pay Online" style={{ backgroundColor: 'green', color: 'white', }}/>
      </BottomNavigation>
    </>
  );
};
