	var title = document.getElementById("title")
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	var textbox = document.getElementById("textbox");
	var startgame = document.getElementById("startgame");
	var uitleg = document.getElementById("uitleg");
	document.getElementById("chainsaw").style.display = "none";
	document.getElementById("key").style.display = "none";
	document.getElementById("fuel").style.display = "none";
	var hasChainsaw = false;
	var hasKeys = false;
	var chainsaw = document.getElementById("chainsaw");
	var dead = false;
	var hasFuel = false;

	function howto() {
		textbox.innerHTML = "Welcome to my adventure game, your goal in my game is to make it out alive. \
		In the bottom left you will have multiple options to choose from, good luck."
		startgame.style.display = "none";
		uitleg.innerHTML = "";
		option1.setAttribute("onclick","kamer()")
		option1.innerHTML = "Begin"
	}
	function kamer() {
		title.innerHTML = "The room";
		option1.innerHTML = "Hide in a cabinet.";
		option2.innerHTML = "Pick up a weapon and fight.";
		option3.innerHTML = "Sit back down.";
		startgame.innerHTML = "";
		uitleg.style.display = "none"
		image.src = "img/dentist.jpg";
		option1.setAttribute("onclick", "kamer2()");
		option2.setAttribute("onclick", "kamer4()");
		option3.setAttribute("onclick", "kamer5()");
		textbox.innerHTML = "You wake up, your head hurts.  After recovering a bit you \
		realise you're strapped to a chair. One of the ties around your \
		wrist is loose. You free yourself from the chair, but you hear keys \
		rustling on the other side of the door. What do you do?";
		hasChainsaw = false;
		hasKeys = false;
		dead = false;
		hasFuel = false;
	}

	function kamer2() {
		title.innerHTML = "The room";
		option1.innerHTML = "Try another cabinet.";
		option2.innerHTML = "Pick up a weapon and fight.";
		option3.innerHTML = "Sit back down on the chair.";
		image.src = "img/dentist.jpg";
		option1.setAttribute("onclick", "kamer3()");
		option2.setAttribute("onclick", "kamer4()");
		option3.setAttribute("onclick", "kamer5()")
		textbox.innerHTML = "You look in one of the cabinet and realise its too \
		small to fit, but there's another cabinet, the person behind the door \
		will enter the room in mere seconds.";
	}

	function kamer3() {
		title.innerHTML = "The room";
		option1.innerHTML = "Leave the room.";
		option2.innerHTML = "";
		option3.innerHTML = "";
		image.src = "img/dentist.jpg";
		option1.setAttribute("onclick", "gang()");
		textbox.innerHTML = "The closet fit! You hear the door open and a man \
		screams in anger as he pushes something over and metal hits the floor. \
		He slams the door shut, but he didn't lock it... ";
	}

	function kamer4() {
		title.innerHTML = "The room";
		option1.innerHTML = "Run past him.";
		option2.innerHTML = "Attack him.";
		option3.innerHTML = "";
		image.src = "img/dentist.jpg";
		option1.setAttribute("onclick", "gameover1()");
		option2.setAttribute("onclick", "gameover2()");
		textbox.innerHTML = "You grab a meat cleaver from the tray next to your chair, \
		the man bursts through the door holding a machete, he's breathing angrily and walking towards you.";
	}

	function kamer5() {
		title.innerHTML = "Game over";
		option1.innerHTML = "";
		option2.innerHTML = "Retry.";
		option3.innerHTML = "";
		image.src = "img/GAMEOVERchair.png";
		option2.setAttribute("onclick", "kamer()");
		textbox.innerHTML = "You sit down in the chair and tie yourself up. The man \
		walks in and sees that you tried to escape. He gets mad and cuts your throat. \
		(Seriously? Why would you sit back down?)";
	}

	function gameover1() {
		title.innerHTML = "Dead";
		option1.innerHTML = "";
		option2.innerHTML = "Try again.";
		option3.innerHTML = "";
		option2.setAttribute("onclick", "kamer()")
		image.src = "img/GAMEOVERfight.png";
		textbox.innerHTML = "You start running towards the man but he quickly readies his \
		machete and cuts your head clean off.";
	}

	function gameover2() {
		title.innerHTML = "Dead";
		option1.innerHTML = "";
		option2.innerHTML = "Try again.";
		option3.innerHTML = "";
		option1.setAttribute("onclick", "kamer()")
		option2.setAttribute("onclick", "kamer()")
		image.src = "img/GAMEOVERfight.png";
		textbox.innerHTML = "You hack your cleaver into the mans shoulder, \
		but he seems unscathed, he grabs you by the throat and stabs you in \
		the stomach with his machete..";
	}

	function gameover3() {
		title.innerHTML = "Dead";
		option1.innerHTML = "";
		option2.innerHTML = "Try again.";
		option3.innerHTML = "";
		option2.setAttribute("onclick", "kamer()")
		image.src = "img/GAMEOVERrun.png";
		textbox.innerHTML = "As you turn around and run out of the room and \
		through the hallway, you feel a sharp pain in your neck. A sleeping dart. You \
		start feeling sleepy and you black out. You don't wake up.";
	}

	function gameover4() {
		title.innerHTML = "Dead";
		option1.innerHTML = "";
		option2.innerHTML = "Try again.";
		option3.innerHTML = "";
		option2.setAttribute("onclick", "kamer()")
		image.src = "img/GAMEOVERcar.png";
		textbox.innerHTML = "The car drives up to you and you get in, \
		the car drives for a while untill it stops at the side of the \
		road and the man gets out. The trunk closes and for a fraction of a \
		second you hear a bang, before a bullet enters through your head.";
	}

	function gameover5() {
		title.innerHTML = "Dead";
		option1.innerHTML = "";
		option2.innerHTML = "Try again.";
		option3.innerHTML = "";
		option2.setAttribute("onclick", "kamer()")
		image.src = "img/GAMEOVERtaxi.png";
		textbox.innerHTML = "You get out of the taxi and call the driver bad names. \
		he gets mad and gets out of his car. He grabs a baseball bat and fucking destroys you.";
	}

	function gang() {
		title.innerHTML = "Hallway";
		option1.innerHTML = "Enter another room.";
		option2.innerHTML = "Go to the elevator";
		option3.innerHTML = "Walk to the stairs.";
		image.src = "img/hallway2.jpg";
		textbox.innerHTML = "You leave the room and enter a cold, dark hallway. \
		The person is nowhere to be seen. ";
		option1.setAttribute("onclick", "room222()")
		option2.setAttribute("onclick", "elevator()")
		option3.setAttribute("onclick", "stairs()")
		document.getElementById("chainsaw").style.display = "none";
		document.getElementById("key").style.display = "none";
	}

	function elevator() {
		title.innerHTML = "Hallway";
		image.src = "img/hallway2.jpg"
		option1.setAttribute
		option1.innerHTML = "Go back."
		option2.innerHTML = ""
		option3.innerHTML = ""
		if (hasKeys) {
			option2.innerHTML = "Use keys."
			option2.setAttribute ("onclick", "elevator2()")
		}
		else {
		}
		option1.setAttribute("onclick", "gang()")
		textbox.innerHTML = "You walk down the hallway until you find an elevator, \
		it looks like it works, but it needs keys... ";
	}

	function stairs() {
		title.innerHTML = "Stairs"
		image.src = "img/stairs.jpg"
		option1.innerHTML = "Go down the stairs."
		option1.setAttribute("onclick", "basement()")
		option2.innerHTML = "Go back."
		option3.innerHTML = ""
		option2.setAttribute("onclick", "gang()")
		textbox.innerHTML = "You find a dusty and dark staircase, \
		you can see a big pile of rubbish blocking a path, \
		but the staircase doesn't end there."
	}

	function basement() {
		title.innerHTML = "Basement"
		image.src = "img/basement.jpg"
		option1.innerHTML = "Go back."
		option1.setAttribute("onclick","gang()")
		option2.innerHTML = ""
		option2.setAttribute("onclick","")
		document.getElementById("chainsaw").style.display = "inline-block";
		if (hasChainsaw) {
			document.getElementById("chainsaw").style.display = "none";
		}
		textbox.innerHTML = "The staircase ends at a dark, old basement. \
		The man is still nowhere to be seen..."
	}

	function room222() {
		title.innerHTML = "Dark room"
		image.src = "img/room222.jpg"
		option1.innerHTML = "Run!"
		option2.innerHTML = "Attack!"
		option3.innerHTML = ""
		option1.setAttribute("onclick", "gameover3()")
		option2.setAttribute("onclick", "gameover1()")
		if (hasChainsaw) {
			option3.setAttribute("onclick", "dead1()")
			option3.innerHTML = "Attack with chainsaw."
		}
		else {
			option3.innerHTML = ""
		}

		if (dead) {
			option1.innerHTML = "Leave the room"
			option2.innerHTML = ""
			option3.innerHTML = ""
			option1.setAttribute("onclick", "gang()")
			document.getElementById("key").style.display = "inline-block";
			textbox.innerHTML = "The dead body of the man makes you feel quilty, \
			but it's not really like you had a choice..."
		}
		else {
		textbox.innerHTML = "You open the door to a room and you see another old dentist room \
		the man is in the room, sharpening his machete. He turns around and his eyes widen, \
		he starts grinning and walks towards you."
		}

		if (hasKeys) {
			document.getElementById("key").style.display = "none"
		}

	}

	function elevator2() {
		title.innerHTML = "Elevator"
		textbox.innerHTML = "You insert the keys and the lights turn on. \
		After a while the doors open and you get in."
		image.src = "img/elevator.jpg"
		option1.innerHTML = "Go back."
		option2.innerHTML = "Go down."
		option3.innerHTML= "Go up."
		option1.setAttribute("onclick", "gang()")
		option2.setAttribute("onclick", "lobby()")
		option3.setAttribute("onclick", "lobby2()")
	}

	function lobby() {
		title.innerHTML = "The lobby"
		image.src = ""
		textbox.innerHTML = "You take the elevator down, right before you \
		reach the ground floor you hear a loud snapping sound, but luckily nothing happened."
		image.src = "img/main.jpg"
		option1.innerHTML = "Go to the elevator"
		option2.innerHTML = "Go outside"
		option3.innerHTML = "Look around"
		option1.setAttribute("onclick", "lobby3()")
		option2.setAttribute("onclick", "lobby4()")
		option3.setAttribute("onclick", "storage()")
	}

	function lobby2() {
		image.src = "img/main.jpg"
		if (hasFuel) {
			option2.innerHTML = "Get rid of barricade"
			option2.setAttribute("onclick", "outside()")
			option1.innerHTML = "Go to the elevator"
			option3.innerHTML = "Look around"
			option1.setAttribute("onclick", "lobby3()")
			option3.setAttribute("onclick", "storage()")
		}
		textbox.innerHTML = "You took the elevator up, but \
		the cable snapped and the elevator fell down, it hurt, \
		but it's nothing severe."
		option1.innerHTML = "Go to the elevator"
		option2.innerHTML = "Go outside"
		option3.innerHTML = "Look around"
		option1.setAttribute("onclick", "lobby3()")
		option2.setAttribute("onclick", "lobby4()")
		option3.setAttribute("onclick", "storage()")
	}

	function lobby3() {
		image.src = "img/elevator.jpg"
		textbox.innerHTML = "The cable snapped, this elevator is not going anywhere."
		option1.innerHTML = "Go back"
		option2.innerHTML = ""
		option3.innerHTML = ""
		if (hasFuel) {
			option2.innerHTML = "Get rid of barricade"
			option2.setAttribute("onclick", "outside()")
			option1.innerHTML = "Go to the elevator"
			option3.innerHTML = "Look around"
			option1.setAttribute("onclick", "lobby3()")
			option3.setAttribute("onclick", "storage()")
		}
		option1.setAttribute("onclick", "lobby2()")
	}

	function lobby4() {
		image.src = "img/main.jpg"
		textbox.innerHTML = "The exit is boarded up with wooden planks."
		option1.innerHTML = "Go to the elevator"
		option2.innerHTML = "Go outside"
		option3.innerHTML = "Look around"
		option1.setAttribute("onclick", "lobby2()")
		option2.setAttribute("onclick", "lobby4()")
		if (hasFuel) {
			option2.innerHTML = "Get rid of barricade"
			option2.setAttribute("onclick", "outside()")
			option1.innerHTML = "Go to the elevator"
			option3.innerHTML = "Look around"
			option1.setAttribute("onclick", "lobby3()")
			option3.setAttribute("onclick", "storage()")
		}
	}


	function storage() {
		image.src = "img/storage.jpg"
		textbox.innerHTML = "It's a really messy storage room. Maybe there is an axe or a crowbar \
		to get rid of the planks in front of the door..."
		option1.innerHTML = "Go back"
		option2.innerHTML = "Search the boxes"
		option3.innerHTML = ""
		option1.setAttribute("onclick", "lobby2()")
		option2.setAttribute("onclick", "storage2()")
	}

	function storage2() {
		image.src = "img/storage.jpg"
		option1.innerHTML = "Go back"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick", "lobby2()")
		textbox.innerHTML = "You look in some boxes, you stumble over the mess and a box falls over."
		document.getElementById("fuel").style.display = "inline-block";
		if (hasFuel) {
			document.getElementById("fuel").style.display = "none";
			textbox.innerHTML = "This room is a huge mess..."
		}
	}

	function Chainsaw1() {
		hasChainsaw = true;
		chainsaw.style.display = "none"
	}

	function Fuel1() {
		hasFuel = true;
		fuel.style.display = "none"
	}
	function keys() {
		hasKeys = true;
		key.style.display = "none"
	}

	function dead1() {
		title.innerHTML = "Dark room"
		textbox.innerHTML = "You cut the man in half with the rusty chainsaw you found, \
		you didn't want to do that. He's dead."
		option1.innerHTML = "Search the corpse"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick", "search1()")
		option2.setAttribute("onclick", "gang()")
		dead = true;	
	}

	function search1() {
		if (!hasKeys) {
		document.getElementById("key").style.display = "inline-block";
		}
		if (hasKeys) {
			document.getElementById("key").style.display = "none"
		}
		dead = true;
		option1.setAttribute("onclick", "gang()")
		option1.innerHTML = "Leave the room"
		option2.innerHTML = ""
		textbox.innerHTML = "You crouch down and check the mans pockets, something falls out."
		if (hasChainsaw) {
			document.getElementById("chainsaw").style.display = "none";
		}
	}

	function outside() {
		title.innerHTML = "Outside"
		textbox.innerHTML = "You walk out of the building, it's gotten dark since you first woke up,\
		it's freezing cold. You see the exit of the area in the distance."
		image.src = "img/outside.jpg"
		option1.innerHTML = "Go back"
		option2.innerHTML = "Walk to the gate"
		option1.setAttribute("onclick","lobby2()")
		option2.setAttribute("onclick", "gate()")
		option3.innerHTML = ""
	}

	function gate() {
		title.innerHTML = "Gate"
		image.src = "img/gate.jpg"
		textbox.innerHTML = "After walking a bit you arrive at the gate. \
		Looking back you see the building that you killed a man in. You feel quilty, \
		but you had to survive."
		option1.innerHTML = "Go back"
		option2.innerHTML = "Leave"
		option1.setAttribute("onclick", "outside()")
		option2.setAttribute("onclick", "road()")
		option3.innerHTML = ""
	}

	function road() {
		image.src = "img/road.jpg"
		title.innerHTML = "Dark road"
		textbox.innerHTML = "You have been walking for what seems like days, \
		but it has probably been 15 minutes. A car is coming."
		option1.innerHTML = "Go back"
		option2.innerHTML = "Get in the car"
		option3.innerHTML = "Keep walking"
		option1.setAttribute("onclick", "road1()")
		option2.setAttribute("onclick","gameover4()")
		option3.setAttribute("onclick","road2()")
	}

	function road1() {
		image.src = "img/road.jpg"
		title.innerHTML = "Dark road"
		textbox.innerHTML = "You are exhausted, there is no reason to go back..."
		option1.innerHTML = ""
		option2.innerHTML = "Get in the car"
		option3.innerHTML = "Keep walking"
		option1.setAttribute("")
		option2.setAttribute("onclick","gameover4()")
		option3.setAttribute("onclick","road2()")
	}

	function road2() {
		image.src = "img/goa.jpg"
		title.innerHTML = "The road"
		textbox.innerHTML = "After walking for an hour you reach a different, bigger road."
		option1.innerHTML = "Keep walking"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick","busstop()")
	}

	function busstop() {
		image.src = "img/bus.jpg"
		title.innerHTML = "A bus stop"
		textbox.innerHTML = "After walking on the bigger road for a while \
		you decide to wait at the bus stop."
		option1.innerHTML = "Wait for the bus"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick","busstop2()")
	}

	function busstop2() {
		image.src = "img/bus2.jpg"
		title.innerHTML = "Outskirts of the city"
		textbox.innerHTML = "You took the bus to your city. It feels good to feel safe."
		option1.innerHTML = "Walk home"
		option1.setAttribute("onclick","alley()")
	}

	function alley() {
		image.src = "img/alley.jpg"
		title.innerHTML = "Alley"
		textbox.innerHTML = "You think back of what happened today, \
		you decided that you're not going to tell anyone, since you killed a man \
		you could go to jail. There's no proof that man did anything wrong, \
		you can be charged for entering property and murder."
		option1.innerHTML = "Take a taxi"
		option1.setAttribute("onclick","taxi()")
	}

	function taxi() {
		image.src = "img/car.gif"
		title.innerHTML = "Taxi"
		textbox.innerHTML = "You stop a taxi and get in, you tell the man your adress. \
		After 5-10 minutes you arrive at your doorstep."
		option1.innerHTML = "Get out of the taxi."
		option2.innerHTML = "Insult the driver."
		option1.setAttribute("onclick","door()")
		option2.setAttribute("onclick","gameover5()")
	}	

	function door() {
		image.src = "img/door.jpg"
		title.innerHTML = "Home"
		textbox.innerHTML = "After everything that happened you finally made it home."
		option1.innerHTML = "Go inside"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick","home()")
	}

	function home() {
		image.src = "img/home.gif"
		title.innerHTML = "Home"
		textbox.innerHTML = "Everything feels... normal again."
		option1.innerHTML = "Go to bed"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick","win()")
	}

	function win() {
		image.src = "img/win.jpg"
		title.innerHTML = "You won"
		textbox.innerHTML = "Your normal life goes on, \
		you don't tell anyone what happened that day, \
		but you won't forget."
		option1.innerHTML = "Play again"
		option2.innerHTML = ""
		option3.innerHTML = ""
		option1.setAttribute("onclick","kamer()")
	}