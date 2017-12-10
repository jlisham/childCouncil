import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll{
  constructor(els, offset){
    this.itemsToReveal=els;
    this.osPct=offset;
    this.hideInitially();
    this.createWaypoints();
  }
  hideInitially(){
    this.itemsToReveal.addClass('reveal-item');
  }
  createWaypoints(){
    var that=this;
    this.itemsToReveal.each(function(){
      var curr=this;
      new Waypoint({
        element: curr,
        handler: function(){
          $(curr).addClass('reveal-item--visible');
        }, offset:that.osPct
      });
    });
  }
}
export default RevealOnScroll;
