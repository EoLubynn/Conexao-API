// Servidor Express - Projeto #27: Barbearia Clássica & Clube VIP
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3027;

app.get('/api/barbearia/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 27,
        sistema: "Barbearia Clássica & Clube VIP",
        categoria: "Estética & Serviços",
        tabela_conectada: process.env.TABELA_ALVO || "agenda_barbeiros",
        parametro_ambiente: process.env.UNIDADE_BARBER || "VINTAGE_CLUB_27",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #27] Barbearia Clássica & Clube VIP rodando em http://localhost:${PORT}/api/barbearia/status`);
});