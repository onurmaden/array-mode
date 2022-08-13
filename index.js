function SimpleMode(arr) {
	let item;
	let x = 1;
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				count++;
				if (x < count) {
					x = count;
					item = arr[i];
				}
			}
		}
		count = 0;
	}
	if (item == undefined) {
		return -1;
	} else {
		return item;
	}
}
