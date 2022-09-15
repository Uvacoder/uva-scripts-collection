import time

seconds_to_rest = int(input("How many seconds would you like to rest?:")) 
print("Resting", end="")
for i in range (0, seconds_to_rest):
    print(".", end="")
    time.sleep(1)
print("\nRested", seconds_to_rest, "seconds")
    