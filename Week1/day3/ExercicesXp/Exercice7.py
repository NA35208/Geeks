
import random

def get_random_temp():
    number_random = random.randint(-10, 40)
    return number_random
def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("The weather is mild!")
    elif temp <= 32:
        print("It's getting warm!")
    else:
        print("It's really hot!")
print("Random temperature:", get_random_temp())
main()
def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    elif season == "spring":
        return random.randint(5, 23)
    elif season == "summer":
        return random.randint(20, 40)
    elif season == "autumn" or season == "fall":
        return random.randint(5, 25)
def main():
    season = input(
        "Choose a season (summer, autumn, winter, spring): "
    ).strip()

    if season not in ["summer", "autumn", "fall", "winter", "spring"]:
        print("Invalid season. Please try again.")
        return

    temp = get_random_temp(season)

    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("The weather is mild. Enjoy your day!")
    elif temp <= 32:
        print("It's getting warm. Stay hydrated!")
    else:
        print("It's really hot! Stay cool and drink plenty of water.")


main()        

def get_random_temp(season):
    limits = {
        "winter": (-10, 16),
        "spring": (5, 23),
        "summer": (20, 40),
        "autumn": (5, 25)
    }

    minimum, maximum = limits[season]
    return random.randint(minimum, maximum)


def main():
    month = int(input("Enter a month number (1-12): "))

    if month < 1 or month > 12:
        print("Invalid month number.")
        return

    if month in [12, 1, 2]:
        season = "winter"
    elif month in [3, 4, 5]:
        season = "spring"
    elif month in [6, 7, 8]:
        season = "summer"
    else:
        season = "autumn"
        temp = get_random_temp(season)

    print(f"Season: {season}")
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("The weather is mild. Enjoy your day!")
    elif temp <= 32:
        print("It's getting warm. Stay hydrated!")
    else:
        print("It's really hot! Stay cool and drink plenty of water.")


main()
