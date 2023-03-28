import { Router } from "express";
import { openDb } from "./configDB.js";
import { createTablePessoa ,insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './Controler/Pessoa.js';
import { createTableCartoes,insertCartao,selectCartoes,selectCartao,updateCartao,deleteCartao } from "./Controler/Cartoes.js";

const router = Router();
openDb()
createTablePessoa()
createTableCartoes()

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

router.get('/cartoes', selectCartoes);
router.get('/cartao', selectCartao);
router.post('/cartao', insertCartao);
router.put('/cartao', updateCartao);
router.delete('/cartao', deleteCartao);

export default router;