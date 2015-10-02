var products = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

function ProductLineItem(product) {
	//implement
}

ProductLineItem.prototype = {
	//implement
};

var basket = (function(){
	
	var content = [0, 0];
	
	return {
		addProduct : function(productID){
			if (products[productID].inventory===0){
			    console.error("no more" + products[productID].name);
			} else {
			    content[productID]++;
			    products[productID].inventory--;
			}
		},
		removeProduct : function(productID){
			if (content[productID] > 0) {
			    contetn[productID]--;
			    products[productID].inventory++;
			}
		},
		updateProductQuantity : function(productID, quantity) {
			if (products[productID].inventory+content[productID]>=quantity){
			    products[productID].inventory-=(quantity-content[productID]);
			    content[productID]+=(quantity-content[productID]);
			} else {
			    console.error("there not enough pieces of" + products[productID].name);
			}
		},
		getTotalPrice : function(){
		    var price = 0;
			for (i=0; i<content.length; i++){
			    price+=content[i]*products[i].price;
			}
			console.log("total price in the bascet is "+price);
		}
	}
})();

basket.addProduct(0);
basket.getTotalPrice();
basket.updateProductQuantity(0, 5);
basket.getTotalPrice();
basket.updateProductQuantity(1, 2);
basket.getTotalPrice();

