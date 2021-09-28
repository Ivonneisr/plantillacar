class Form {
  constructor() {
    //crear entrada de texto
    this.input = createInput("").attribute("placeholder", "Enter your name");
     //crear un boton
    this.playButton = createButton("Play");
    //crear titulo con imagen
    this.titleImg = createImg("./assets/title.png", "game title");
    //crear saludo
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    //añadir posición a los elementos
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    //anadir estilo a los elementos 
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    //esconder
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  //BP
  handleMousePressed() {
    //cuando se presionan los elementos 
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      //mensaje 
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      //cuando ingresa su nombre el usuario se añade un nuevo jugador playerCount aumenta
      playerCount += 1;
      //
      player.name = this.input.value();
      //index del jugador
      player.index = playerCount;
      //funcion añadir jugador
    player.addPlayer();
    //funcion actualizar 
      player.updateCount(playerCount); 
      //distancia
     player.getDistance(); //aa
    });
  }

  display() {
  
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
