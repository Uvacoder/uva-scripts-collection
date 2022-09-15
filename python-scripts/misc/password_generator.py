from random import choice

string_for_password = ""
#gather all ascii chars we want into a variable
ascii_for_pass = "".join(chr(c) for c in range(33, 127))
#function chooses a char, appends it to a string a number of times specified by user. returns final password string
def grab_char(n):
    pass_string = ""
    for i in range(0, n):
        char = choice(ascii_for_pass)
        pass_string += char
    return str(pass_string)
#gets user input for how many chars
how_many_chars = int(input("How long does the password need to be? "))
#store results of grab_char in variable
string_for_password = grab_char(how_many_chars)
#print results
print("The password of ", how_many_chars, " chars is: ", "\n", string_for_password, sep="")
    

    

