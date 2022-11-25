import useStyles from './styles';
import { Container, Button } from '@material-ui/core';
import { AccountCircle, ImageOutlined } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
    const classes = useStyles();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();




    const login = () => {
        navigate('/auth');
    }
    const logout = () => {
        dispatch({ type : 'LOGOUT' })
        navigate('/auth');
        setUser(null);
    }


    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


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
                    <Button onClick={() => login()}>
                        Login
                    </Button>
                </div>
            )}
            </nav>
        </>
    )
}