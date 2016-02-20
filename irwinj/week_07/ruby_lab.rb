def p_times(message, num)
	num.times do
		puts message
	end
end

def letter_count(string)
	letter_hash = {}

	string.downcase.each_char.each do |letter|
		if letter_hash[letter]
	end
end

p_times("Hello there", 5) #function call


##puts letter_count("This is my string and it is great!")

def mock_me
	mock = "Enter something"
	answer = gets.chomp

	if answer == "quit" || answer == "q"
		return
	else
		puts answer
		mock_me
	end
end

def print_contacts(contacts)
	contacts.each do | contact, phone |
		puts "#{contact} has a phone number of #{phone}"
	end
end



contacts = {
	:Jonathan => "217-444-3333",
	
}