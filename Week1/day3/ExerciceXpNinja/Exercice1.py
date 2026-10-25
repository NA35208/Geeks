manufacturers_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
manufacturers = manufacturers_string.split(", ")

print(f"There are {len(manufacturers)} manufacturers.")
print("Manufacturers in descending order:", sorted(manufacturers, reverse=True))

with_o = sum("o" in name.lower() for name in manufacturers)
without_i = sum("i" not in name.lower() for name in manufacturers)
print(f"Manufacturers with the letter 'o': {with_o}")
print(f"Manufacturers without the letter 'i': {without_i}")

duplicate_manufacturers = [
    "Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"
]
unique_manufacturers = list(dict.fromkeys(duplicate_manufacturers))
print(", ".join(unique_manufacturers))
print(f"There are {len(unique_manufacturers)} companies without duplicates.")

ascending_reversed_names = [name[::-1] for name in sorted(manufacturers)]
print("Manufacturers in ascending order with reversed names:", ascending_reversed_names)