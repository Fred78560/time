exports.action = function (data) {
try{
var moment = require('moment');moment.locale('fr'); 
	
	var heure = "";
		
		if (data.heure !== undefined) {
			var date = new Date();
			var heure = 'il est ' + date.getHours() + ' heure ';
			if (date.getMinutes() > 0) {
				heure += date.getMinutes();
			}
			//console.log(date.getDay())
		//var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

			//console.log("Nous sommes un "+tab_jour[date.getDay()])
//--- Dimanche
 if((date.getDay() == 0) && (date.getHours() >= 5 && date.getHours() < 12)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 0) && (date.getHours() >= 12 && date.getHours() <=13)) {heure=heure+" je vous propose de profiter de votre après-midi"}
 if((date.getDay() == 0) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 0) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+"|Bonsoir!|bonjoir"}
 if((date.getDay() == 0) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+" Il est l'heure d'aller dormir!"}		
//--- Lundi
 if((date.getDay() == 1) && (date.getHours() >= 5 && date.getHours() < 6)) {heure=heure+" Bonjour! il est tôt"}
 if((date.getDay() == 1) && (date.getHours() >= 6 && date.getHours() < 8)) {heure=heure+" passe une bonne journée"}
 if((date.getDay() == 1) && (date.getHours() >= 9 && date.getHours() < 10)) {heure=heure+" "}
 if((date.getDay() == 1) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 1) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+" Bonsoir!"}
 if((date.getDay() == 1) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+"Il est l'heure d'aller dormir!"}	
//--- Mardi
 if((date.getDay() == 2) && (date.getHours() >= 5 && date.getHours() < 6)) {heure=heure+" Bonjour! il est tôt"}
 if((date.getDay() == 2) && (date.getHours() >= 6 && date.getHours() < 8)) {heure=heure+" passe une bonne journée"}
 if((date.getDay() == 2) && (date.getHours() >= 9 && date.getHours() < 10)) {heure=heure+" "}
 if((date.getDay() == 2) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 2) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+" Bonsoir!"}
 if((date.getDay() == 2) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+"Il est l'heure d'aller dormir!"}	
//--- Mercredi
 if((date.getDay() == 3) && (date.getHours() >= 5 && date.getHours() < 6)) {heure=heure+" Bonjour! il est tôt"}
 if((date.getDay() == 3) && (date.getHours() >= 6 && date.getHours() < 8)) {heure=heure+" passe une bonne journée"}
 if((date.getDay() == 3) && (date.getHours() >= 9 && date.getHours() < 10)) {heure=heure+" "}
 if((date.getDay() == 3) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 3) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+" Bonsoir!"}
 if((date.getDay() == 3) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+"Il est l'heure d'aller dormir!"}	
//--- Jeudi
 if((date.getDay() == 4) && (date.getHours() >= 5 && date.getHours() < 6)) {heure=heure+" Bonjour! il est tôt"}
 if((date.getDay() == 4) && (date.getHours() >= 6 && date.getHours() < 8)) {heure=heure+" passe une bonne journée"}
 if((date.getDay() == 4) && (date.getHours() >= 9 && date.getHours() < 10)) {heure=heure+" "}
 if((date.getDay() == 4) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 4) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+" Bonsoir!"}
 if((date.getDay() == 4) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+"Il est l'heure d'aller dormir!"}	
//--- Vendredi
 if((date.getDay() == 5) && (date.getHours() >= 5 && date.getHours() < 6)) {heure=heure+" Bonjour! il est tôt"}
 if((date.getDay() == 5) && (date.getHours() >= 6 && date.getHours() < 8)) {heure=heure+" passe une bonne journée"}
 if((date.getDay() == 5) && (date.getHours() >= 9 && date.getHours() < 10)) {heure=heure+" "}
 if((date.getDay() == 5) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 5) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+" Bonsoir!"}
 if((date.getDay() == 5) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+"Il est l'heure d'aller dormir!"}	
//--- Samedi
 if((date.getDay() == 6) && (date.getHours() >= 5 && date.getHours() < 6)) {heure=heure+" Bonjour! il est tôt"}
 if((date.getDay() == 6) && (date.getHours() >= 6 && date.getHours() < 8)) {heure=heure+" passe une bonne journée"}
 if((date.getDay() == 6) && (date.getHours() >= 9 && date.getHours() < 10)) {heure=heure+" "}
 if((date.getDay() == 6) && (date.getHours() >= 12 && date.getHours() < 18)) {heure=heure+" Bonjour!"}
 if((date.getDay() == 6) && (date.getHours() >= 18 && date.getHours() <= 23)) {heure=heure+" Bonsoir!"}
 if((date.getDay() == 6) && (date.getHours() >= 0 && date.getHours() < 5)) {heure=heure+"Il est l'heure d'aller dormir!"}	

}

speak(heure);
	
function speak(heure) { 
	var nomduplugin = "time" 
	var valeurduspeak = heure
		JarvisIASpeech(valeurduspeak)
	return 
	} 
console.log(heure)}
catch(err){console.log(err);return }}