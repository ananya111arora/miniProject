import {
  Container,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import useStyles from "./styles";
import { StarHalf } from "@material-ui/icons";
import image from "../homePage/images/foodBanner1.jpg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkout } from "../../actions/auth";

const initialCart = [{itemName: '', price: ''}];
export const Restaurant = () => {
  const classes = useStyles();
  const { id } = useParams();
  const id1 = id.replace(":", "");
  const data = useSelector((state) => state.dataReducer?.data?.data?.data);
  // const []
  const menu = data.filter(function (element) {
    return element._id == id1;
  });
  const cartData = [];
  const [cart, setCart] = useState(initialCart);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const billing = () => {
    cartData.push(cart);
    dispatch(checkout(cartData, navigate));
  }

  const increament = (itemName, price) => {

    if(cart[0].itemName == '') {
        setCart([{itemName: itemName, price: price}]);
        setCart([{itemName: itemName, price: price}]);
        // setCart(cart => [...cart, {itemName: itemName, price: price}]);
    }
    else setCart(cart => [...cart, {itemName: itemName, price: price}]);

        setAmount((amount) => amount+parseInt(price))
        console.log(amount);
  };


//   function count(itemName, price){
//         const x = cartData.filter(function (element1) {
//             return element1.itemName == itemName && element1.price == price;
//         });
//         console.log()
//         return x.length;
//         }
  

  const decreament = (itemName, price) => {
        if(amount-parseInt(price) >= 0){
            setAmount((amount) => amount-parseInt(price))
        }
    const index = cart.findIndex(object => {
        return object.itemName == itemName && object.price == price;
      });
    const x = cart.splice(index, 1);
    const val = cart.filter(function(el){return el.itemName == itemName && el.price == price}).length;
    if(val == 0){
        console.log(val);
        setCart(initialCart);
    }
    setCart(cart => [...cart]);
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <Container className={classes.container1}>
        <div className={classes.restaurantName}></div>
      </Container>
      <div className={classes.restaurantNameDiv}>{menu[0].restaurantName}</div>
      <Container className={classes.itemsContainer}>
        {menu[0].menu.map((element) => {
          return (
            <Container className={classes.item}>
              <div className={classes.imageDiv}>
                <img className={classes.image} src={element.itemImage} />
              </div>
              <div className={classes.itemDetailDiv}>
                <div className={classes.itemName}>{element.itemName}</div>
                <div className={classes.itemRating}>
                  <StarHalf
                    style={{
                      fontSize: "130%",
                      marginRight: "1%",
                      color: "orange",
                    }}
                  />
                  4.4 610 votes
                </div>
                <div className={classes.price}>&#8377;{element.price}</div>
                <div className={classes.descDiv}>{element.itemDescription}</div>
              </div>
              <div className={classes.buttonDiv}>
                <Button onClick={() => decreament(element.itemName, element.price)} className={classes.button}>-</Button>
                <span className={classes.buttonSpan}>
                  {(cart.filter(function(el){return el.itemName == element.itemName && el.price == element.price})).length}
                </span>
                <Button
                  onClick={() => increament(element.itemName, element.price)}
                  className={classes.button}
                >
                  +
                </Button>
              </div>
            </Container>
          );
        })}
      </Container>

      <BottomNavigation
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          border: "1px solid grey",
        }}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <span style={{ color: "grey", marginTop: "1.3%", paddingLeft: "2%" }}>
          Cart
        </span>
        <BottomNavigationAction
          onClick={() => billing()}
          label={amount}
          style={{
            marginLeft: "auto",
            order: "2",
            backgroundColor: "green",
            color: "white",
          }}
        ></BottomNavigationAction>
      </BottomNavigation>
    </>
  );
};
