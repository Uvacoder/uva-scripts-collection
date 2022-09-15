# for loop finds and replaces 0 with x
zeroes_replaced = ""
user_integer = input("Enter an integer to have its zeroes removed:")
print("You entered:", user_integer)
for digit in user_integer:
    if digit == "0":
        zeroes_replaced = zeroes_replaced + "x"
        continue
    zeroes_replaced = zeroes_replaced + digit
print("With zeroes replaced:", zeroes_replaced)
