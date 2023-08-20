function insert(data) {
	
	var lower = 0;
	var mid = Math.ceil( upper/2 );
	var upper = aray.length-1;

	while ( !(data < aray[mid] && data > aray[mid - 1]) )
	{
		if ( data < aray[mid] )
		{
			upper = mid - 1;
		}
		else if ( data > aray[mid] )
		{
			lower = mid + 1;
		}
		else
		{
			//data = aray[mid]
			break;
		}
		mid = Math.floor( (lower + upper)/2 );
	}

	aray.length++;

	for (j = aray.length; j >= mid; j--)
	{
		aray[j] = aray[j - 1];
	}

	aray[mid] = data;
}

function update(target, data)
{
	var success = fetch(target);
	if (success)
	{
		aray[success] = data;
	}
	else { return false; }
}

function fetch(target) {
	var upper = aray.length-1;
	var lower = 0;
	var mid = Math.ceil(upper/2);

	while(target !== aray[mid] && upper !== lower && mid !== upper) {
		if (target > aray[mid]) {
			lower = mid;
		}
		else {
			upper = mid;
		}
		mid = Math.floor((upper + lower)/2);
	}

	if (aray[mid] === target) {
		return mid;
	}
	else { return false; }
}

function remove(target) {
	var success = fetch(target);
	if (success) {
		for (var i = success; i < aray.length; i++) {
			aray[i] = aray[i+1];
			aray.length--;
		}
	}
	else { return false; }
}

//execution
var aray = new Array(5);

insert(Math.floor(Math.random() * 11));
insert(Math.floor(Math.random() * 11));
insert(Math.floor(Math.random() * 11));
insert(Math.floor(Math.random() * 11));
insert(Math.floor(Math.random() * 11));