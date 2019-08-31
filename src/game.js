kontra.init();

kontra.assetPaths.images = 'assets/images/';

kontra.loadAssets('background.png', 'enemy.png', 'player.png').then(
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

    var enemies = [
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.1
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.2
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.3
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.4
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.5
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.6
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.7
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 1.8
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 2.0
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 2.2
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 2.4
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
        dy: 2.6
      }),
      kontra.sprite({
        x: Math.random() * 256,
        y: 0,
        image: kontra.images.enemy,
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

        //enemy bouncing
        enemies.forEach(function(enemy){
          if(enemy.y > 256) {
            enemy.y = 0;
            enemy.x = Math.random() * 256

          }

          enemy.update();


          //check for collision
          if(enemy.collidesWith(player)) {
            loop.stop();
            alert('GAME OVER. YOU GOT HIT BY SHIT.');
            window.location = '';
          }
        });

        background.update();


      },
      render: function() {
        background.render();
        player.render();
        enemies.forEach(function(enemy){
          enemy.render();
        });
      }
    });

    loop.start();

  }
);
