import re

paragraph = (
    "On a clear night, the stars reveal a little of the universe beyond our world. "
    "Light from distant stars travels for years before it reaches our eyes. "
    "Looking up reminds us that curiosity can make even familiar places feel new."
)

words = re.findall(r"\b[\w'-]+\b", paragraph)
sentences = re.findall(r"[^.!?]+(?:[.!?]+|$)", paragraph)
unique_words = {word.lower() for word in words}
non_whitespace_characters = sum(not character.isspace() for character in paragraph)
average_words_per_sentence = len(words) / len(sentences) if sentences else 0
non_unique_words = len(words) - len(unique_words)

print("Paragraph analysis")
print(f"Characters: {len(paragraph)}")
print(f"Sentences: {len(sentences)}")
print(f"Words: {len(words)}")
print(f"Unique words: {len(unique_words)}")
print(f"Non-whitespace characters: {non_whitespace_characters}")
print(f"Average words per sentence: {average_words_per_sentence:.2f}")
print(f"Non-unique words: {non_unique_words}")