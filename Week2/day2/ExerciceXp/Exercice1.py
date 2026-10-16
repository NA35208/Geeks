# The output will be:
# ['a', 'b', 'c']

# Why:
# The __repr__ method in the PrintList class returns the string form of self.my_list.


class PrintList():

    def __init__(self, my_list):
        self.my_list = my_list

    def __repr__(self):
        return str(self.my_list)


print_list_instance = PrintList(["a", "b", "c"])
print(print_list_instance.__repr__())
