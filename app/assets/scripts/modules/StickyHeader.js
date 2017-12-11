import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader{
  constructor(){
    this.lazyImages=$('.lazyload');
    this.siteHdr=$('.site-header');
    this.hdrTriggerEl=$('.large-hero__title');
    this.createHdrWaypoint();
    this.PageSections=$('.page-section');
    this.hdrLinks=$('.primary-nav a');
    this.createPageSecWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.on('load', function(){
    Waypoint.refreshAll();
    });
  }

  addSmoothScrolling(){
    this.hdrLinks.smoothScroll();
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

  createPageSecWaypoints(){
    var that=this;
    this.PageSections.each(function(){
      var currSec=this;
      new Waypoint({
        element:currSec,
        handler: function(direction){
          if(direction=='down'){
          var matchingHeadLink=currSec.getAttribute("data-matching-link");
          that.hdrLinks.removeClass('is-currLink');
          $(matchingHeadLink).addClass("is-currLink");
        }
        }, offset: "18%"
      });
      new Waypoint({
        element:currSec,
        handler: function(direction){
          if(direction=='up'){
          var matchingHeadLink=currSec.getAttribute("data-matching-link");
          that.hdrLinks.removeClass('is-currLink');
          $(matchingHeadLink).addClass("is-currLink");
        }
      }, offset: "-40%"
      });
    });
  }

}
export default StickyHeader;
