class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] > 18
        return False

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        for member in self.members:
            print(member)


class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] > 18:
                    print(
                        f"{member['name']} uses the power: "
                        f"{member['power']}"
                    )
                else:
                    print(
                        f"{member['name']} is not old enough "
                        "to use their power."
                    )
                return

        print(f"{name} is not a member of the family.")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


members = [
    {
        "name": "Michael",
        "age": 35,
        "gender": "Male",
        "is_child": False,
        "power": "fly",
        "incredible_name": "MikeFly"
    },
    {
        "name": "Sarah",
        "age": 32,
        "gender": "Female",
        "is_child": False,
        "power": "read minds",
        "incredible_name": "SuperWoman"
    }
]

incredibles = TheIncredibles("Incredibles", members)

# 1. Display the family
incredibles.incredible_presentation()

# 2. Use powers
incredibles.use_power("Michael")
incredibles.use_power("Sarah")

# 3. Add Baby Jack
incredibles.born(
    name="Baby Jack",
    age=0,
    gender="Male",
    is_child=True,
    power="Unknown Power",
    incredible_name="Jack-Jack"
)

# 4. Display the family again
incredibles.incredible_presentation()

# 5. Try to use Baby Jack's power
incredibles.use_power("Baby Jack")