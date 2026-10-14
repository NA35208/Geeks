from game import Game
def get_user_menu_choice():
    print("\n===== ROCK PAPER SCISSORS =====")
    print("1. Play a new game")
    print("2. Show scores")
    print("q. Quit")

    choice = input("Enter your choice: ").lower().strip()

    while choice not in ["1", "2", "q"]:
        print("Invalid choice. Please try again.")
        choice = input("Enter your choice: ").lower().strip()

    return choice


def print_results(results):
    print("\n===== GAME SUMMARY =====")
    print(f"Games won: {results['win']}")
    print(f"Games lost: {results['loss']}")
    print(f"Games drawn: {results['draw']}")
    print(f"Total games: {sum(results.values())}")
    print("\nThank you for playing!")


def main():
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
    }

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            game = Game()
            result = game.play()
            results[result] += 1

        elif choice == "2":
            print_results(results)

        elif choice == "q":
            print_results(results)
            break


if __name__ == "__main__":
    main()
