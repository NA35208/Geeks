class TextAnalyzer:
    def __init__(self, text):
        if not isinstance(text, str):
            raise Exception("Text must be a string")
        if text.strip() == "":
            raise Exception("Text cannot be empty")
        self.text = text

    def __str__(self):
        count = self.word_count()
        return f"TextAnalyzer object with {count} word{'s' if count != 1 else ''}"

    def __len__(self):
        return len(self.text)

    def word_count(self):
        return len([w for w in self.text.strip().split() if w])

    def count_word(self, word):
        if not isinstance(word, str) or word.strip() == "":
            raise Exception("Word to count cannot be empty")
        words = self.text.split()
        return sum(1 for w in words if w == word)



