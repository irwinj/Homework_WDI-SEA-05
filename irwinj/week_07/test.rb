#This is a comment
my_var = "Sean"

MY_CONTANT = 25

#Data Types

my_false_var = nil
my_boolean = true
my_fix_num = 45
my_big_num = 2983497234234
my_float = 65.7
my_string = "This string is this"

sean.name

my_key = "name"

sean[: + ":name"]

sean[my_key.to_sym]

#mutators
my_array = [1, 6, 7, 4, 9]
my_array.sort

my_array.sort!
#sorts the array, then sets the new value to the variable
my_array.reverse!

#typecasting

My_new_int = "6".to_i #converts a string to an integer
my_new_string = 456.to_s

my_range = (1..50).to_a
my_range.to_a #a means array

#code blocks
x = 0
until x > 10 do
	puts x
	x += 1
end

10.times { puts "Hello" }

#string interpolation
name = "Sean"

puts "#{name} is awesome!"  #how we call a variable in a string, like name + "is awesome!"

# control flow

my_var = 5

if my_var < 10
	puts "Less than 10"
elsif my_var == 7
	puts "Lucky number!!"
else
	puts "More than 10"



my_func
def sum(num1, num2)
	num1 + num2
end

#input/output
puts "My String", "My other string"

