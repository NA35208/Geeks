const createCalendar = (year, month) => {
	const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
	const table = document.createElement('table');
	table.style.borderCollapse = 'collapse';
	table.style.fontFamily = 'Arial, sans-serif';
	table.style.margin = '20px auto';
	table.style.textAlign = 'center';
    
	const thead = document.createElement('thead');
	const headerRow = document.createElement('tr');

	weekdays.forEach((weekday) => {
		const th = document.createElement('th');
		th.textContent = weekday;
		th.style.backgroundColor = '#4a6fa5';
		th.style.color = 'white';
		th.style.padding = '10px';
		th.style.border = '1px solid #ccc';
		headerRow.appendChild(th);
	});
	thead.appendChild(headerRow);
	table.appendChild(thead);

	const tbody = document.createElement('tbody');
	const firstDay = new Date(year, month - 1, 1);
	const daysInMonth = new Date(year, month, 0).getDate();
	const startOffset = (firstDay.getDay() + 6) % 7;
	const weekCount = Math.ceil((startOffset + daysInMonth) / 7);
	let day = 1;

	for (let week = 0; week < weekCount; week += 1) {
		const row = document.createElement('tr');

		for (let weekday = 0; weekday < 7; weekday += 1) {
			const cell = document.createElement('td');
			const position = week * 7 + weekday;
			cell.style.width = '40px';
			cell.style.height = '36px';
			cell.style.border = '1px solid #ccc';
			cell.style.backgroundColor = '#f8f9fa';

			if (position >= startOffset && day <= daysInMonth) {
				cell.textContent = day;
				day += 1;
			}

			row.appendChild(cell);
		}

		tbody.appendChild(row);
	}

	table.appendChild(tbody);
	document.body.replaceChildren(table);
};

createCalendar(2003,3)