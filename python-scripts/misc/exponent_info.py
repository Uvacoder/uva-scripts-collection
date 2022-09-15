#quick exponent finder, gives info about the resulting number. 
import math
#user input for base number
base_integer = int(input("Enter a number:"))
#exponent
exponent_integer = int(input("Enter the exponential factor:"))
#the math for exponential multiplication
powered_integer = int(math.pow(base_integer, exponent_integer))
#print results 
print(base_integer, "to the power of", exponent_integer, "is", powered_integer)
#put in this switch to demonstrate its concept
switch =""
#get the length of the integer
int_length = (len(str(powered_integer)))
#math to find even or odd
if powered_integer % 2:
   switch = "odd"
else:
   switch = "even"
#this is where the switch is, in this output. 
print("It is an", switch, "number with a length of", int_length)
#find half of number with floor division, and classic
print("Half of", powered_integer, "is", powered_integer // 2, "with floor division. Classic division is:", powered_integer / 2)
#calculate square root
print("The square root of", powered_integer, "is", math.sqrt(powered_integer))
#covert integer to binary
print("In binary", powered_integer, "is", format(powered_integer, '08b'))
