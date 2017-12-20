import $ from 'jquery';

class Modal{
  constructor(){
    this.lastFocus=document.activeElement;
    this.openModalBtn=$('.open-modal');
    this.modal=$('.modal');
    this.closeModalBtn=$('.modal__close');
    this.events();
  }

  events(){
    //openModal
    this.openModalBtn.click(this.openModal.bind(this));
    //closeModal
    this.closeModalBtn.click(this.closeModal.bind(this));
    //any keypress
    $(document).keyup(this.keyPressHandler.bind(this));

  }

  keyPressHandler(e){
    if (e.keyCode=="27"){this.closeModal();}

  }

  openModal(){
    this.modal.addClass('modal--visible');
    return false;

  }

  closeModal(){

    this.modal.removeClass('modal--visible');
    this.lastFocus.focus();

  }

}
export default Modal;
