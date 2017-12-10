import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader{
  constructor(){
    this.siteHdr=$('.site-header');
    this.hdrTriggerEl=$('.large-hero__title');
    this.createHdrWaypoint();
  }

  createHdrWaypoint(){
    var that=this;
    new Waypoint({
      element:this.hdrTriggerEl[0],
      handler:function(direction){
        if(direction=="down"){
          that.siteHdr.addClass('site-header--dark');}
        else {
          that.siteHdr.removeClass('site-header--dark');}
      }
    });
  }

}
export default StickyHeader;
