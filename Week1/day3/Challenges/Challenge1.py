word=input("Enter a word : ")
dict_word={}
for i,l in enumerate(word):
    
    print(i,l)
    if l not in dict_word:
       dict_word[l]=[] 
    dict_word[l].append(i)

print(dict_word)