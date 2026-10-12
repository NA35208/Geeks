
def sum_func(X):
    X = str(X)
    numbers = []

    for i in range(1, 5):
        numbers.append(int(X * i))

    print(sum(numbers),"= ("," + ".join(map(str, numbers)),")" )
    return sum(numbers)

sum_func(3)
