import $ from 'jquery';

class MobileMenu{
  constructor(){
    this.siteHdr=$('.site-header');
    this.menuIcon=$('.site-header__menu-icon');
    this.menuContent=$('.site-header__menu-content')
    this.events();
  }
  events(){
    this.menuIcon.click(this.toggleMenu.bind(this));
  }
  toggleMenu(){
    this.menuContent.toggleClass('site-header__menu-content--visible')
    this.siteHdr.toggleClass('site-header--expanded');
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}
export default MobileMenu;
