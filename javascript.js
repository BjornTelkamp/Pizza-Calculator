var klein = prompt("Aantal kleine Pizza's \u20ac3,75 Per Stuk"); // klein is denfined als kleine pizza's
var normaal = prompt("Aantal normale Pizza's \u20ac5,25 Per Stuk"); // normaal is denfined als kleine pizza's
var groot = prompt("Aantal grote Pizza's \u20ac7,50 Per Stuk"); // groot is denfined als kleine pizza's
var prijsklein = klein * 3.75;
var prijsnormaal = normaal * 5.25;
var prijsgroot = groot * 7.50;
var prijstotaal = prijsklein + prijsnormaal + prijsgroot;

document.write("Prijs totaal aantal kleine Pizza's: \u20ac" + 3.75 * klein + '<br>');
document.write("Prijs totaal aantal normale Pizza's: \u20ac" + 5.25 * normaal + '<br>');
document.write("Prijs totaal aantal grote Pizza's: \u20ac" + 7.50 * groot + '<br>');
document.write('<br>Aantal klein: '+ klein +'<br>' + 'Aantal normaal: ' + normaal + '<br>'+'Aantal groot: ' +groot);
document.write('<br><br>Totaal: \u20ac' + prijstotaal);

