#Write a function calculation() such that it can accept two variables and calculate the addition and subtraction of it. And also it must return both addition and subtraction in a single return call

def calculation(a,b):
    addition = a + b
    subtraction = a - b
    return addition, subtraction
print(calculation(10,5))
