# <변수와 출력함수>

# a,b,c = 1,2,3
# print("number : ", a,b,c)
# print(a,b,c, sep=', ')
# print(a,b,c, sep='')
# print(a,b,c, sep='\n')
# print(a, end=' d')

# a,b = input("숫자를 입력하세요 : ").split()

# c,d = map(int, input("숫자를 입력하세요 : ").split())
# print(c+d)

# for i in range(10,1,-1): #[10,9,8,7,6,5,4,3,2,1]
#   print(i)
# sep -> 구분자, 글자 사이사이에 끼어넣어줌
# print('S','E','P', sep='@')
# end -> 줄바꿈을 하지 않게됨
# print("I like", end=" ")
# print("money")

# for i in range(5): # [0,1,2,3,4]
#   print('i:', i, sep='',end=' ')
#   for j in range(5):
#     print('j:', j, sep='', end=' ')
#   print()

# <입력 관련>

# 입력을 input() 보다 빨리 해야 하는 경우(시간초과시)
# import sys
# T=sys.stdin.readline().rstrip() 을 해준다.
# -> rstrip()은 위 명령어로 받을시, '가나다\n'로 받는데,
# 개행문자 \n을 떼어주는 역할을 함.
# x,y=map(int,input().split())
# print(3,4) -> 쉼표로 구분해서 출력 시 띄어쓰기해서 출력됨

# 최빈값을 구할 때 사용되는 함수
# [1 1 2 2 5] 면 [(1,2), (2,2), (5,1)]로 반환됨
# from collections import Counter
# arr=[1,1,2,2,5]
# m2=Counter(arr).most_common()
# print(m2)


# <시간 복잡도>
# 1초당 2천만이라 생각하면 된다.


# <문자열 함수들>

# upper(),capitalize() (앞글자만)
# lower()
# isupper(), islower(), isalpha()
# list comprehension

# find, count, index..

# msg="It is Time"

# print(msg.find('T'))
# print(msg.count('T'))
# # Slice
# print(msg[:2])
# print(msg[3:5])


# 리스트

# 0으로 채워진 리스트 만들기
# a=[0]*5
# print(a)

# 0으로 채워진 이중리스트 만들기
# n=8
# m=10
# array=[[0]*m for _ in range(n)]
# print(array)

# a=[[0]*3 for _ in range(3)]

# for x in a:
#   print(x)

# for x in a:
#   for y in x:
#     print(y, end=' ')
#   print()


# i 뺀 for 단순 반복문
# for _ in range(5):
#     print('HelloWorld')

# 리스트 내장함수들

# strarr=['1','2','3']
# intarr=list(map(int,strarr))
# arr=[i for i in range(10)]
# print(arr)
# arr.sort(reverse=True)
# print(arr)
# arr.insert(2,50)
# print(arr)
# print(arr.count(4))
# print(len(arr)) #count() vs len() 다른 것!
# arr.remove(50) #arr[2]로도 삭제 가능
# print(arr)
# remove_set={3,5}
# result=[i for i in arr if i not in remove_set]
# print(result)
# 리스트끼리 빼기
# print([a-b for a,b in zip(answer,arr)])
# 값의 인덱스 찾아주는 함수
# arr.index(찾는값)

# import random as r
# arr=[1,2,3,4,5]
# r.shuffle(arr)
# print(arr)
# arr.sort(reverse=True)
# print(arr)

# Linked List
# Node 정의
# class Node:
#   def __init__(self,data,next=None):
#     self.data=data
#     self.next=next

# node1= Node(1)
# print(node1.data)
# print(node1.next)
# node2=Node(2)
# node1.next=node2
# # 가장 맨 앞 Node를 알기 위해 head 지정
# head=node1
# print(node1.next.data)
# print(node1.next)


# 튜플

# x=[12,34,45,67,78]
# for i in enumerate(x):
#   print(i)

# a=[23,12,36,53,19]
# b=(1,2,3,4,5)
# print(b[0])

