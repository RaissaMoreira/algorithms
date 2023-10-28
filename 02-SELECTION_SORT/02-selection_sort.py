def findSmaller(arr):
  smaller = arr[0]
  smaller_index = 0

  for i in range(1, len(arr)):
    if arr[i] < smaller:
      smaller = arr[i]
      smaller_index = i
  return smaller_index

def selectionSort(arr):
  newArray = []

  for i in range(len(arr)):
    smaller = findSmaller(arr)
    newArray.append(arr.pop(smaller))
  return newArray

print (selectionSort([5, 3, 6, 2, 10]))