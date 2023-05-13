 

let x = []; // масив х
let mas = [];  //масив у

let gameBody = document.getElementById("gameBody");
let td = document.querySelectorAll("#tdGame");
let xWin = document.getElementById("xWin");
let yWin = document.getElementById("yWin");
let youName = document.getElementById("youName");


let youNameCheck = prompt ("Як вас звати?")
youName.innerHTML = youNameCheck;


// наш хід
gameBody.onclick = function(event) {

  let td = event.target.closest('td');
  if (td.firstChild ) return;
  td.innerHTML = 'x';
  
  x.push(td.dataset.index);
  // console.log(x) 
  ones();
  checkMap();
};



// хід компютера
function ones() {
  let numb = Math.floor(Math.random( ) * td.length)
      // console.log(numb);
  
    if(td[numb].textContent == "") { td[numb].innerHTML = '0';
    mas.push(numb);
    // console.log(mas); 
  }
    else if(mas.length==4) return;
    else  ones();
}

// 0,1,2   3,4,5   6,7,8  0,3,6   1,4,7   2,5,8  0,4,8   2,4,6







// визначаємо хто виграв
function checkMap() {
	let block = document.getElementsByTagName("td");
	let items = [];
	for (let i = 0; i < block.length; i++) { 
		items.push(block[i].innerHTML);
}
	if ( items[0] == "x" && items[1] == 'x' && items[2] == 'x' ||
		 items[3] == "x" && items[4] == 'x' && items[5] == 'x' ||
		 items[6] == "x" && items[7] == 'x' && items[8] == 'x' ||
		 items[0] == "x" && items[3] == 'x' && items[6] == 'x' ||
		 items[1] == "x" && items[4] == 'x' && items[7] == 'x' ||
		 items[2] == "x" && items[5] == 'x' && items[8] == 'x' ||
		 items[0] == "x" && items[4] == 'x' && items[8] == 'x' ||
		 items[6] == "x" && items[4] == 'x' && items[2] == 'x' ) {
      
      let pl = youNameCheck + " - виграв!!!";
      let setWin =pl;
     setTimeout(win, 500, setWin) ;
     winAnimation ();
     whyWin(xWin);

    }


 else	if (items[0] == "0" && items[1] == '0' && items[2] == '0' ||
		 items[3] == "0" && items[4] == '0' && items[5] == '0' ||
		 items[6] == "0" && items[7] == '0' && items[8] == '0' ||
		 items[0] == "0" && items[3] == '0' && items[6] == '0' ||
		 items[1] == "0" && items[4] == '0' && items[7] == '0' ||
		 items[2] == "0" && items[5] == '0' && items[8] == '0' ||
		 items[0] == "0" && items[4] == '0' && items[8] == '0' ||
		 items[6] == "0" && items[4] == '0' && items[2] == '0' ) {
       
      let pl = "Комп'ютер - виграв!!!";
      let setWin =pl;
     setTimeout(win, 500, setWin);
     winAnimation ();
     whyWin(yWin)
    }

}
// виграш та чистка поля
function win (pl) {
  for (let i = 0; i < td.length; i++) { 
		td[i].innerHTML= '';   
}
  gameBody.style.background = 'white';
  alert(pl)
}
// заміна фону при виграші
function winAnimation () {
  gameBody.style.background = 'green';
}
//функція для підрахунку результату
function whyWin(xy) {
 let newResult = xy.innerText;
 
  xy.innerHTML = Number(newResult) + 1;

}















 

