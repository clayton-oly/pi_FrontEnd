import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Navbar from '../../components/estaticos/navbar/Navbar'
import './Home.css';
import { UserState } from '../../store/user/userReducer';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
  
      }
  }, [token])

    return (
    <>
        <Navbar />
        <h1>
            PAGINA HOME
        </h1>
    </>    
    );
}

export default Home;