# for x in enumerate(b):
#   print(x[0],x[1])
# for index, value in enumerate(a):
#   print(index,value)


# 튜플 정렬하기

# 첫 번째 원소로 오름차순 정렬, 내림차순 정렬
# arr.sort(key = lambda x : x[0])
# arr.sort(key = lambda x : -x[0])
# 두 번째 원소로 오름차순 정렬, 내림차순 정렬
# arr.sort(key = lambda x : x[1])
# arr.sort(key = lambda x : -x[1])

# # all -> 모두 충족됐을 때
# if all(60>x for x in a):
#   print("YES")
# else:
#   print("NO")

# # any -> 한 개만 충족되어도
# if any(15>x for x in a):
#   print("YES")
# else:
#   print("NO")

# 힙큐 heap

import heapq
# item을 heap에 추가
# heapq.heappush(heap,item)
# heap에서 가장 작은 원소를 pop $ return 비어있는경우 indexError
# heapq.heappop(heap)
# 리스트 x를 즉각적으로 heap으로 변환함
# heapq.heapify(x)

# 람다함수 (익명의 함수, 람다 표현식)


# arr.sort(key=lambda x:x[0]) 첫번째 원소 기준
# arr.sort(key=lambda x:x[1]) 두번째 원소 기준
# 내림차순은 -x[0], -x[1]

# def plus_one(x):
#   return x+1
# print(plus_one(1))

# plus_two = lambda x: x+2
# print(plus_two(1))

# a=[1,2,3]
# print(list(map(plus_one, a)))
# print(list(map(lambda x: x+1, a)))

# 사전자료형 hash(key, value)

# data=dict()
# data['사과']='apple'
# data['바나나']='banana'
# data['코코넛']='coconut'
# print(data)
# data2={
#     '사과':'apple',
#     '바나나':'banana',
#     '코코넛':'coconut'
# }
# print(data.keys())
# print(data.values())
# print(list(data.keys()))
# print(list(data.values()))
# 집합 자료형(중복x)
# data=set([1,1,1,2,3,4,4,5,6])
# print(data)

# 문자열 입력받아서 숫자로 바꿔서 출력
# a=list(map(int,input().split()))
# print(a)

# answer=133
# print("정답은"+str(answer)+"입니다.")
# print(f"정답은{answer}입니다")

# 조건문 몰랐던 기능
# x=15
# y=[14,15,16]
# if 0<x<=15:
#     pass
# print(x in y)
# print(x not in y)

# 파이썬의 def 함수에는 반환타입을 명시하지 않아도 됨
# 전역변수를 함수에 사용할때 global 붙여줌
# a=4
# def func():
#     global a
#     a+=1
# for _ in range(5):
#     func()
# print(a)

# return 값 여러개 가능
# def operator(a,b):
#     add=a+b
#     sub=a-b
#     mul=a*b
#     div=a/b
#     return add,sub,mul,div
# a,b,c,d=operator(6,4)
# print(a,b,c,d)

# 람다
# print((lambda a,b:a+b)(3,7))
# array=[('홍길동',50),('이순신',32),('아무개',74)]
# def my_key(x):
#     return x[1]
# print(my_key(array))
# print(sorted(array,key=my_key))
# print(sorted(array,key=lambda x:x[1]))
# list1=[1,2,3,4,5]
# list2=[6,7,8,9,10]
# result=map(lambda a,b:a+b,list1,list2)
# print(list(result))

# 자주 사용되는 라이브러리
# array=[('홍길동',50),('이순신',32),('아무개',74)]
# result=sorted(array,key=lambda x:x[1],reverse=True)
# print(result)
# 순열 조합 counter 최대공약수
# from itertools import permutations, combinations
# data=['A','B','C']
# result=list(permutations(data,3))
# print(result)
# result=list(combinations(data,2))
# print(result)
# from collections import Counter
# counter=Counter(['red','blue','red','green','blue','blue'])
# print(counter['blue'])
# print(counter['green'])
# print(dict(counter))
# import math
# print(math.gcd(12,32))
