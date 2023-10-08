import math

def binary_search(list, item):
    low = 0
    high = len(list) - 1
    
    while(low <= high):
        middle = math.floor((low + high)/2)
        guess = list[middle]
        
        if guess == item:
          return middle
        if guess > item:
          high = middle - 1
        else:
          low = middle + 1
    return None

list = [1, 3, 5, 7, 9]

print (binary_search(list, 3)) # 1
print (binary_search(list, -1)) # null