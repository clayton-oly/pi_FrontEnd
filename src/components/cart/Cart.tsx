import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate, useParams } from 'react-router-dom'

import Produto from '../../models/Produto'
import { buscaId } from '../../services/Service'
import useLocalStorage from 'react-use-localstorage'

import './Cart.css'
import { useSelector } from 'react-redux'
import { UserState } from '../../store/tokens/userReducer';

function Cart() {

    let history = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const [quantidadeFinal, setQuantidadeFinal] = useState(0)

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        preco: 399.50,
        tipo: '',
        classInd: '',
        console: '',
        foto: 'https://image.api.playstation.com/pr/bam-art/128/259/a7b40966-3908-48a3-8e9a-d881265eca3f.jpg',
        dataProduto: '',
        categoria: null,
        usuario: null
    })

    useEffect(() => {
        if (token === "") {
            alert("VocÃª precisa estar logado")
            history("/login")
        }
    }, [token])

    // useEffect(() => {
    //     if (id !== undefined) {
    //         findByIdPostagem(id)
    //     }
    // }, [id])

    // async function findByIdPostagem(id: string) {
    //     await buscaId(`postagens/${id}`, setProduto, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    function confirmSales() {
        alert("Compra Confirmada! Verifique o seu email!")
        history("/home")
    }

    return (
        <>
            <Box m={2} className='cart'>  
                <Card variant="outlined" className='cardContainer'>

                    <div className='cardProduct'>
                        <img src={produto.foto} alt="Img" />

                        <div className='cardProductInfo'>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>

                            <Typography variant="h5" component="h2">
                                {produto.nome}
                            </Typography>

                            <Typography variant="body2" component="p">
                                R$ {produto.preco}
                            </Typography>


                            <TextField
                                value={quantidadeFinal}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
                                id="quantidade" label="quantidade" type="number" variant="outlined"
                                name="quantidade" margin="normal" fullWidth
                            />

                            <Typography variant="body2" component="p">
                                Total: R$ {valorTotal()}
                            </Typography>
                        </div>
                    </div>

                </Card>

                <Box display="flex" flexDirection="column" justifyContent="center" mb={1.5}>

                    <Box className="cardProductButton">
                        <Box mx={1}>
                            <Button onClick={confirmSales} variant="contained" size='small' color="primary">
                                Confimar Compra
                            </Button>
                        </Box>
                    </Box>

                    <Link to="/home" className="cardProductButton">
                        <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                                Cancelar
                            </Button>
                        </Box>
                    </Link>

                </Box>
            </Box>
        </>
    )
}

export default Cart