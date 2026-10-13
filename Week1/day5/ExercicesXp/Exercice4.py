
class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} added to the zoo.")
        else:
            print("This animal already exists.")

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold.")
        else:
            print("This animal does not exist.")

    def sort_animals(self):
        sorted_animals = {}

        for animal in sorted(self.animals):
            first_letter = animal[0].upper()

            if first_letter not in sorted_animals:
                sorted_animals[first_letter] = []

            sorted_animals[first_letter].append(animal)

        return sorted_animals

    def get_groups(self):
        groups = self.sort_animals()

        for letter, animals in groups.items():
            print(f"{letter}: {animals}")


new_york_zoo = Zoo("New York Zoo")

new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Baboon")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Emu")
new_york_zoo.add_animal("Eel")


print("\nAll animals:")
new_york_zoo.get_animals()

print("\nAnimal groups:")
new_york_zoo.get_groups()

print("\nSelling an animal:")
new_york_zoo.sell_animal("Bear")

print("\nAnimals after selling:")
new_york_zoo.get_animals()
