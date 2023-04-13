# <변수와 출력함수>

import math
from itertools import permutations, combinations
import heapq
import random
from collections import Counter
import sys

a, b, c = 1, 2, 3
print("number : ", a, b, c)
print(a, b, c, sep=', ')
print(a, b, c, sep='')
print(a, b, c, sep='\n')
print(a, end=' d')

a, b = input("숫자를 입력하세요 : ").split()

c, d = map(int, input("숫자를 입력하세요 : ").split())
print(c+d)

# 거꾸로 셀 때
for i in range(10, 1, -1):
    print(i)  # [10,9,8,7,6,5,4,3,2,1]
# sep -> 구분자, 글자 사이사이에 끼어넣어줌
print('S', 'E', 'P', sep='@')
# end -> 줄바꿈을 하지 않게됨
print("I like", end=" ")
print("money")
# print(3,4) -> 쉼표로 구분해서 출력 시 띄어쓰기해서 출력됨

for i in range(5):  # [0,1,2,3,4]
    print('i:', i, sep='', end=' ')
    for j in range(5):
        print('j:', j, sep='', end=' ')
    print()

for i in range(0, 10, 2):    # 0부터 8까지 2씩 증가
    print('Hello, world!', i)

for i in range(10, 0, -1):    # 10에서 1까지 1씩 감소
    print('Hello, world!', i)

for i in reversed(range(10)):    # range에 reversed를 사용하여 숫자의 순서를 반대로 뒤집음
    print('Hello, world!', i)    # 9부터 0까지 10번 반복

# <입력 관련>

# 입력을 input() 보다 빨리 해야 하는 경우(시간초과시)
T = sys.stdin.readline().rstrip()
# -> rstrip()은 위 명령어로 받을시, '가나다\n'로 받는데,
# 개행문자 \n을 떼어주는 역할을 함.

# 최빈값을 구할 때 사용되는 함수
# [1 1 2 2 5] 면 [(1,2), (2,2), (5,1)]로 반환됨
arr = [1, 1, 2, 2, 5]
m2 = Counter(arr).most_common()
print(m2)


# <시간 복잡도>
# 1초당 2천만이라 생각하면 된다.


# <문자열 함수들>

cap = string.capitalize()  # (앞글자만)
up = string.upper()  # 전부 대문자
low = string.lower()  # 전부 소문자
isupper(), islower(), isalpha(), isdigit()  # char 검증 함수
len(string)  # 문자열 길이 반환
reverse_string = string[::-1]

# 문자열에서 특정 문자 제거
answer = my_string
for char in my_string:
    if char in 'aeiou':  # char가 'aeiou' 중 하나와 같은 문자라면
        answer = answer.replace(char, '')  # 해당 문자를 공백으로 대체

# 문자열에서 숫자만 추출
answer = 0
num = []
for char in my_string:
    if char.isdigit():  # 정수로 변환이 가능한지 true, false 반환
        num.append(char)  # list에 추가할 때는 append
for number in num:
    answer += int(number)

# 문자열의 n번째 문자 지정하기
answer = ''
alphabet = 'abcdefghij'
for char in str(age):
    answer += alphabet[int(char)]  # 문자열도 list처럼 인덱스 지정 가능

# list to string, string to list
arr = list(string)  # 문자열을 리스트로
string = ''.join(arr)  # 리스트를 문자열로

# 리스트 관련 함수들

list.index(a)  # 리스트에서 처음 a가 나오는 인덱스를 반환
reverse_arr = arr[::-1]

# find, count, index..

msg = "It is Time"

print(msg.find('T'))  # index 반환
print(msg.count('T'))  # 갯수 반환 (하나만 있는 값을 찾을 때 유용)
# # Slice
print(msg[:2])
print(msg[3:5])


# 리스트 중복 제거
unique_arr = list(set(arr))

# 리스트 복사
arr2 = arr1[:]  # 보통은 이거 쓰면 된다.

# 리스트 깊은 복사
(copy.deepcopy)
arr2 = copy.deepcopy(arr1)

# 0으로 채워진 리스트 만들기
a = [0]*5
print(a)

# 0으로 채워진 이중 리스트 만들기
n = 8
m = 10
array = [[0]*m for _ in range(n)]
print(array)

a = [[0]*3 for _ in range(3)]

for x in a:
    print(x)

for x in a:
    for y in x:
        print(y, end=' ')
    print()


# i 뺀 for 단순 반복문
for _ in range(5):
    print('HelloWorld')

# 리스트 내장함수들

strarr = ['1', '2', '3']
intarr = list(map(int, strarr))
arr = [i for i in range(10)]
print(arr)
arr.sort(reverse=True)
print(arr)
arr.insert(2, 50)
print(arr)
print(arr.count(4))
print(len(arr))  # count() vs len() 다른 것!
arr.remove(50)  # arr[2]로도 삭제 가능
print(arr)
remove_set = {3, 5}
result = [i for i in arr if i not in remove_set]
print(result)
# 리스트끼리 빼기
print([a-b for a, b in zip(answer, arr)])
# 값의 인덱스 찾아주는 함수
arr.index(찾는값)

