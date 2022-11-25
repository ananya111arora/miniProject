import Carousel from "react-material-ui-carousel";
import foodBanner1 from "./images/foodBanner1.jpg";
import useStyles from "./styles";
import { Container, Button } from "@material-ui/core";
import { AccessTime, StarHalf } from "@material-ui/icons";
import { useEffect } from "react";
import image from '../homePage/images/foodBanner1.jpg';
import { restaurants } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const bannerData = [foodBanner1, foodBanner1, foodBanner1];
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(state => state.dataReducer?.data?.data?.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(restaurants());
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });


    // var geocoder = new google.maps.Geocoder();
    // var latlng = new google.maps.LatLng(lat, lng);
    // geocoder.geocode({ latLng: latlng }, function (results, status) {
    //   if (status == google.maps.GeocoderStatus.OK) {
    //     if (results[0]) {
    //       var add = results[0].formatted_address;
    //     }
    //   }
    // });
  }, []);


  const restaurantClick = (id) => {
    navigate(`/restaurant/:${id}`);
  }

  return (
    <>
      <Carousel
        autoplay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            margin: 0,
          },
        }}
        className={classes.carousel}
      >
        {bannerData.map((item) => (
          <img src={item} alt="" className={classes.image} />
        ))}
      </Carousel>



      {/* <Container className={classes.mainContainer}>
        <Container className={classes.mainContainerContainer1}>
          <Container className={classes.mainContainerContainer1Container}>
            <div className={classes.imageDiv}>
              <img className={classes.restuarantImage} src={foodBanner1} />
            </div>
            <div className={classes.restaurantDetailDiv}>
              <div className={classes.restuarantName}>Indian Accent <span style={{backgroundColor: 'yellowGreen', color: 'white', fontSize: '70%', borderRadius: '20%', padding: '1%'}}><StarHalf style={{color: 'white', fontSize: '110%', marginTop: '2%'}}/>4.4</span>
              <span className={classes.viewMenuButtonSpan}><Button className={classes.viewMenuButton}>View Menu</Button></span>
              </div>
              <div className={classes.category}>Category: Veg, Fast Food</div>
              <div className={classes.restuarantAddress}>
                The Lodhi, Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, Delhi
                110003
              </div>
            </div>
          </Container> 
          <hr />
        </Container>
 */}

        {/* <Container className={classes.mainContainerContainer2}>
          <div className={classes.mainContainerContainer2div}>
            <AccessTime style={{ fontSize: "800%", color: "orange" }} />
          </div>
          <div className={classes.mainContainerContainer2div2}>
            Previous Orders
          </div>

          <div className={classes.previousOrderDiv}>
            <div className={classes.previousOrderDivDiv1}>
              <div className={classes.previousOrderRestuarantName}>
                Indian Accent
              </div>
              <div className={classes.previousOrderPrice}>&#8377;955</div>
            </div>
            <div className={classes.previousOrderTime}>18-11-2022 21:16</div>
          </div>
          <hr />
          <div className={classes.previousOrderDiv}>
            <div className={classes.previousOrderDivDiv1}>
              <div className={classes.previousOrderRestuarantName}>
                Indian Accent
              </div>
              <div className={classes.previousOrderPrice}>&#8377;955</div>
            </div>
            <div className={classes.previousOrderTime}>18-11-2022 21:16</div>
          </div>
          <hr />
          <div className={classes.previousOrderDiv}>
            <div className={classes.previousOrderDivDiv1}>
              <div className={classes.previousOrderRestuarantName}>
                Indian Accent
              </div>
              <div className={classes.previousOrderPrice}>&#8377;955</div>
            </div>
            <div className={classes.previousOrderTime}>18-11-2022 21:16</div>
          </div>
        </Container> */}
      {/* </Container>
      <Container className={classes.footer}>Hello World</Container> */}






<Container className={classes.itemsContainer}>
  {data? (
    data.map(element => {
      console.log(element.restaurantName);
      return(
      <Container className={classes.item}>
                <div className={classes.imageDiv}>
                    <img className={classes.restaurantImage} src={element.restaurantImage} />
                </div>
                <div className={classes.itemDetailDiv}>
                    <div className={classes.itemName}>{element.restaurantName}</div>
                    <div className={classes.itemRating}>
                        <StarHalf style={{fontSize: '130%', marginRight: '1%', color: 'orange'}}/>4.4 610 votes
                    </div>
                    <div className={classes.price}>Category: {element.category}</div>
                    <div className={classes.descDiv}>
                    {element.address}
                    </div>
                </div>
                <div className={classes.buttonDiv}>
                    <Button onClick={() => restaurantClick(element._id)}className={classes.button}>view Menu</Button>
                </div>
            </Container>
            )
    })
  ): (console.log(data))}
            {/* <Container className={classes.item}>
                <div className={classes.imageDiv}>
                    <img className={classes.restaurantImage} src={image} />
                </div>
                <div className={classes.itemDetailDiv}>
                    <div className={classes.itemName}>Indian Accent</div>
                    <div className={classes.itemRating}>
                        <StarHalf style={{fontSize: '130%', marginRight: '1%', color: 'orange'}}/>4.4 610 votes
                    </div>
                    <div className={classes.price}>Category: Veg, Fast Food</div>
                    <div className={classes.descDiv}>
                    The Lodhi, Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, Delhi
                110003
                    </div>
                </div>
                <div className={classes.buttonDiv}>
                    <Button className={classes.button}>view Menu</Button>
                </div>
            </Container> */}
            {/* <hr/>

            <Container className={classes.item}>
                <div className={classes.imageDiv}>
                    <img className={classes.restaurantImage} src={image} />
                </div>
                <div className={classes.itemDetailDiv}>
                    <div className={classes.itemName}>Indian Accent</div>
                    <div className={classes.itemRating}>
                        <StarHalf style={{fontSize: '130%', marginRight: '1%', color: 'orange'}}/>4.4 610 votes
                    </div>
                    <div className={classes.price}>Category: Veg, Fast Food</div>
                    <div className={classes.descDiv}>
                    The Lodhi, Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, Delhi
                110003
                    </div>
                </div>
            </Container>
           <hr />


           
           <Container className={classes.item}>
                <div className={classes.imageDiv}>
                    <img className={classes.restaurantImage} src={image} />
                </div>
                <div className={classes.itemDetailDiv}>
                    <div className={classes.itemName}>Indian Accent</div>
                    <div className={classes.itemRating}>
                        <StarHalf style={{fontSize: '130%', marginRight: '1%', color: 'orange'}}/>4.4 610 votes
                    </div>
                    <div className={classes.price}>Category: Veg, Fast Food</div>
                    <div className={classes.descDiv}>
                    The Lodhi, Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, Delhi
                110003
                    </div>
                </div>
            </Container>
           <hr />



           
           <Container className={classes.item}>
                <div className={classes.imageDiv}>
                    <img className={classes.restaurantImage} src={image} />
                </div>
                <div className={classes.itemDetailDiv}>
                    <div className={classes.itemName}>Indian Accent</div>
                    <div className={classes.itemRating}>
                        <StarHalf style={{fontSize: '130%', marginRight: '1%', color: 'orange'}}/>4.4 610 votes
                    </div>
                    <div className={classes.price}>Category: Veg, Fast Food</div>
                    <div className={classes.descDiv}>
                    The Lodhi, Lodhi Rd, CGO Complex, Pragati Vihar, New Delhi, Delhi
                110003
                    </div>
                </div>
            </Container>
           <hr /> */}

            </Container>
    </>
  );
};
