
morse_code = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".",
    "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---",
    "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---",
    "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-",
    "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..",
}
english_code = {code: letter for letter, code in morse_code.items()}


def english_to_morse(text):
    words = text.upper().split()
    return " / ".join(
        " ".join(morse_code[letter] for letter in word)
        for word in words
    )


def morse_to_english(code):
    words = code.strip().split("/")
    return " ".join(
        "".join(english_code[symbol] for symbol in word.split())
        for word in words
    )
