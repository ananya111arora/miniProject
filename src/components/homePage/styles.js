// import { makeStyles } from "@material-ui/core";

// export default makeStyles({
//     image: {
//         width: "100%",
//         height: 300,
//       },
//       carousel: {
//         marginTop: "10",
//       },

//       mainContainer: {
//         maxWidth: '100%',
//         padding: '0%',
//         margin: '0%',
//         display: 'flex'
//       },

//       mainContainerContainer1: {
//         maxWidth: '100%',
//         border: '1px solid grey',
//         marginLeft: '0%',
//       },

//       mainContainerContainer1Container: {
//         marginLeft: '0',
//         padding: '1%',
//         paddingLeft: '0',
//         display: 'flex',
//         maxWidth: '100%'
//       },

//       imageDiv: {
//         maxWidth: '20%'
//       },


//       restuarantImage: {
//         textAlign: 'left',
//         maxWidth: '100%',
//         height: '100%'
//       },


//       restaurantDetailDiv: {
//         marginLeft: '1%',
//         maxWidth: '100%'
//       },
//       restuarantName: {
//         fontSize: '130%'
//       },

//       viewMenuButtonSpan: {
//         float: 'right'
//       },

//       category: {
//         color: 'grey',
//         fontSize: '80%',
//         marginTop: '1%'
//       },

//       restuarantAddress: {
//         // position: 'absolute',
//         marginTop: '1%',
//         color: 'grey',
//         fontSize: '80%',
//       },

//       mainContainerContainer2: {
//         maxWidth: '30%',
//         // backgroundColor: 'blue'
//       },

//       mainContainerContainer2div: {
//         marginTop: '10%',
//         textAlign: 'center'
//       },
      

//       mainContainerContainer2div2: {
//         fontSize: '130%',
//         marginBottom: '10%',
//         textAlign: 'center'
//       },

//       previousOrderDiv: {
//         marginTop: '3%'
//       },

//       previousOrderDivDiv1: {
//         display: 'flex',
//         justifyContent: ''
//       },

//       previousOrderRestuarantName: {
//         fontSize: '120%'
//       }, 

//       previousOrderPrice: {
//         marginLeft: '50%',
//       },

//       previousOrderTime: {
//         fontSize: '88%'
//       },

//       footer: {
//         backgroundColor: 'yellow',
//         maxWidth: '100%'
//       }
// })




















import { makeStyles } from "@material-ui/core/styles";
import firstBackgroundImage from '../homePage/images/foodBanner3.jpg'


export default makeStyles({

    image: {
      width: "100%",
      height: 300,
    },
    carousel: {
      marginTop: "10",
    },

    container1: {
        maxWidth: '100%',
        height: '40%',
        backgroundImage: `url(${firstBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    },

    restaurantName: {
        paddingTop: '20%',
        fontSize: '130%'
    },

    restaurantNameDiv: {
        fontSize: '200%',
        margin: '1%'
    },

    itemsContainer: {
        maxWidth: '100%',
        padding: '0',
        // border: '1px solid grey',

    },

    item: {
        padding: '1%',
        display: 'flex',
        maxWidth: '100%',
    },

    imageDiv: {
        maxWidth: '20%'
    },

    restaurantImage: {
        maxWidth: '100%'
    },

    itemDetailDiv: {
        marginLeft: '1%',
        maxWidth: '100%'
    },


    itemName: {
        paddingBottom: '1%'
    },


    itemRating: {
        display: 'flex',
        fontSize: '80%',
        color: 'grey',
        paddingBottom: '1%'
    },

    price: {
        fontSize: '80%',
        color: 'grey',
        paddingBottom: '1%'
    },


    descDiv: {
        fontSize: '80%',
        color: 'grey'
    },

    buttonDiv: {
        marginTop: '2.5%',

        height: '10%',
        marginLeft: 'auto',
        order: '2'
        // marginLeft: '25%'
    },

    buttonSpan: {
    },

    button: {
    }

});