const PetShop = require('../models/petshop.model');
const Product = require('../models/product.model');
const petshops = require('./petfood.json');
const createRecipients = require('../services/pagarme').createRecipient;


// dabase

require('../database');

const addPetShopsAndProducts = async () => {
    try {

        for (let petshop of petshops) {

            const recipient = await createRecipients(petshop.nome);
            if (!recipient.error) {
                const newPetshop = await new PetShop({...petshop, recipient_id: recipient.data.id  }).save();
                await Product.insertMany(
                        petshop.produtos.map(p => ({...p, petshop_id: newPetshop._id }))
                );
            } else {
                console.log(recipient.message);
            }
        }

        console.log('Final da Migração')

    }
    catch(err) {
        console.log('Ocorre um erro na migração: ' + err.message);
    }
}

addPetShopsAndProducts();

