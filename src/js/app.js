/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
/* Variables Globales*/
Pebble.addEventListener('ready', function(event) {
console.log('ready');
});
var UI = require('ui');
var cat0 = '';
var cat1 = '';
var cat2 = '';
var cat3 = '';
var myLat= '';
var myLong = '';
var UI = require('ui');
var Vector2 = require('vector2');
var splash = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'IMA_SPLASH01'
});
/*fonction*/
function sleep(milliseconds) {
console.log("i'm spleeping in the rain...");
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 10000, 
  timeout: 10000
};
// Get the location
function locationSuccess(pos) {
    var myLat = pos.coords.latitude;
    var myLong = pos.coords.longitude;
    console.log( myLat + ' and ' + myLong );
    //modify the text within infotext to show GPS data
}   
function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
    //modify the text within infotext to alert user of error
}
function doMenu(m,sectitle,dd) {
    console.log("dd:"+ dd +"&TypeOf:" + typeof(dd));
    if (typeof(dd) === 'undefined') {
        console.log('leave function.');
        return 0;
    } 
  var items = [];
  for(var i = 0; i < dd.length; i++) {
    //console.log('items :' + dd[i]);
    items.push({
      title:dd[i]
    });
  }
m = new UI.Menu({
      sections: [{
        title: sectitle,
        items: items
      }]});
return m;
}
Date.prototype.ds = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy + "" + (mm[1]?mm:"0"+mm[0]) + "" + (dd[1]?dd:"0"+dd[0]); // padding
  };
Date.prototype.hs = function() {
    var hh = this.getHours();
    var mm = this.getMinutes();
    var ss = this.getSeconds();
    return ("0" + hh ).slice(-2) + ("0" + mm).slice(-2) + ("0" + ss).slice(-2);
};

