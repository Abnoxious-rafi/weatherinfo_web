async function weather(city, id_city, id_temp, id_wind, id_cloud, mode) {//*
	const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'ef1b573084mshe86af9359761f6ep1691eejsnfbab685e7092',
			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const str = await response.text();

		console.log(str);
		document.getElementById(id_city).innerHTML = city;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '"') {
				let temp = '';
				let j = i + 1;
				while (str[j] !== '"') {
					temp += str[j];
					j++;
				}
				if (temp === 'temp_c') {
					document.getElementById(id_temp).innerHTML = (str.slice(j + 2, j + 6)) + " °C";
				}
				else if (temp === 'wind_kph') {
					document.getElementById(id_wind).innerHTML = (str.slice(j + 2, j + 6)) + " km/h";
				}
				else if (temp === 'cloud') {
					document.getElementById(id_cloud).innerHTML = (str.slice(j + 2, j + 4)) + "%";
				}
				i = j + 1;
			}
		}
	} catch (error) {
		console.error(error);
	}
	if (mode === 0)
		randomCity();

}



const cities = ["Badarganj", "Bajitpur", "Bandarban", "Baniachang", "Barisal", "Bera", "Bhairab", "Bazar", "Bhandaria", "Bhatpara", "Abhaynagar", "Bheramara", "Bhola", "Bogra", "Burhanuddin", "Char", "Bhadrasan", "Chhagalnaiya", "Chhatak", "Chilmari", "Chittagong", "Comilla", "Cox's", "Bazar", "Dhaka", "Dinajpur", "Dohar", "Faridpur", "Fatikchari", "Feni", "Gafargaon", "Gaurnadi", "Habiganj", "Hajiganj", "Ishurdi", "Jamalpur", "Jessore", "Jhingergacha", "Joypur", "Hat", "Kalia", "Kaliganj", "Kesabpur", "Khagrachhari", "Khulna", "Kishorganj", "Kushtia", "Laksham", "Lakshmipur", "Lalmanirhat", "Lalmohan", "Madaripur", "Manikchari", "Mathba", "Maulavi", "Bazar", "Mehendiganj", "Mirzapur", "Morrelgonj", "Muktagacha", "Mymensingh", "Nabinagar", "Nagarpur", "Nageswari", "Nalchiti", "Narail", "Narayanganj", "Narsingdi", "Nawabganj", "Netrakona", "Pabna", "Palang", "Panchagarh", "Par", "Naogaon", "Parbatipur", "Patiya", "Phultala", "Pirgaaj", "Pirojpur", "Raipur", "Rajshahi", "Ramganj", "Rangpur", "Raojan", "Saidpur", "Sakhipur", "Sandwip", "Sarankhola", "Sarishabari", "Satkania", "Satkhira", "Shahzadpur", "Sherpur", "Shibganj", "Sirajganj", "Sylhet", "Tangail", "Teknaf", "Thakurgaon", "Tungi", "Tungipara"];

function randomCity() {
	let cnt = 1;
	const pickedCities = new Map();
	while (true) {
		const pick = Math.floor(Math.random() * cities.length);
		if (!pickedCities.has(pick)) {
			console.log(cities[pick]);
			if (cnt === 1) {
				weather(cities[pick], "city1", "temp1", "wind1", "cloud1", 1);//*
			}
			else if (cnt === 2) {
				weather(cities[pick], "city2", "temp2", "wind2", "cloud2", 1);//*
			}
			else if (cnt === 3) {
				weather(cities[pick], "city3", "temp3", "wind3", "cloud3", 1);//*
			}

			pickedCities.set(pick, true);
			cnt++;
		}
		if (cnt === 4) {
			break;
		}
	}
}

var btn = document.getElementById("search-button");
var inp = document.getElementById("search-input");
btn.addEventListener("click", (e) => {
	e.preventDefault()
	weather(inp.value, "city0", "temp0", "wind0", "cloud0", 0)
});

//randomCity();

weather("Barisal", "city0", "temp0", "wind0", "cloud0", 0);//*




















// async function weather(city, id_city, id_temp, id_wind, id_cloud, mode) {
// 	const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'x-rapidapi-key': 'ef1b573084mshe86af9359761f6ep1691eejsnfbab685e7092',
// 			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 		}
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const data = await response.json();

// 		console.log(data);
// 		document.getElementById(id_city).innerHTML = city;
// 		document.getElementById(id_temp).innerHTML = data.current.temp_c + " °C";
// 		document.getElementById(id_wind).innerHTML = data.current.wind_kph + " km/h";
// 		document.getElementById(id_cloud).innerHTML = data.current.cloud + "%";
// 	} catch (error) {
// 		console.error(error);
// 	}
// 	if (mode === 0)
// 		randomCity();
// }

// const cities = ["Badarganj", "Bajitpur", "Bandarban", "Baniachang", "Barisal", "Bera", "Bhairab", "Bazar", "Bhandaria", "Bhatpara", "Abhaynagar", "Bheramara", "Bhola", "Bogra", "Burhanuddin", "Char", "Bhadrasan", "Chhagalnaiya", "Chhatak", "Chilmari", "Chittagong", "Comilla", "Cox's", "Bazar", "Dhaka", "Dinajpur", "Dohar", "Faridpur", "Fatikchari", "Feni", "Gafargaon", "Gaurnadi", "Habiganj", "Hajiganj", "Ishurdi", "Jamalpur", "Jessore", "Jhingergacha", "Joypur", "Hat", "Kalia", "Kaliganj", "Kesabpur", "Khagrachhari", "Khulna", "Kishorganj", "Kushtia", "Laksham", "Lakshmipur", "Lalmanirhat", "Lalmohan", "Madaripur", "Manikchari", "Mathba", "Maulavi", "Bazar", "Mehendiganj", "Mirzapur", "Morrelgonj", "Muktagacha", "Mymensingh", "Nabinagar", "Nagarpur", "Nageswari", "Nalchiti", "Narail", "Narayanganj", "Narsingdi", "Nawabganj", "Netrakona", "Pabna", "Palang", "Panchagarh", "Par", "Naogaon", "Parbatipur", "Patiya", "Phultala", "Pirgaaj", "Pirojpur", "Raipur", "Rajshahi", "Ramganj", "Rangpur", "Raojan", "Saidpur", "Sakhipur", "Sandwip", "Sarankhola", "Sarishabari", "Satkania", "Satkhira", "Shahzadpur", "Sherpur", "Shibganj", "Sirajganj", "Sylhet", "Tangail", "Teknaf", "Thakurgaon", "Tungi", "Tungipara"];

// function randomCity() {
// 	let cnt = 1;
// 	const pickedCities = new Set();
// 	while (pickedCities.size < 3) {  // Picks three cities at random
// 		const pick = Math.floor(Math.random() * cities.length);
// 		if (!pickedCities.has(pick)) {
// 			pickedCities.add(pick);
// 			console.log(cities[pick]);
// 			const idPrefix = `city${cnt}`;
// 			weather(cities[pick], `${idPrefix}`, `temp${cnt}`, `wind${cnt}`, `cloud${cnt}`, 1);
// 			cnt++;
// 		}
// 	}
// }

// document.getElementById("search-button").addEventListener("click", (e) => {
// 	e.preventDefault();
// 	const inp = document.getElementById("search-input").value;
// 	weather(inp, "city0", "temp0", "wind0", "cloud0", 0);
// });

// weather("Barisal", "city0", "temp0", "wind0", "cloud0", 0);