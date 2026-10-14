
def display_board(board):
    print()
    for i in range(0, 9, 3):
        print(" " + " | ".join(board[i:i + 3]))
        if i < 6:
            print("---+---+---")
    print()


def player_input(player, board):
    while True:
        try:
            position = int(input(f"Player {player}, choose a position (1-9): "))

            if position < 1 or position > 9:
                print("Choose a number between 1 and 9.")
            elif board[position - 1] in ["X", "O"]:
                print("This position is already occupied. Try again.")
            else:
                return position - 1

        except ValueError:
            print("Invalid input. Please enter a number.")


def check_win(board, player):
    winning_combinations = [
        (0, 1, 2),
        (3, 4, 5),
        (6, 7, 8),
        (0, 3, 6),
        (1, 4, 7),
        (2, 5, 8),
        (0, 4, 8),
        (2, 4, 6)
    ]

    for combination in winning_combinations:
        if all(board[i] == player for i in combination):
            return True

    return False


def play():
    board = [str(i) for i in range(1, 10)]
    current_player = "X"

    print("Welcome to Tic-Tac-Toe!")
    display_board(board)

    while True:
        position = player_input(current_player, board)
        board[position] = current_player

        display_board(board)

        if check_win(board, current_player):
            print(f"Player {current_player} wins!")
            break

        if all(cell in ["X", "O"] for cell in board):
            print("It's a draw!")
            break

        current_player = "O" if current_player == "X" else "X"


if __name__ == "__main__":
    play()
