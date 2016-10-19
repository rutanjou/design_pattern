(function(){
  window.app={
    timer:null,
    intervalID:null,
    min:null,
    secon:null,

    max:null,
    init:function(){
      app.listeners();
    },
    listeners:function(){
      $("#play").on('click',app.play);
      $("#stop").on('click',app.stop);
      $("#reset").on('click',app.reset);
      $("#reini").on('click',app.reini);
    
    },
    play: function(){
    
      app.intervalID = setInterval(app.decrement,1000); 
     
    },
    
    decrement:function(){
      app.timer--;
      app.progress();
      app.updateView();
      if(app.timer === 0){
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
      app.max=app.timer;
      
    }, 

    
    updateView:function(){
      var minute = parseInt(app.timer/60,10);
      var second = parseInt(app.timer-minute*60,10);

      $("#minute").text(minute);
      $("#second").text(second);
    },
    progress:function(){
      var pro=$("#barre");
      
      var pourcentage = app.timer*100/app.max;
    
      pro.val(pourcentage);
      
    },
    
  };
  app.init();

})();