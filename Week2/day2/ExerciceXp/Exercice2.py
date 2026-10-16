def sum_numbers(lst):
    total = 0
    for item in lst:
        try:
            total += item
        except Exception:
            pass
    return total

my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
result = sum_numbers(my_list)

