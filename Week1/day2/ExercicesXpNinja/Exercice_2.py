longest_sentence = ""

while True:
	sentence = input("Enter a sentence without the letter 'A': ")

	if "a" in sentence.lower():
		print("Please try again without the letter 'A'.")
	elif len(sentence) > len(longest_sentence):
		longest_sentence = sentence
		print("Congratulations! You set a new longest sentence.")
