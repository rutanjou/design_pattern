(function(){
  window.app={
    timer:50,
    intervalID:null,
    init:function(){
      app.listeners();
    },
    listeners:function(){
      $("#play").on('click',app.play);
      $("#stop").on('click',app.stop);
      $("#reset").on('click',app.reset);
      $("#reini").on('click',app.reini);
      
    },
    updateView:function(){
      var minute = parseInt(app.timer/60);
      var second = parseInt(app.timer-minute*60);

      $("#minute").text(minute);
      $("#second").text(second);
    },
    play: function(){
      app.intervalID = setInterval(app.decrement,1000);
      
    },
    
    decrement:function(){
      app.timer--;
      app.updateView();

          if(app.timer === 0)
      {
        app.stop();
      };
    },
    stop:function(){
      clearInterval(app.intervalID);
    },
    reset:function(){
      app.timer = 50;
      
    },
    userSetTime: function(){
      var second= parseInt($('#second').val(),1000);
      app.setTimeout(second);

    },
    setTimeout:function(temp){
      app.temps=temp;
    }
  };
  app.init();
})();