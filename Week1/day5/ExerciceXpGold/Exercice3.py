class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten_index": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten_index": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten_index": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten_index": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten_index": True}
        ]

    def add_item(self, name, price, spice, gluten):
        """Ajoute un nouveau plat au menu."""
        new_dish = {
            "name": name,
            "price": price,
            "spice_level": spice,
            "gluten_index": gluten
        }
        self.menu.append(new_dish)
        print(f"Le plat '{name}' a été ajouté avec succès.")

    def update_item(self, name, price, spice, gluten):
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice_level"] = spice
                dish["gluten_index"] = gluten
                print(f"Le plat '{name}' a été mis à jour.")
                return
        
        print(f" Erreur : Le plat '{name}' ne figure pas dans le menu.")

    def remove_item(self, name):
      
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"Le plat '{name}' a été supprimé.")
                print("Menu mis à jour :", self.menu)
                return
                
        print(f" Erreur : Le plat '{name}' ne figure pas dans le menu.")
manager = MenuManager()

manager.add_item("Pastilla Poulet Amandes", 120, "A", True)
manager.update_item("Tacos", 8, "B", True)
manager.remove_item("French Fries")
manager.remove_item("Sushi")