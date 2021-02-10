var flag = false;
function cl(){
	if(!flag){
		$("#img").html("<img src = 'kot.jpg'></img>");
		flag = true;
	}
	else{
		$("#img").html("");
		flag = false;
	}
	
}