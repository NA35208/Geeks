import random

games_won = 0
games_lost = 0

while True:
	guess = input("Guess a number from 1 to 9, or enter q to quit: ").strip().lower()

	if guess == "q":
		break

	try:
		guess = int(guess)
	except ValueError:
		print("Please enter a number from 1 to 9, or q to quit.")
		continue

	if not 1 <= guess <= 9:
		print("Please enter a number from 1 to 9.")
		continue

	if guess == random.randint(1, 9):
		print("Winner")
		games_won += 1
	else:
		print("Better luck next time.")
		games_lost += 1

print(f"Games won: {games_won}")
print(f"Games lost: {games_lost}")