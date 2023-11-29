let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btnMario = document.getElementById("mario");
let btnAlbert = document.getElementById("albert");

btnMario.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Марио!");
		item = "mario";
		tg.MainButton.show();
	}
});

btnAlbert.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали Альберта Энштейна!");
		item = "albert";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    console.log("Main button clicked!");
    tg.sendData(item);
});

