/*
	define clicks on calculator button
*/

window.onload = function (button) {

	var tr = document.getElementsByClassName('tr'),
		plus = document.getElementById('plus'),
		minus = document.getElementById('minus'),
		multiply = document.getElementById('multiply'),
		divide = document.getElementById('divide'),
		power = document.getElementById('power'),
		reset = document.getElementById('fresh'),
		answr = document.getElementById('answr');

	for(var i = 0; i < tr.length; i++) {
		tr[i].addEventListener('click', calculatorBrains, false);
	}

	plus.addEventListener('click', calculatorBrains, false);
	minus.addEventListener('click', calculatorBrains, false);
	multiply.addEventListener('click', calculatorBrains, false);
	divide.addEventListener('click', calculatorBrains, false);
	power.addEventListener('click', calculatorBrains, false);
	reset.addEventListener('click', calculatorBrains, false);
	answr.addEventListener('click', calculatorBrains, false);
};

/*
	define required variables for calculatorBrains()
	a - first variable
	b - second variable
	cur - current mathematical operator
	currnetElement - current entered symbol
	input - value in "sreen"
*/

var a = '',
	b = '',
	cur = '',
	cPower = false;
	

/*
	define calculatorBrains()
*/

function calculatorBrains (button) {

	/*
		define input and current entered symbol of cliked button
	*/

	input = document.getElementById('i');
	curElement = button.target;
	console.log(curElement.firstChild.nodeValue);

	/*
		cheсk entered simbol
	*/

	if(curElement.firstChild.nodeValue === 'ON/OFF'){
		if(cPower){
			cPower = false;
			console.log('calculator is OFF');
			input.value = 'Run, nigga!!! Run!!!';
			setTimeout(function (){
				input.value = '';
				}, 1500);
		}else{
			cPower = true;
			console.log('calculator is ON.');
			input.value = 'Do math, nigga!!!';
			setTimeout(function (){
				input.value = '';
				}, 1500);
		}
	}else{
		if(cPower){
			if(/^\d+$/.test(curElement.firstChild.nodeValue)){
				input.value += curElement.firstChild.nodeValue;
				if(cur === ''){
					a = input.value;
				}
				if(cur !== '' && a !== ''){
					b += curElement.firstChild.nodeValue;
				}
			}else if(a !== '' && curElement.firstChild.nodeValue == '+'){
				console.log(cur);
				if(b !== ''){
					switch(cur){
						case 'plus':
							input.value = '';
							input.value += 1*a + 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'minus':
							input.value = '';
							input.value += 1*a - 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'multiply':
							input.value = '';
							input.value += (1*a) * (1*b);
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'divide':
							if(1*b !== 0){
								input.value = '';
								input.value += (1*a) / (1*b);
								a = input.value;
								b = '';
								input.value += curElement.firstChild.nodeValue;
							}else{
								input.value = '';
								a = '';
								b = '';
								confirm('illegal dividing by 0!!!');
							}
							break;
					}
				}else{
					input.value += curElement.firstChild.nodeValue;
				}
				if(input.value !== '')
					cur = 'plus';
				else
					cur='';
			}else if(a !== '' && curElement.firstChild.nodeValue == '-'){
				console.log(cur);
				if(b !== ''){
					switch(cur){
						case 'plus':
							input.value = '';
							input.value += 1*a + 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'minus':
							input.value = '';
							input.value += 1*a - 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'multiply':
							input.value = '';
							input.value += (1*a) * (1*b);
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'divide':
							if(1*b !== 0){
								input.value = '';
								input.value += (1*a) / (1*b);
								a = input.value;
								b = '';
								input.value += curElement.firstChild.nodeValue;
							}else{
								input.value = '';
								a = '';
								b = '';
								confirm('illegal dividing by 0!!!');
							}
							break;
					}
				}else{
					input.value += curElement.firstChild.nodeValue;
				}
				if(input.value !== '')
					cur = 'minus';
				else
					cur='';
			}else if(curElement.firstChild.nodeValue == '*'){
				console.log(cur);
				if(b !== ''){
					switch(cur){
						case 'plus':
							input.value = '';
							input.value += 1*a + 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'minus':
							input.value = '';
							input.value += 1*a - 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'multiply':
							input.value = '';
							input.value += (1*a) * (1*b);
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'divide':
							if(1*b !== 0){
								input.value = '';
								input.value += (1*a) / (1*b);
								a = input.value;
								b = '';
								input.value += curElement.firstChild.nodeValue;
							}else{
								input.value = '';
								a = '';
								b = '';
								confirm('illegal dividing by 0!!!');
							}
							break;
					}
				}else
					input.value += curElement.firstChild.nodeValue;
				if(input.value !== '')
					cur = 'multiply';
				else
					cur='';
			}else if(curElement.firstChild.nodeValue == '/'){
				console.log(cur);
				if(b !==''){
					switch(cur){
						case 'plus':
							input.value = '';
							input.value += 1*a + 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'minus':
							input.value = '';
							input.value += 1*a - 1*b;
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'multiply':
							input.value = '';
							input.value += (1*a) * (1*b);
							a = input.value;
							b = '';
							input.value += curElement.firstChild.nodeValue;
							break;
						case 'divide':
							if(1*b !== 0){
								input.value = '';
								input.value += (1*a) / (1*b);
								a = input.value;
								b = '';
								input.value += curElement.firstChild.nodeValue;
							}else{
								input.value = '';
								a = '';
								b = '';
								confirm('illegal dividing by 0!!!');
							}
							break;
					}
				}
				else
					input.value += curElement.firstChild.nodeValue;
				if(input.value !== '')
					cur = 'divide';
				else
					cur='';
			}else if(curElement.firstChild.nodeValue == '='){
				console.log(cur);
				switch(cur){
					case 'plus':
						input.value = '';
						input.value += 1*a + 1*b;
						a = input.value;
						b = '';
						cur = '';
						break;
					case 'minus':
						input.value = '';
						input.value += 1*a - 1*b;
						a = input.value;
						b = '';
						cur = '';
						break;
					case 'multiply':
						input.value = '';
						input.value += (1*a) * (1*b);
						a = input.value;
						b = '';
						cur = '';
						break;
					case 'divide':
						if(1*b !== 0){
							input.value = '';
							input.value += (1*a) / (1*b);
							a = input.value;
							cur = '';
							b = '';
						}else{
							cur = '';
							input.value = '';
							a = '';
							b = '';
							cur = '';
							confirm('illegal dividing by 0!!!');
						}
						break;
				}
			}else if(curElement.firstChild.nodeValue == 'reset'){
				input.value = '';
				a = '';
				b = '';
				cur = '';
			}
			console.log(a);
			console.log(b);
			console.log(cur);
		}
	}
}