arr = [1, 2, 3, 4, 5]
random.shuffle(arr)
print(arr)
arr.sort(reverse=True)
print(arr)

# Linked List
# Node 정의


class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


node1 = Node(1)
print(node1.data)  # 1
print(node1.next)  # None
node2 = Node(2)
node1.next = node2
# # 가장 맨 앞 Node를 알기 위해 head 지정
head = node1
print(node1.next.data)  # 2
print(node1.next)  # node2

# 튜플
# 값이 변하지 않는 리스트

x = [12, 34, 45, 67, 78]
for i in enumerate(x):  # index, value로 만들어 줌
    print(i)

a = [23, 12, 36, 53, 19]
b = (1, 2, 3, 4, 5)  # 튜플
print(b[0])  # 1

for x in enumerate(b):
    print(x[0], x[1])
for index, value in enumerate(a):
    print(index, value)


# 튜플 정렬하기

# 첫 번째 원소로 오름차순 정렬, 내림차순 정렬
arr.sort(key=lambda x: x[0])
arr.sort(key=lambda x: -x[0])
# 두 번째 원소로 오름차순 정렬, 내림차순 정렬
arr.sort(key=lambda x: x[1])
arr.sort(key=lambda x: -x[1])

# # all -> 모두 충족됐을 때
if all(60 > x for x in a):
    print("YES")
else:
    print("NO")

# # any -> 한 개만 충족되어도
if any(15 > x for x in a):
    print("YES")
else:
    print("NO")

# 힙큐 heap

# item을 heap에 추가
heapq.heappush(heap, item)
# heap에서 가장 작은 원소를 pop $ return 비어있는경우 indexError
heapq.heappop(heap)
# 리스트 x를 즉각적으로 heap으로 변환함
heapq.heapify(x)

# 람다함수 (익명의 함수, 람다 표현식)


# 첫번째 원소 기준
arr.sort(key=lambda x: x[0])
#  두번째 원소 기준
arr.sort(key=lambda x: x[1])
# 내림차순은 -x[0], -x[1]


def plus_one(x):
    return x+1


print(plus_one(1))


def plus_two(x): return x+2


print(plus_two(1))

a = [1, 2, 3]
print(list(map(plus_one, a)))
print(list(map(lambda x: x+1, a)))

# 딕셔너리 hash(key, value)

data = dict()
data['사과'] = 'apple'
data['바나나'] = 'banana'
data['코코넛'] = 'coconut'
print(data)
data2 = {
    '사과': 'apple',
    '바나나': 'banana',
    '코코넛': 'coconut'
}
print(data.keys())
print(data.values())
print(list(data.keys()))
print(list(data.values()))

# 딕셔너리에서 key로 value 찾기
dick = {key: value}
print(dick.get(key))  # value

# set 자료형 (중복x)
data = set([1, 1, 1, 2, 3, 4, 4, 5, 6])
print(data)

# 문자열 입력받아서 숫자로 바꿔서 출력
a = list(map(int, input().split()))
print(a)

answer = 133
print("정답은"+str(answer)+"입니다.")
print(f"정답은{answer}입니다")

# 조건문 몰랐던 기능
x = 15
y = [14, 15, 16]
if 0 < x <= 15:
    print(x in y)
    print(x not in y)

# 변수 타입 체크
if type(a) is int:
    print(a)
# ==를 쓰지 않고 is 사용

# 파이썬의 def 함수에는 반환타입을 명시하지 않아도 됨
# 전역변수를 함수에 사용할때 global 붙여줌
a = 4


def func():
    global a
    a += 1


for _ in range(5):
    func()
print(a)

# return 값 여러개 가능


def operator(a, b):
    add = a+b
    sub = a-b
    mul = a*b
    div = a/b
    return add, sub, mul, div


a, b, c, d = operator(6, 4)
print(a, b, c, d)

# 람다


def my_key(x):
    return x[1]


print((lambda a, b: a+b)(3, 7))
array = [('홍길동', 50), ('이순신', 32), ('아무개', 74)]

print(my_key(array))
print(sorted(array, key=my_key))
print(sorted(array, key=lambda x: x[1]))
list1 = [1, 2, 3, 4, 5]
list2 = [6, 7, 8, 9, 10]
result = map(lambda a, b: a+b, list1, list2)
print(list(result))

# 자주 사용되는 라이브러리
array = [('홍길동', 50), ('이순신', 32), ('아무개', 74)]
result = sorted(array, key=lambda x: x[1], reverse=True)
print(result)

# 순열 조합 counter 최대공약수
data = ['A', 'B', 'C']
result = list(permutations(data, 3))
print(result)
result = list(combinations(data, 2))
print(result)
counter = Counter(['red', 'blue', 'red', 'green', 'blue', 'blue'])
print(counter['blue'])
print(counter['green'])
print(dict(counter))
print(math.gcd(12, 32))
