class Circle():
    def __init__(self,radius=1.0):
        self.radius=radius
    def perimeter(self):
        return 2*3.14*self.radius
    def area(self):
        return 3.14*(self.radius**2)
    def __str__(self):
        return (f"Cercle de rayon {self.radius} \n  "
                f"Périmètre : {self.perimeter():.2f}\n"
                f"- Aire : {self.area():.2f}"
                )

mon_circle=Circle()
print(mon_circle)