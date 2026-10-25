from datetime import date, datetime
import calendar


def display_cake(candle_count):
	cake = [
		"       ___" + "i" * candle_count + "___",
		"      |:H:a:p:p:y:|",
		"    __|___________|__",
		"   |^^^^^^^^^^^^^^^^^|",
		"   |:B:i:r:t:h:d:a:y:|",
		"   |                 |",
		"   ~~~~~~~~~~~~~~~~~~~",
	]
	print("\n".join(cake))


birthdate_text = input("Enter your birthdate (DD/MM/YYYY): ")
try:
	birthdate = datetime.strptime(birthdate_text, "%d/%m/%Y").date()
except ValueError:
	print("Please enter a valid date in DD/MM/YYYY format.")
else:
	today = date.today()
	if birthdate > today:
		print("Birthdate cannot be in the future.")
	else:
		age = today.year - birthdate.year
		if (today.month, today.day) < (birthdate.month, birthdate.day):
			age -= 1

		candles = age % 10
		display_cake(candles)
		if calendar.isleap(birthdate.year):
			print()
			display_cake(candles)