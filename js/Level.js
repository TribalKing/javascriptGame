var Level = function()
{
	this.Level = 1;
	this.CometWave = 100;
	this.CometSpeed = 5;
	this.Interval = 0;
	this.start = new Date().getTime();
    this.elapsed = '0.0';
	var ob = this;
	this.comment = document.getElementById("comment").innerHTML;

this.Update = function(){
	
	var time = new Date().getTime() - ob.start;
    ob.elapsed = Math.floor(time / 100) / 10;
    if(Math.round(ob.elapsed) == ob.elapsed) { 
		ob.elapsed += '.0'; 
	}
    document.getElementById("time").innerHTML = "Time: " + ob.elapsed;

    //START
	if(ob.elapsed > 14)
	{
		this.Interval += 1;
		if(this.Interval >= ob.CometWave)
		{
			ob.CometWave = 100;
			this.Interval = 0;
			var releaseComets = new Comet(ob.CometSpeed);
			var releaseAsteroids = new Asteroid(ob.CometSpeed);
			g.AddObject(releaseComets);
			g.AddObject(releaseAsteroids);
		}
	}

	if(ob.elapsed>1&&ob.elapsed<8)
		Write("Niko od nas ne bi treb'o da se šeta sam.", 16, 500, 50, 250, 250, 250);
	if(ob.elapsed>8&&ob.elapsed<10)
		Write("Naročito ne ti...", 16, 500, 50, 250, 250, 250);
	if(ob.elapsed>10&&ob.elapsed<12)
		Write("...jer mnogo toga...", 16, 500, 50, 250, 250, 250);
	if(ob.elapsed>12&&ob.elapsed<14)
		Write("...od tebe zavisi.", 16, 500, 50, 250, 250, 250);
	
	if(ob.elapsed>30&&ob.elapsed<35){
		ob.CometWave = 80;
		ob.CometSpeed = 4;
		Write("...de li se denuo??", 18, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>38&&ob.elapsed<45){
		ob.CometWave = 60;
		ob.CometSpeed = 6;
		Write("Je*aću te, skidaj gaće.", 22, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>50&&ob.elapsed<55)
		Write("Bobo! Bobo smraade!!!", 22, 500, 50, 250, 0, 0);
	if(ob.elapsed>55&&ob.elapsed<60)
		Write("SMRAAADEEE!!!!", 22, 500, 50, 250, 0, 0);
	
	if(ob.elapsed>60&&ob.elapsed<100){
		ob.CometWave = 10;
		ob.CometSpeed = 8;
		Write("HAHAHAHAHAHAHA!", 28, 500, 50, 250, 250, 250);
	}
	if(ob.elapsed>100&&ob.elapsed<105)
		Write("............!!???", 22, 500, 50, 250, 250, 250);
	if(ob.elapsed>105&&ob.elapsed<110)
		Write("Hee, hee, hee, hee", 16, 500, 50, 0, 150, 150);
	if(ob.elapsed>110&&ob.elapsed<115)
		Write("STOP LAUGHING JACK! THIS GUY WON'T DIE!", 22, 500, 50, 250, 250, 250);
	if(ob.elapsed>115&&ob.elapsed<125){
		ob.CometWave = 7;
		ob.CometSpeed = 12;
		Write("DIE!!!!!!", 28, 500, 50, 250, 250, 250);
	}

}
}