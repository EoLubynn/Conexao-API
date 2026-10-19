// 1. Carrega as variáveis do arquivo .env para a memória (process.env)
require('dotenv').config();

// 2. Importa a função fábrica 'createClient' do SDK oficial do Supabase
const { createClient } = require('@supabase/supabase-js');

// 3. Resgata as credenciais de dentro do Cofre Digital (.env)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// 4. Validação de Segurança: impede que o 