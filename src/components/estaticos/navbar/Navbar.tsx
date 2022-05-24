import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';
import { UserState } from '../../../store/tokens/userReducer';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    const dispatch = useDispatch();

    function goLogout() {
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

    if (token !== "") {
        navbarComponent =
            <AppBar className='menu-container'>
                <Toolbar variant="dense" className='menu-toolbar'>
                    <Link to="/home" className="text-decorator-none">
                        <Box className='cursor'>
                            <Typography variant="h5" color="inherit" className='menu-logo'>
                                NSG
                            </Typography>
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">

                        <Link to="/produtos" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='menu-text'>
                                    Jogos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/categorias" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='menu-text'>
                                    Gêneros
                                </Typography>
                            </Box>
                        </Link>
                        {/* <Link to="/formularioCategoria" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='menu-text'>
                                    Cadastrar gênero
                                </Typography>
                            </Box>
                        </Link> */}
                        {/* <Link to="/formularioProduto" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='menu-text'>
                                    Cadastrar produto
                                </Typography>
                            </Box>
                        </Link> */}
                        <Link to="/sobrenos" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className='menu-text'>
                                    Quem Somos
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box className='nav-menu-icon'>
                        <Link to='/cart'>
                            <Box className='menu-icon-cursor' >
                                <ShoppingCartIcon className='nav-icon' />
                            </Box>
                        </Link>
                        <Link to="/" rel="noopener noreferrer" onClick={goLogout}>
                            <PersonIcon className='nav-icon' />
                        </Link>
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
