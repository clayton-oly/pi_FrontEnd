import React, { useEffect, useState, ChangeEvent } from 'react'
import { Box, Button, Card, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Produto from '../../models/Produto'
import { buscaId } from '../../services/Service'
import './Cart.css'
import { useSelector } from 'react-redux'
import { UserState } from '../../store/tokens/userReducer';
import { toast } from 'react-toastify'

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
        preco: 0,
        tipo: '',
        classInd: '',
        console: '',
        foto: '',
        dataProduto: '',
        categoria: null,
        usuario: null
    })


    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function findByIdProduto(id: string) {
        await buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        let valor = +e.target.value
        setQuantidadeFinal(valor);
    }

    function valorTotal() {
        return quantidadeFinal * produto.preco
    }

    function confirmSales() {
        toast.success('Compra Confirmada! Verifique o seu email!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
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
                                Jogo
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