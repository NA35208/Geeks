class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(
            f"Congratulations to the {self.last_name} family "
            f"on the new baby!"
        )

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] > 18

        return False

    def family_presentation(self):
        print(f"Family name: {self.last_name}")

        for member in self.members:
            print(member)


members = [
    {
        "name": "Michael",
        "age": 35,
        "gender": "Male",
        "is_child": False
    },
    {
        "name": "Sarah",
        "age": 32,
        "gender": "Female",
        "is_child": False
    }
]

family = Family("Smith", members)

family.family_presentation()

print(family.is_18("Michael"))
print(family.is_18("Sarah"))
print(family.is_18("Unknown"))

family.born(
    name="Baby Smith",
    age=0,
    gender="Male",
    is_child=True
)

family.family_presentation()