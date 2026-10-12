family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
def get_price(age):
    if age < 3:
        return 0
    elif age < 12:
        return 10
    else:
        return 15

total_price = 0
for name, age in family.items():
    print(f"{name} is {age} years old and the price is {get_price(age)}")
    total_price += get_price(age)
print(f"The total price for the family is {total_price}")
family = {}

name = input("Enter the name: ")
age = int(input("Enter the age: "))
family[name] = age
