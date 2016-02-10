# challenge 1 - Calculator

def add(num1, num2)
  num1.to_i + num2.to_i
end

def sub(num1, num2)
  num1.to_i - num2.to_i
end

def mult(num1, num2)
  num1.to_i * num2.to_i
end

def div(num1, num2)
  num1.to_i / num2.to_i
end

def calculator
  puts "What calculation would you like to do? (add, sub, mult, div)?"
  user_input = gets.chomp
  if user_input == "add"
    puts "What is number 1?"
    num1 = gets.chomp
    puts "What is number 2?"
    num2 = gets.chomp
    puts "Your result is #{add(num1, num2)}"
  elsif user_input == "sub"
    puts "What is number 1?"
    num1 = gets.chomp
    puts "What is number 2?"
    num2 = gets.chomp
    puts "Your result is #{sub(num1, num2)}"
  elsif user_input == "mult"
    puts "What is number 1?"
    num1 = gets.chomp
    puts "What is number 2?"
    num2 = gets.chomp
    puts "Your result is #{mult(num1, num2)}"
  elsif user_input == "div"
    puts "What is number 1?"
    num1 = gets.chomp
    puts "What is number 2?"
    num2 = gets.chomp
    puts "Your result is #{div(num1, num2)}"
  else
    puts "Please input a valid input (add, sub, mult, div)"
    calculator
  end
end

# calculator

# challenge 2 - reverse a string

def reverseString 
  array = []

  puts "Enter in a string"
  user_input = gets.chomp

  i = user_input.length

  while i >= 0 do
    array.push user_input[i]
    i -= 1
  
  end

  puts "#{array.join}"
end

# reverseString

# challenge 3 - Bank transactions

def bankTransactions
  currentBalance = 5000

  def deposit(currentBalance)
    puts "How much would you like to deposit?"
    user_input = gets.chomp.to_i
    currentBalance += user_input
    puts "Success! You deposited #{user_input}. Your current balance is #{currentBalance}. Are you done?"
    next_input = gets.chomp
    if next_input == "yes"
      puts "Thanks!"
    else next_input == "no"
      bankTransactions
    end
  end 


  def withdraw(currentBalance)
    puts "How much would you like to withdraw?"
    user_input = gets.chomp.to_i
    if currentBalance > user_input
      currentBalance -= user_input
      puts "Success! Your current balance is #{currentBalance}"
    else
      puts "I'm sorry you don't have enough to withdraw that amount. Your current balance is #{currentBalance}. Are you done?"
      next_input = gets.chomp
      if next_input == "yes"
        puts "Thanks!"
      else next_input == "no"
        bankTransactions
      end
    end
  end

  puts "What would you like to do? (display balance, withdraw, or deposit)"
  user_input = gets.chomp
  if user_input == "display balance"
    puts "Your current balance is #{currentBalance}"
  elsif user_input == "withdraw"
    withdraw(currentBalance)
  elsif user_input == "deposit"
    deposit(currentBalance)
  else 
    puts "Invalid input, please choose from the following (display balance, withdraw, or deposit"
  end
end


# bankTransactions

# challenge 4 - Guessing Game

def guessNumber
  count = 0
  number = rand(100)
  puts "Guess a number between 1 and 100"
  user_input = gets.chomp.to_i
  count += 1
  until user_input == number
    if user_input > number
      puts "The number is lower than #{user_input}. Guess again."
      count += 1
    elsif user_input < number
      puts "The number is higher than #{user_input}. Guess again."
      count += 1
    end
    user_input = gets.chomp.to_i
    if user_input == number
      puts "You got it in #{count} tries"
    end
  end
end

#guessNumber

# challenge 5 - Class List

def classList
  list = []
  finished = false

  while !finished
    puts "Would you like to add another student?"
    user_input = gets.chomp
    if user_input == "yes"
      puts "What is the student's name?"
      next_input = gets.chomp
      list.push(next_input)
      puts "Here is a summary of your student array: #{list}."
    elsif user_input == "no"
      puts "Here is a summary of your student array: #{list}." 
      list.each_with_index {|value, index|
        puts "The student at index #{index} is #{value}"
      }
      finished = true
    end
  end
end

# classList



    
