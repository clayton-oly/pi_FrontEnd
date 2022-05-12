import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/user/actions';
import {toast} from 'react-toastify';
import { UserState } from '../../../store/user/userReducer';

function Navbar() {
  const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    );
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  function goLogout(){
      dispatch(addToken(''));
      toast.info('Usuário deslogado', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
      navigate('/login')
  }

  var navbarComponent;

  if(token != ""){
      navbarComponent = <AppBar position="static">
      <Toolbar variant="dense">
          <Box className='cursor'>
              <Typography variant="h5" color="inherit">
                  BlogPessoal
              </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
              <Link to="/home" className="text-decorator-none">
                  <Box mx={1} className='cursor'>
                      <Typography variant="h6" color="inherit">
                          home
                      </Typography>
                  </Box>
              </Link>
              <Link to="/produtos" className="text-decorator-none">
                  <Box mx={1} className='cursor'>
                      <Typography variant="h6" color="inherit">
                          produtos
                      </Typography>
                  </Box>
              </Link>
              <Link to="/categorias" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                  <Typography variant="h6" color="inherit">
                      categoria
                  </Typography>
              </Box>
              </Link>
              <Link to="/formularioCategoria" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                  <Typography variant="h6" color="inherit">
                      cadastrar categoria
                  </Typography>
              </Box>
              </Link>
              <Link to="/formularioProduto" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                  <Typography variant="h6" color="inherit">
                      cadastrar produto
                  </Typography>
              </Box>
              </Link>
            
                  <Box mx={1} className='cursor' onClick={goLogout}>
                      <Typography variant="h6" color="inherit">
                          logout
                      </Typography>
                  </Box>
              
          </Box>

      </Toolbar>
  </AppBar>
  }
  return (
      <>
          {navbarComponent}
      </>
  )
}

export default Navbar;
