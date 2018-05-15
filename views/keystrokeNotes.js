$(document).keypress("1",function(e) {
    var keycode = event.keyCode || event.which;
    console.log("The keycode is:" + keycode);
      if (keycode == 49){
      var socket = io.connect('http://localhost:1337');
      socket.emit('a note', keycode);
    }
 });

 $(document).keypress("2",function(e) {
     var keycode = event.keyCode || event.which;
     console.log("The keycode is:" + keycode);
       if (keycode == 50){
       var socket = io.connect('http://localhost:1337');
       socket.emit('b note', keycode);
     }
  });

  $(document).keypress("3",function(e) {
      var keycode = event.keyCode || event.which;
      console.log("The keycode is:" + keycode);
        if (keycode == 51){
        var socket = io.connect('http://localhost:1337');
        socket.emit('c note', keycode);
      }
   });

   $(document).keypress("4",function(e) {
       var keycode = event.keyCode || event.which;
       console.log("The keycode is:" + keycode);
         if (keycode == 52){
         var socket = io.connect('http://localhost:1337');
         socket.emit('d note', keycode);
       }
    });

    $(document).keypress("5",function(e) {
        var keycode = event.keyCode || event.which;
        console.log("The keycode is:" + keycode);
          if (keycode == 53){
          var socket = io.connect('http://localhost:1337');
          socket.emit('e note', keycode);
        }
     });

     $(document).keypress("6",function(e) {
         var keycode = event.keyCode || event.which;
         console.log("The keycode is:" + keycode);
           if (keycode == 54){
             console.log("emitting");

           var socket = io.connect('http://localhost:1337');
           socket.emit('f note', keycode);
         }
      });
