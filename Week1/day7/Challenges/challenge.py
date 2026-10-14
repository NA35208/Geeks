
import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            self.radius = 1

        if self.radius < 0:
            raise ValueError("Radius cannot be negative")

    @property
    def diameter(self):
        return self.radius * 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"

    def __add__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius < other.radius

    def __eq__(self, other):
        if not isinstance(other, Circle):
            return NotImplemented
        return self.radius == other.radius
c1 = Circle(radius=5)
c2 = Circle(diameter=8)
c3 = Circle(radius=3)
c4 = Circle(radius=5)
print(c1)
print(c2)
print("Area:", c1.area)
c5 = c1 + c2
print("Addition:", c5)
print("c1 < c2:", c1 < c2)
print("c1 == c4:", c1 == c4)
circles = [c1, c2, c3, c4, c5]
circles.sort()
print("\nSorted circles:")
for circle in circles:
    print(circle)
