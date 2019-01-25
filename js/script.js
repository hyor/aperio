;(function($){
  $(function(){
    $('#time_sale .slider').bxSlider({auto:true,maxSlides:3,slideWidth:400, moveSlides:1, pager:false, prevText:"",nextText:""});
    $('#main_view .slider').bxSlider({auto:true, pager:false, prevText:"",nextText:""});
    $('.first_gnb').ready(function(){
      $('.first_gnb li').mouseover(function(){
        $('#gnb').addClass('open');
      });
      $('.first_gnb li').mouseout(function(){
        $('#gnb').removeClass('open');
      });
    });
    $('#gnb').scrollToGiveClass({class:'active', baseline:"top"});
    $('#best .tab').tabmenu({class:'selected', mode:'class'});
  });
})(jQuery);
