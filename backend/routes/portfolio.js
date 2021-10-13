const router = require('express').Router();
const Portfolio = require('../models/portfolio');

//listar todos 
router.get('/', async(req,res) => {
    try{
        const portfolio = await Portfolio.find()
    res.json({
        success: true,
        data:portfolio
    })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }    
});

//listar pelo slug - individual
router.get('/:slug', async(req,res)=> {
    try{   
       const portfolio = await Portfolio.findOne({
           slug: req.params.slug
       })
       res.json({
           success: true,
           data: portfolio
       })
    }catch(err){
        res.json({
          success: false,
          message: err
        })
    }    
});

//salvar
router.post('/', async(req,res)=> {
    const portfolio = new Portfolio({
        titulo: req.body.titulo,        
        descricao: req.body.descricao
    });  

    try{
      const savedPortfolio = await portfolio.save()   //espera o mongo salvar primeiro
      res.json({
          success: true,
          data: savedPortfolio
      })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }    
});

//atualizar
router.put('/:slug', async(req,res)=>{
    try{
        const updatedPortfolio = await Portfolio.updateOne({
            slug: req.params.slug
        },
        {
            titulo: req.body.titulo,
            descricao: req.body.descricao
        })

        res.json({
            success: true,
            updated: updatedPortfolio.nModified
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})

//deletar
router.delete('/:slug', async(req,res)=> {
    try{
        const deletedPortfolio = await Portfolio.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: deletedPortfolio
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
   
})


module.exports = router;