import { Button, makeStyles, Toolbar } from "@material-ui/core";
import { AppBar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

const useStyles = makeStyles({
    root:{
        flexGrow: 1,
    },
    linkStyle:{
        color: '#fafafa',
        textDecoration: 'none',
    },
});

const NavBar = () => {
    const history = useNavigate();
    const classes = useStyles();
    const state = useSelector(state => state);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        //signout the user
        dispatch(signOut())
        history("/signin")
    }
    return ( 
        <>
        <AppBar position = "static">
            <Toolbar>
            <Typography variant="h4" className= {classes.root}>
            <Link className = {classes.linkStyle} to ="/">
                Taskifier
            </Link>
            </Typography>
            { auth._id ? (
                <>
                <Typography variant="subtitle2" className= {classes.root}>
                Logged in as {auth.name}
                </Typography>
                <Button color="inherit" onClick={()=>handleSignOut()}>
                    SignOut
                </Button>
                </>
            ) : (
                <>
                <Button color="inherit">
                <Link className = {classes.linkStyle} to ="/signin">
                SignIn
                </Link> 
                </Button>
                <Button color="inherit">
                    <Link className = {classes.linkStyle} to ="/signup">
                    SignUp
                    </Link> 
                </Button>
                </>
            ) }
        
            </Toolbar>

        </AppBar>
        </> 
    );
}
 
export default NavBar;