class Dog:
    def __init__(self,name,height):
        self.name=name
        self.height=height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        x=self.height*2
        print(f"{self.name} jumps {x} cm high!")
davids_dog=Dog("Rex",50)
print("-------------------\n")
print(f"name : {davids_dog.name} and  height : {davids_dog.height} cm")
print("-------------------\n")
davids_dog.bark()
print("-------------------\n")
davids_dog.jump()

sarahs_dog=Dog("Teacup",20)
print("-------------------\n")
print(f"name : {sarahs_dog.name} and  height : {sarahs_dog.height} cm")
print("-------------------\n")
sarahs_dog.bark()
print("-------------------\n")
sarahs_dog.jump()
if sarahs_dog.height>davids_dog:
    print(f"{sarahs_dog.name} is bigger")
else:
    print(f"{davids_dog.name} is bigger")    