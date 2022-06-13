/* import { Route, Routes } from "react-router"; */
/* import { BrowserRouter, Route, Routes } from "react-router-dom"; */
import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar';
import Todos from './components/todos/Todos';
import { loadUser } from './store/actions/authActions';


const useStyles = makeStyles({
  contentStyle: {
    margin: "30px  auto"
  }
})

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
      <Container maxWidth = "md">
      <NavBar/>
      <Container className= {classes.contentStyle} maxWidth="sm">
      <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
      </Container> 
      </BrowserRouter>
    </>
  );
}

export default App;
