arr = input().split()
nums = [int (i) for i in arr]

asc = [1,2,3,4,5,6,7,8]
des = [8,7,6,5,4,3,2,1]

if nums == asc:
  print('ascending')
elif (nums == des):
  print('descending')
else:
  print('mixed')



