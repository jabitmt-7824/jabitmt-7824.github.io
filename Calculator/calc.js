var display=document.getElementById("display");
var buttons=document.getElementsByClassName("button");

var op1=null,op2=null,operator=null;

for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('mousedown', function(){
		this.style.backgroundColor="#fff688";
	});
}

for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('mouseup', function(){
		this.style.backgroundColor="white";
	});
}

var main_operator=document.getElementsByClassName("main-operator");
for(var i=0;i<main_operator.length;i++){
	main_operator[i].addEventListener('mouseup', function(){
		this.style.backgroundColor="#ff8888";
	});
}

var negation=0;
for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click', function(){
		var value=this.getAttribute("data-value");

		if(value=='+'){
			op1=parseFloat(display.textContent);
			operator='+';
			display.innerText="";
			negation=0;
		}

		else if(value=='-'){
			op1=parseFloat(display.textContent);
			operator='-';
			display.innerText="";
			negation=0;
		}

		else if(value=='*'){
			op1=parseFloat(display.textContent);
			operator='*';
			display.innerText="";
			negation=0;
		}

		else if(value=='/'){
			op1=parseFloat(display.textContent);
			operator='/';
			display.innerText="";
			negation=0;
		}

		else if(value=='%'){
			op1=parseFloat(display.textContent);
			operator='%';
			display.innerText="";
		}

		else if(value== '=')
		{
			op2=parseFloat(display.textContent);
			var result=eval(op1+" "+operator+" "+op2);
			display.innerText=result;
			op1=null;
			op2=null;
			operator=null;
			negation=0;
		}

		else if (value== "+/-") {
			if(negation==0){
				display.innerText="-"+display.textContent;
				negation=1;
			}
			else if(negation==1) {
				var v=display.textContent;
				var v=v.replace('-','+');
				display.innerText=v;
				negation=0;
			}
			else {
				var v=display.textContent;
				var v=v.replace('+','-');
				display.innerText=v;
				negation=1;
			}
		}

		else if (value=="AC") {
			display.innerText="";
		    op1=null;
		    op2=null;
		    operator=null;
		    negation=0;
		}

		else{
		    display.innerText+=value;

		}
	});
}
