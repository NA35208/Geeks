class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
cat1=Cat("lolo",1)
cat2=Cat("soso",2) 
cat3=Cat("noni",3) 
cats=cat[cat1,cat2,cat3]
def old_cat(cats_list):
    return max(cats_list,key=lambda cat:cat.age)
oldest_cat=old_cat(cats)    
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
    
