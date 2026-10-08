sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print("The deli has run out of pastrami", sandwich_orders)

for sandwich in sandwich_orders:
    print(f"Preparing {sandwich}")
finished_sandwiches=[]
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    sandwich_orders.remove(sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich}")