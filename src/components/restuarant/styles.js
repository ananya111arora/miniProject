import { makeStyles } from "@material-ui/core/styles";
import firstBackgroundImage from '../homePage/images/foodBanner1.jpg'


export default makeStyles({

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

    image: {
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
        height: '10%',
        backgroundColor: 'orange',
        textAlign: 'right',
        // marginLeft: '25%'
        marginLeft: 'auto',
        order: '2'
    },

    buttonSpan: {
    },

    button: {
    }

});