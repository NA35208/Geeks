word=input("Enter a word: ")
new_word=""
for letter in word:
    if  new_word == "" or letter != new_word[-1]:
        new_word+=letter
print(new_word)