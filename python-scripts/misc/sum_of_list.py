#calculates sum of a specified number of integers 

user_input_list = []

n = int(input("How many numbers would you like to add?"))
#asks user input, updates number position, appends number to list
def gather_list_from_input(i = 1):
    print("Enter number", i + 1, end="")
    user_input = int(input(":"))
    user_input_list.append(user_input)
#calls the user input funtion based on how many numbers user specified
def add_list_function(n):
    for i in range(n):
        gather_list_from_input(i)
        print(user_input_list)
#adds the elements of list together producing a sum
def get_list_sum(user_input_list):
    x = 0
    for element in user_input_list:
        x = x + element
    print("The sum of", user_input_list, "is", x)
      
        
add_list_function(n)
get_list_sum(user_input_list)

