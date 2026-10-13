import random
class MyList():
    def __init__(self,letters):
        self.letters=letters
    def reversed(self):
        return self.letters[::-1]

    def sort(self):
        return sorted(self.letters)
    def generate(self):
        return [random.randint(1, 100) for _ in self.letters]


ma_liste = MyList(['d', 'a', 'c', 'b'])
print("Inversée :", ma_liste.reversed())
print("Triée    :", ma_liste.sort())
print("Aléatoire:", ma_liste.generate())