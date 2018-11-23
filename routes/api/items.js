const express = require( 'express' );
const router = express.Router();


const Item = require('../../models/Item');

router.get('/',function(req , res){
	Item.find().sort({date : -1}).then(function(items){
		res.json(items);
	})

});

router.post('/',function(req , res){
	const newItem = new Item({
		name : req.body.name
	});
	newItem.save().then(function(items){
		res.json(items);
	})

});

router.delete('/:id',function(req , res){
	Item.findById(req.params.id)
	.then(function(item){
		item.remove().then(function(){
			res.json({sucess:true})
		})
	})
	.catch(function(){
		res.status(404);
	});
	
});

module.exports = router;
