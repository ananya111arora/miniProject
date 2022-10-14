import useStyles from './styles';
import { Container, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';


export const Navbar = () => {
    const classes = useStyles();
    const user = false;


    return(
        <>
            <nav className={classes.nav}>
            <textArea className={classes.textArea1} row={1} cols={10}/>
            <textArea className={classes.textArea}
                row={1}
                cols={50}
                placeholder="Search for restuarants, dishes and more"
            />
            {user ? (
            <div className={classes.myAccountDiv}>
            <Button className={classes.myAccount}
            //   onMouseOver={handleMenuClick}
            >
             <AccountCircle fontSize="large"/>
            </Button>
            </div>
            ) : (
                <div className={classes.myAccountDiv}>
                    <Button>
                        Login
                    </Button>
                </div>
            )}
            </nav>
        </>
    )
}