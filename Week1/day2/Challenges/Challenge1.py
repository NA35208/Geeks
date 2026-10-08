number=int(input("Enter a number: "))
lenght=int(input("Enter the lenght : "))
list=[]
for i in range(1,lenght+1):
    list.append(number*i)
print(list)