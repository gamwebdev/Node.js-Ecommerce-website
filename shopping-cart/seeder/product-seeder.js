const mongoose 	  = require('mongoose');
mongoose.Promise  = global.Promise;

mongoose.connect('mongodb://localhost/shopping', { useMongoClient: true });
mongoose.connection.once('open', function(){
    console.log('connection has been made successfully');
  }).on('error', function(error){
    console.log('connection has been terminated');
});

var Product = require(../models/product.js);

var products = [

	new Product({
		imagePath	: 'http://images.mmosite.com/my/upload/7b/ce/5f20ab3c5a322b3ae7a8e2b46f858e57/theme/df8fd8c1eb1ad4db2f17a6a6ad63105c887.jpg',
		title		: 'Hallo!',
		description	: 'One of the greatest games One of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest games ',
		price		: 10
	}),

	new Product({
		imagePath	: 'http://images.mmosite.com/my/upload/7b/ce/5f20ab3c5a322b3ae7a8e2b46f858e57/theme/df8fd8c1eb1ad4db2f17a6a6ad63105c887.jpg',
		title		: 'Hallo!',
		description	: 'One of the greatest games One of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest games ',
		price		: 10
	}),

	new Product({
		imagePath	: 'http://images.mmosite.com/my/upload/7b/ce/5f20ab3c5a322b3ae7a8e2b46f858e57/theme/df8fd8c1eb1ad4db2f17a6a6ad63105c887.jpg',
		title		: 'Hallo!',
		description	: 'One of the greatest games One of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest games ',
		price		: 10
	}),

	new Product({
		imagePath	: 'http://images.mmosite.com/my/upload/7b/ce/5f20ab3c5a322b3ae7a8e2b46f858e57/theme/df8fd8c1eb1ad4db2f17a6a6ad63105c887.jpg',
		title		: 'Hallo!' ,
		description	: 'One of the greatest games One of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest games ',
		price		: 10
	}),

	new Product({
		imagePath	: 'http://images.mmosite.com/my/upload/7b/ce/5f20ab3c5a322b3ae7a8e2b46f858e57/theme/df8fd8c1eb1ad4db2f17a6a6ad63105c887.jpg',
		title		: 'Hallo!' ,
		description	: 'One of the greatest games One of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest games ',
		price		: 10
	}),

	new Product({
		imagePath	: 'http://images.mmosite.com/my/upload/7b/ce/5f20ab3c5a322b3ae7a8e2b46f858e57/theme/df8fd8c1eb1ad4db2f17a6a6ad63105c887.jpg',
		title		: 'Hallo!' ,
		description	: 'One of the greatest games One of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest gamesOne of the greatest games ',
		price		: 10
	}),
];

var done = 0;
for(var i=0; i<products.length; i++){
	products[i].save(function(){
		done++;
		if(done == products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}