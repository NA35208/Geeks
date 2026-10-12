import random
def compare_func(number):
    rand_numb=random.randint(1,100)
    if number==rand_numb:
        print("success")
    else:
        print("Fail! The numbers are different.")
        print(f"Your number: {number}")
        print(f"Random number: {rand_numb}")  
def check(number):
    if 1 <= number <= 100:
       compare_func(number) 
                 
number=int(input("Enter a number between 1 and 100 :"))
check(number)