function doEvent(){
    console.log('Create Event');
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError,locationOptions);
    console.log(myLat + myLong);
    var evDate = new Date();
    var date = evDate.ds()+"T"+evDate.hs();
    var uid = "TaskMeEvent"+date;
    console.log(cat0+":"+cat1+":"+cat2+":"+cat3+"@"+date);
    var url = "https://webcloud.zaclys.com/remote.php/caldav/calendars/13848/activitylog";
    var method = 'put';
    // le data de l'event;
    var data= [];
    data.push('BEGIN:VCALENDAR');
    data.push('VERSION:2.0');
    data.push('PRODID:ownCloud Calendar');
    data.push('BEGIN:VEVENT');
    data.push('CREATED:'+date);
    data.push('UID:'+uid);
    data.push('DTSTAMP:'+date);
    data.push('ORGANIZER;CN=Gwena:MAILTO:gwena56@gmail.com');
    data.push('DTSTART;TZID=Europe/Paris:'+date);
    data.push('DTEND;TZID=Europe/Paris:'+evDate.ds()+"T"+evDate.hs());
    data.push('SUMMARY:'+"["+cat0+"] "+cat1+" "+cat2+" "+cat3);
    data.push('END:VEVENT');
    data.push('END:VCALENDAR');
    // la requête http
    var request = new XMLHttpRequest();
    // fonctions callback
    request.onload = function() {
        console.log("event "+uid+ "created.");
    }; 
    request.onerror =function() {
    var cardEr = new UI.Card({
      title:'ActivityLog',
      subtitle:'Request Error'
        });
    cardEr.show();
    return false;
    };
    // Send the request
    request.open(method, url+"/"+uid+".ics");
    request.setRequestHeader("Authorization","Basic MTM4NDg6Z3dlbmFuYXhpemhlNA==");
    //request.setRequestHeader("text/calendar", "text/plain;charset=UTF-8");
    request.send(data.join("\n"));
    return true;
    
} 
function cfait() {
    var card1 = new UI.Card({
    title: 'ActivityLog',
    body:'Event Created!!',
    banner:splash
});
card1.show();
}
//DEBUT DU PROG - 4 niveaux de menu pour l'instant
// **** Définition de l'arborescence de menu ***
function MainLoop() {
try {
var m = {};
m.lv = ['ASSO','UCO','Trajets','Autres'];
// 1er Menu
m.lv[m.lv[0]] = ['ASYN','Codev','Fablab'];
m.lv[m.lv[0]][m.lv[m.lv[0]][0]] = ['CA','Réunion','Secrétariat'];
m.lv[m.lv[0]][m.lv[m.lv[0]][1]] = ['Réunion','CA','Bureau'];
m.lv[m.lv[0]][m.lv[m.lv[0]][2]] = ['Animation','Réunion','CA','Bureau'];
// 2eme Menu
m.lv[m.lv[1]]=['BU','Vie Etud','Interv.','Autres'];
m.lv[m.lv[1]][m.lv[m.lv[1]][0]] = ['Rangement','Dev Info','Revue','Abonnements'];
m.lv[m.lv[1]][m.lv[m.lv[1]][1]] = ['Café/Pot','Course','Réunion','ADE'];
//
m.lv[m.lv[1]][m.lv[m.lv[1]][2]] = ['Salles(RDC)','Salles(1er)','Salles(2ème)','Salles(3ème)','Dépannage','Dérangement','Installation'];
m.lv[m.lv[1]][m.lv[m.lv[1]][2]][m.lv[m.lv[1]][m.lv[m.lv[1]][2]][0]] = ['Pt_Amphi','S3','S4','S7','S8','Gd_Amphi','A1','A2'];
m.lv[m.lv[1]][m.lv[m.lv[1]][2]][m.lv[m.lv[1]][m.lv[m.lv[1]][2]][1]] = ['101','102','103','104','105','106']
m.lv[m.lv[1]][m.lv[m.lv[1]][2]][m.lv[m.lv[1]][m.lv[m.lv[1]][2]][2]] = ['201','202','203','204','205','206','210','211','212','213','214','215']
m.lv[m.lv[1]][m.lv[m.lv[1]][2]][m.lv[m.lv[1]][m.lv[m.lv[1]][2]][3]] = ['301','302','303','304']
m.lv[m.lv[1]][m.lv[m.lv[1]][2]][m.lv[m.lv[1]][m.lv[m.lv[1]][2]][4]] = ['Etudiant','Secrétariat','Profs','Vacataires'];
m.lv[m.lv[1]][m.lv[m.lv[1]][2]][m.lv[m.lv[1]][m.lv[m.lv[1]][2]][6]] = ['Video Pro','Ordi','Visio','Autre'];
//
m.lv[m.lv[1]][m.lv[m.lv[1]][3]] = ['horaires','Réu Ext'];
m.lv[m.lv[1]][m.lv[m.lv[1]][3]][m.lv[m.lv[1]][m.lv[m.lv[1]][3]][0]] = ['Arrivée','Départ'];
// 3eme Menu
m.lv[m.lv[2]]=['UCO','Aller','Retour'];
m.lv[m.lv[2]][m.lv[m.lv[2]][0]] = ['Arrivée','Départ'];
m.lv[m.lv[2]][m.lv[m.lv[2]][1]] = ['Début','Fin'];
m.lv[m.lv[2]][m.lv[m.lv[2]][2]] = ['Début','Fin'];
// 4eme Menu
m.lv[m.lv[3]]=['Perso','...'];
m.lv[m.lv[3]][m.lv[m.lv[3]][0]] = ['Dev','...'];
m.lv[m.lv[3]][m.lv[m.lv[3]][0]][m.lv[m.lv[3]][m.lv[m.lv[3]][0]][0]] = ['Pebble','Raspi','Onion','Python'];
m.lv[m.lv[3]][m.lv[m.lv[3]][1]] = ['...','...'];
var _menu = new UI.Menu();
_menu = doMenu(_menu,'>Catégories<',m.lv);
_menu.show();
_menu.on('select', function(e) {
    cat0 = e.item.title;
    console.log('Menu0:'+cat0);
    var _menu =  new UI.Menu();
    _menu = doMenu(_menu,'>'+cat0+'<',m.lv[cat0]);
    if (_menu === 0){
        //fin de menu rencontré      
        if (doEvent()) {
           cfait();
        return; 
        } else {
            return;
        }
        
        } else {
    _menu.show();
        }
    _menu.on('select', function(e) {
        cat1 = e.item.title;
        console.log('Menu1:'+cat1);
        var _menu = new UI.Menu();
        _menu = doMenu(_menu,'>'+cat1+'<',m.lv[cat0][cat1]);
        if (_menu === 0){
            //fin de menu rencontré      
            if (doEvent()) {
               cfait();
            return; 
            } else {
            return;
            }
        } else {
        _menu.show();
        }
        _menu.on('select', function(e) {
            cat2 = e.item.title;
            console.log('Menu2:'+cat2);
            _menu = doMenu(_menu,'>'+cat1+'<',m.lv[cat0][cat1][cat2]);
            if (_menu === 0){
                //fin de menu rencontré      
                if (doEvent()) {
                    cfait();
                    return; 
                } else {
                    return;
                    }
                } else {
                _menu.show();
                }
                _menu.on('select',function(e) {
                    cat3 = e.item.title;
                    console.log(e.item.title);
                    console.log('Menu3:'+cat3);
                    _menu = doMenu(_menu,'>'+cat1+'<',m.lv[cat0][cat1][cat2][cat3]);
                    if (_menu === 0){
                    //fin de menu rencontré      
                    if (doEvent()) {
                        cfait();
                        return; 
                    } else {
                        return;
                        }
                    } else {
                    _menu.show();
                    }
                });//Menu3
            });//Menu2()
        });//Menu1
});//Menu0
} catch (er) {
    console.log(er.number);
    return;
}
}
var card = new UI.Card({
    title: 'ActivityLog',
    body:'Log your Live!!'
});
card.show();
setTimeout(function() {
  // Display the mainScreen
  MainLoop();
  // Hide the splashScreen to avoid showing it when the user press Back.
  card.hide();
}, 2500);
//MainLoop();