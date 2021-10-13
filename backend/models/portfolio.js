const mongoose = require('mongoose');
const slug = require('slug');  //ao invés de deixar a chave criada pelo mongo vou personalizar a minha para ficar mais interessante
const Schema = mongoose.Schema;
const portfolioSchema = new Schema({
    titulo:{
        type: String,
        required: true,
        unique: true      
    }, 
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function(){return slug(this.titulo)}
    },
    descricao: {
        type: String,
        required: true        
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }    
});

module.exports = mongoose.model('portfolio', portfolioSchema);
