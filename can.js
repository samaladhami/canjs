var Controller = can.Control({
   init: function(element , options){

     element.empty()
     element.html( can.view('myControlTemplate') )

   }
})

var Controller2 = can.Control({


  init: function(elm , options){

    elm.html('from Contrller2')

  }

})

var myControl = new Controller('#container')
var myControl2 = new Controller2('#container2')
