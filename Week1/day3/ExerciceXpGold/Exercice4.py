import random
def throw_dice():
    return random.randint(1,6)
print(throw_dice())
def throw_until_doubles():
    count=0
    while True:
        d1=throw_dice()
        d2=throw_dice()
        count+=1
        if d1==d2:
            break
    return count

def main():
    r=[]
    for i in range(1,100):
        t=throw_until_doubles()
        r.append(t)
    total=sum(r)
    average=total/100
    print("Total : ",total)
    print("Average : ",average)    
main()    
