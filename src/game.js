kontra.init();

kontra.assetPaths.images = 'assets/images/';

kontra.loadAssets('background.png', 'shit.png', 'player.png').then(
  function(){
    var background = kontra.sprite({
      x: 0,
      y: 0,
      image: kontra.images.background
    });

    var player = kontra.sprite({
      x: 120,
      y: 240,
      image: kontra.images.player
    });

    var shits = [
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.1
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.2
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.3
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.4
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.5
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.6
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.7
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 1.8
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 2.0
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 2.2
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 2.4
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 2.6
      }),
      kontra.sprite({
        x: Math.random() * 240,
        y: 0,
        image: kontra.images.shit,
        dy: 2.8
      })
      
    ];

    var loop = kontra.gameLoop({
      update: function() {

        if(kontra.keys.pressed('left')) {
          player.x -= 1.5;
        }
        if(kontra.keys.pressed('right')) {
          player.x += 1.5;
        }

        if(player.x < 0 ){
          player.x = 0;
        }

        if(player.x > 244) {
          player.x = 244;
        }

        
        player.update();

        //shit bouncing
        shits.forEach(function(shit){
          if(shit.y > 256) {
            shit.y = 0;
            shit.x = Math.random() * 240

          }

          shit.update();


          //check for collision
          if(shit.collidesWith(player)) {
            loop.stop();
            alert('You suck. Restart?');
            window.location = '';
          }
        });

        background.update();


      },
      render: function() {
        background.render();
        player.render();
        shits.forEach(function(shit){
          shit.render();
        });
      }
    });

    loop.start();
  }


);
