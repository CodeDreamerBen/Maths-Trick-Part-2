var guess = 0;
			var times = 1;
			var prompt = 0;
			var minus = 256;
			var test = ""
			function reload() {
				window.open(document.baseURI, "_self")
			}
			function yes() {
				guess += times
				test = "";
				times = times * 2
				var control = times - 1
				for(let i = 0; i < minus; i++) {
				    for(let i = 0; i<times;i++) {
					    control += 1
					    test+=", " + control
				    }
				    control += times
				}
				minus = minus / 2
				next()
			}
			function no() {
				test = "";
				times = times * 2
				var control = times - 1
				for(let i = 0; i < minus; i++) {
				    for(let i = 0; i<times;i++) {
					    control += 1
					    test+=", " + control
				    }
				    control += times
				}
				minus = minus / 2
				next()
			}
			function next() {
				switch(prompt) {
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						document.getElementById("prompts").innerText = test;
						prompt++;
						break;
					default:
						document.getElementById("question").innerText = "Wait while we generate a new game for you!";
						document.getElementById("prompts").innerText = `Your number is ${guess}!`;
						document.getElementById("btnOne").disabled = true;
						document.getElementById("btnTwo").disabled = true;
						setTimeout(reload, 3000)
						break;
				}
			}