noseX = 0
noseY = 0

function preload() {
	// loadingAllSounds();  
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(gameConfig.screenX,gameConfig.screenY);
	canvas.parent("juego")
	instializeInSetup(mario);
	// playBGMusic();
	video = createCapture(VIDEO)
	video.parent("controles")
	video.size(400)
	emel5 = ml5.poseNet(video, modelLoaded)
	emel5.on("pose", respuestas)
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("poseNet cargado...")
}

function respuestas(informacion) {
	if(informacion.length >0) {
		// console.log(informacion)
		noseX = informacion[0].pose.nose.x
		noseY = informacion[0].pose.nose.y
	}
}






