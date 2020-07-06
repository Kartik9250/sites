// contains functions for checking even no. and factorial, changing kebab to snake  

function isEven(x) {
	
	if ( x % 2 == 0 ) {
		return "True";
	
	}
	else {
		return "False";
	}

}

function factorial(y) {
	
	for ( var j = 1; y > 0; y = y-1){
		j = j*y;  
	}
	return j; 
}

function kebabToSnake(z) {

	var str = z.replace(/-/g, "_")
	return str
	  
}