function Stopwatch(elem) {

	var time = 0;
	var interval;
	var audio = new Audio('sound.wav');
	var intervalId
	const filterOption = document.querySelector('.alarmTime');
	filterOption.addEventListener('change', filterAlarm);
	var ms; //Time in which alarm will go off

	function filterAlarm(e) {

			switch(e.target.value) {
							case "7000":
									ms = "7000"
									break;
							case "15000":
									ms = "15000"
									break;
							case "30000":
									ms = "30000"
									break;
							case "45000":
									ms = "45000"
									break;
							case "60000":
									ms = "60000"
									break;
							case "180000":
									ms = "180000"
									break;
							case "300000":
									ms = "300000"
									break;
							case "600000":
									ms = "600000"
									break;
							case "900000":
									ms = "900000"
									break;
							case "1200000":
									ms = "1200000"
									break;
							case "1800000":
									ms = "1800000"
									break;
							case "2700000":
									ms = "2700000"
									break;
							case "3600000":
									ms = "3600000"
									console.log(ms)
									break;
							case "7200000":
									ms = "7200000"
									console.log(ms)
									break;
							case "18000000":
									ms = "18000000"
									console.log(ms)
									break;

					}


	}

	function update() {
			if (this.isOn) {
					time += delta();
			} 
			var formattedTime = timeFormatter(time);
			elem.textContent = formattedTime;
	}

	function delta() {
			var now = Date.now()
			var timePassed = now - offset;
			offset = now;
			return timePassed;
	}
	function timeFormatter(timeInMilliseconds) {
			var time = new Date(timeInMilliseconds);
			var seconds = time.getSeconds().toString();
			var milliseconds = time.getMilliseconds().toString();
			var minutes = time.getUTCMinutes().toString();
			var hours = time.getUTCHours().toString();




			if (seconds.length < 2) {
					seconds = '0' + seconds;
			}
			if (minutes.length < 2) {
					minutes = '0' + minutes;
			}
			if (hours.length < 2) {
					hours = '0' + hours;
			}

			while(milliseconds.length < 3) {
					milliseconds = '0' + milliseconds
			}

			return hours + ' : ' + minutes + ' : ' + seconds  ;
	}
	this.isOn = false;
	this.start = function() {
			if (!this.isOn) {
					interval = setInterval(update.bind(this), 1);
					offset = Date.now();
					this.isOn
					this.isOn = true;
					intervalId = window.setInterval(function() {
							audio.play();
					}, ms);    

			}
	}
	this.stop = function() {
			if(this.isOn) {
					clearInterval(intervalId);
					clearInterval(interval);
					interval = null;
					this.isOn = false;

			}
	}
	this.reset = function() {
			if (!this.isOn){
					 time = 0;
					 update();
	}
}
}

var watch = new Stopwatch();
