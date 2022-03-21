const axios = require('axios');
const api_key = require('../data/keys.json').api_key;

const api = axios.create({
    baseURL: 'https://api.pagar.me/1'
});

module.exports = {
    createRecipient: async (name) => {
        try {
            const response = await api.post('/recipients', {
                api_key: api_key,
                bank_account: {
                    bank_code: '341',
                    agencia: '0932',
                    agencia_dv: '5',
                    conta: '58054',
                    type: 'conta_corrente',
                    conta_dv: '1',
                    document_number: '7518184484',
                    legal_name: name
                },
                register_information: {
                    type: 'corporation',
                    document_number: '712312321',
                    company_name: name,
                    email: 'pedgree@email.com',
                    site_url: 'http://www.site.com',
                    phone_numbers: [
                        {
                            ddd: '11',
                            number: '845345',
                            type: 'mobile'    
                        }                        
                    ]
                }
            });

            return { erro: false, data: response.data };
        }
        catch (err)
        {
            return { error: true, message: err.message };
        }
    },
    createSplitTransaction: async (data) => {
        try {
            const response = await api.post('/transactions', {
                api_key,
                ...data
            });

            return { error: false, message: response.data }
        }
        catch (err)
        {
            return { error: true, message: err.message };
        }
    }

}