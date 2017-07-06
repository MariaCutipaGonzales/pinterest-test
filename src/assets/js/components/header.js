'use strict';

const Header = () => {
  const header      = $('<header></header>');
  const nav         = $('<nav>',{class:'nav'});
  const ulPin       = $('<ul>',{class:'ulPin'});
  const liPin1      = $('<li>',{class:'liPin1'});
  const liPin2      = $('<li>',{class:'liPin2'});
  const liPin3      = $('<li>',{class:'liPin3'});
  const liPin4      = $('<li>',{class:'liPin4'});
  const liPin5      = $('<li>',{class:'liPin5'});
  const aPin1       = $('<a>',{href:'#',class:'aPin1'});
  const aPin2       = $('<a>',{href:'#',class:'aPin2'});
  const aPin3       = $('<a>',{href:'#',class:'aPin3'});
  const aPin4       = $('<a>',{href:'#',class:'aPin4'})
  const pin         = $('<img>',{src:'images/pinterest-logo.png',style:'width:30px; height:30px',class:'pin'});
  const pin2        = $('<img>',{src:'images/icon-arrow.png',style:'width:30px; height:30px',class:'pin2'});
  const pin3        = $('<img>',{src:'images/icon-profile.png',style:'width:30px; height:30px',class:'pin3'});
  const pin4        = $('<img>',{src:'images/message.png',style:'width:30px; height:30px',class:'pin4'})
  const inputPin    = $('<input>',{type:'text',placeholder:'Buscar',class:''});
  const hr          = $('<hr>',{class:'hr'});
  const divIcons    = $('<div>',{class:'div-icons'});
  const icon1       = $('<img>',{src:'images/pencil.png'});
  const icon2       = $('<img>',{src:'images/arrow.png'});
  const icon3       = $('<img>',{src:'images/more.png'});
  const divText     = $('<div>',{class:'div-text'});
  const pPines      = $('<p><strong>27</strong> Pines</p>');
  const pFoll       = $('<p><strong>74</strong> Seguidores</p>');
  const pWeb        = $('<p>',{text:'Web UI',class:'p-1'});


   ulPin.append(liPin1);
   ulPin.append(liPin2);
   ulPin.append(liPin3);
   ulPin.append(liPin4);
   ulPin.append(liPin5);
   liPin1.append(aPin1);
   liPin2.append(inputPin);
   liPin3.append(aPin2);
   liPin4.append(aPin3);
   liPin5.append(aPin4);
   aPin1.append(pin);
   aPin2.append(pin2);
   aPin3.append(pin3);
   aPin4.append(pin4);
   divIcons.append(icon1);
   divIcons.append(icon2);
   divIcons.append(icon3);
   divText.append(pWeb);
   divText.append(pPines);
   divText.append(pFoll);
   nav.append(ulPin);
   nav.append(hr);
   nav.append(divIcons);
   nav.append(divText);
   header.append(nav);
   header.append(divText);

 return header;
}
