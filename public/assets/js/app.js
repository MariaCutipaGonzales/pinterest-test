(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/** section board js **/
const token = "AeQ7ekzAKmhr7pvDPpa00Xn5XZctFM4mjWCOA41EItrZVaA9_AAAAAA";
const urlBoard = "arabelyuska/web-ui";

const wrapper = $('<div class="wrapper"></div>');
const board = $('<section class="board"></section>');

$.getJSON('https://api.pinterest.com/v1/boards/' + urlBoard +'/pins/?access_token=' + token +'&fields=link%2Cnote%2Cimage%2Cboard', function (response){
  $.each(response.data, function(i, value) {
    $(".board").append(addImages(value));
  });
});

function addImages(data) {
  const boardItem = $('<div class="board-item"></div>');
  const boardItemImage = $('<img src =' + data.image.original.url +' class="board-item__image">');
  const boardItemTitle = $('<p class="board-item__title">' + data.note + '</p>');

  boardItem.append(boardItemImage);
  boardItem.append(boardItemTitle);

  boardItem.on('click', (e)=>{
      showModal(data.image.original.url,data.note);
  });
  
  return boardItem;
}

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
  const pin         = $('<img>',{src:'assets/images/pinterest-logo.png',style:'width:30px; height:30px',class:'pin'});
  const pin2        = $('<img>',{src:'assets/images/icon-arrow.png',style:'width:30px; height:30px',class:'pin2'});
  const pin3        = $('<img>',{src:'assets/images/icon-profile.png',style:'width:30px; height:30px',class:'pin3'});
  const pin4        = $('<img>',{src:'assets/images/message.png',style:'width:30px; height:30px',class:'pin4'})
  const inputPin    = $('<input>',{type:'text',placeholder:'Buscar',class:''});
  const hr          = $('<hr>',{class:'hr'});
  const divIcons    = $('<div>',{class:'nav__icons'});
  const icon1       = $('<img>',{src:'assets/images/pencil.png'});
  const icon2       = $('<img>',{src:'assets/images/arrow.png'});
  const icon3       = $('<img>',{src:'assets/images/more.png'});
  const divText     = $('<div>',{class:'nav__text'});
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
const Modal = () => {
    const contenedor =  $('<div id="modal" class="modal flex flex__justify-center"></div>');
    const contTotal = $('<div class="modal__contentModal "></div>');
    const contData =  $('<div class="modal__pin"></div>');
    
    const note =  $('<div"><h1 id="note" class="modal__header--fonts modal__note"></h1></div>');
    const imagen =  $('<div class="modal__image"><img id="imageModal" src="" class="modal__image--border modal__pin--imagen"/></div>');
    
    const headerModal =  $('<div class="modal__header flex flex__justify-between"></div>');
    const iconShare =  $('<a href="#" class="btn__icons"><i class="fa fa-share-alt" aria-hidden="true"></i></a>');
    const iconCheck =  $('<a href="#" class="btn__icons"><i class="fa fa-check" aria-hidden="true"></i></a>');
    const iconMore =  $('<a href="#" class="btn__icons"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>');
    const save =  $('<button class="btn__guardar modal__header--button"><i class="fa fa-thumb-tack" aria-hidden="true"></i><span class="btn--pad">Guardar</span></button>');
    
    const close =  $('<span id="close" class="modal__close"><i class="fa fa-times" aria-hidden="true"></i></span>'); 
    const iconos =  $('<div class="modal--iconos"></div>');

    iconos.append(iconShare);
    iconos.append(iconCheck);
    iconos.append(iconMore);
    iconos.append(save);

    headerModal.append(iconos);
    
    contData.append(note);
    contData.append(imagen);

    contTotal.append(headerModal);
    contTotal.append(contData);
    
    contenedor.append(close);
    contenedor.append(contTotal);
    
    close.on('click', ()=>{
      contenedor.hide();
      $('body').css('overflow','auto');
    });

            
    return contenedor;
}

wrapper.append(Header());
wrapper.append(board);

$('#root').append(wrapper);
$('#root').append(Modal());

/*MODAL VIEW*/
  const modal = $('#modal');
  /*render(modal);*/
  modal.hide();
  

  $('#modal').hide();

  function showModal(src,data){
      const modal = $('#modal');
      modal.show();
      $('body').css('overflow','hidden');
      $('#imageModal').attr('src', src);
      $('#note').html(data);
  }


},{}]},{},[1])