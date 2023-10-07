let allIdeas = Array.from(document.body.children).filter((e) => !(e === document.querySelector('button')));

let reste = document.querySelector('button');

allIdeas.forEach((e) => {
	let increament = e.children[0];
	let total = e.children[1].children[1].children[0];


	function addOne(event) {
		total.innerHTML++;

		let numIdeas_1 = allIdeas[0].children[1].children[1].children[0].innerHTML;
		let numIdeas_2 = allIdeas[1].children[1].children[1].children[0].innerHTML;
		let numIdeas_3 = allIdeas[2].children[1].children[1].children[0].innerHTML;
		let numIdeas_4 = allIdeas[3].children[1].children[1].children[0].innerHTML;

		if (total.innerHTML == "20") {
			e.children[1].children[1].style.color = '#143484';		
		} if (total.innerHTML == "30") {
			e.children[1].children[1].style.color = '#009f65';		
		} if (total.innerHTML == "40") {
			e.children[1].children[1].style.color = '#ff9780';
		} if (total.innerHTML == "50") {
			e.children[1].children[1].style.color = '#ff3e49';		
		}

		if (event.target) {
			localStorage.setItem(`num-1`, numIdeas_1);
			localStorage.setItem(`num-2`, numIdeas_2);
			localStorage.setItem(`num-3`, numIdeas_3);
			localStorage.setItem(`num-4`, numIdeas_4);
		}	
	}
	increament.addEventListener("click", addOne);	
});

if (localStorage.getItem(`num-1`) || localStorage.getItem("color")) {
	allIdeas[0].children[1].children[1].children[0].innerHTML = localStorage.getItem(`num-1`);
}if (localStorage.getItem(`num-2`) || localStorage.getItem("color")) {
	allIdeas[1].children[1].children[1].children[0].innerHTML = localStorage.getItem(`num-2`);
}if (localStorage.getItem(`num-3`) || localStorage.getItem("color")) {
	allIdeas[2].children[1].children[1].children[0].innerHTML = localStorage.getItem(`num-3`);
}if (localStorage.getItem(`num-4`) || localStorage.getItem("color")) {
	allIdeas[3].children[1].children[1].children[0].innerHTML = localStorage.getItem(`num-4`);
}

function resetAll(){
	allIdeas.forEach((e) => {
		e.children[1].children[1].children[0].innerHTML = 0;
		localStorage.clear();
	})
}

reste.addEventListener("click", resetAll)