birthdays = {
    "Nadia": "1995/03/15",
    "Ali": "1998/07/22",
    "Laila": "2000/11/05",
    "Ahmed": "1997/01/30",
    "Hasna": "2001/09/12"
}
print("\nPeople in the list:")
for name in birthdays:
    print(name)
    
name=input("Enter the name : ")
if name in birthdays:
    print(f"{name} 's birthday is {birthdays[name]}")

else:
    print(f"Sorry, we don’t have the birthday information for {name} ")