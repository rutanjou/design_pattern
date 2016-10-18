(function(){
  window.app={
    timer:null,
    intervalID:null,
    min:null,
    secon:null,
    init:function(){
      app.listeners();
    },
    listeners:function(){
      $("#play").on('click',this.play);
      $("#stop").on('click',this.stop);
      $("#reset").on('click',this.reset);
      $("#reini").on('click',this.reini);
    
    },
    updateView:function(){
      var minute = parseInt(app.timer/60,10);
      var second = parseInt(app.timer-minute*60,10);

      $("#minute").text(minute);
      $("#second").text(second);
    },
    play: function(){
      clearInterval(app.intervalID);
      app.reini();
      app.intervalID = setInterval(app.decrement,1000); 
     
    },
    
    decrement:function(){
      app.timer--;
      app.updateView();
      if(app.timer === 0)
      {
        clearInterval(app.intervalID);
      };
    },
    stop:function(){
        clearInterval(app.intervalID);
       
    },
    reset:function(){
      app.reini();

    },
    reini:function(){
      app.min = parseInt($('#iniminut').val(),10);
      app.secon = parseInt($('#inisecond').val(),10);
      app.updateView();
      app.timer = parseInt(app.min,10)*60 + parseInt(app.secon,10);
      
    }, 
  };
  app.init();

})();