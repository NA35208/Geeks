my_fav_numbers = {1, 2, 3, 4, 5}
print(my_fav_numbers)
my_fav_numbers.add(6)
my_fav_numbers.add(7)
print(my_fav_numbers)
my_fav_numbers.pop()
print(my_fav_numbers)
friends_fav_numbers = {8, 1, 10}

our_fav_numbers = my_fav_numbers.union(friends_fav_numbers)

print(our_fav_numbers)