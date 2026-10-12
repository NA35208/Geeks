
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_func(data):
    correct = 0
    incorrect = 0
    wrong = []

    for item in data:
        answer = input(item["question"] + " ")

        if answer.strip().lower() == item["answer"].lower():
            print("Correct!")
            correct += 1
        else:
            print("Incorrect!")
            incorrect += 1

            wrong.append({
                "question": item["question"],
                "your_answer": answer,
                "correct_answer": item["answer"]
            })

    return correct, incorrect, wrong


def show(correct, incorrect, wrong):
    print("\n========== QUIZ RESULTS ==========")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")

    if wrong:
        print("\nHere are the questions you answered incorrectly:")

        for item in wrong:
            print(f"\nQuestion: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}")
    else:
        print("Excellent! You answered all questions correctly!")


def main():
    while True:
        correct, incorrect, wrong = ask_func(data)

        show(correct, incorrect, wrong)

        if incorrect > 3:
            play_again = input(
                "\nYou had more than 3 wrong answers. "
                "Would you like to play again? (yes/no): "
            ).strip().lower()

            if play_again in ["yes", "y"]:
                print("\nLet's play again!\n")
            else:
                print("Thanks for playing Star Wars Quiz!")
                break
        else:
            print("\nThanks for playing Star Wars Quiz!")
            break


main()
