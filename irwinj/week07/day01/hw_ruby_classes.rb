# class SuperHero
#   def initialize first_name, last_name
#     @first_name = first_name
#     @last_name = last_name
#   end
#   def super_punch
#     puts "#{@first_name} #{@last_name}: WHAM!"
#     self
#   end
# end

# superman_alias = {
#   :first_name => "Clark",
#   :last_name => "Kent"
# }

# superman = SuperHero.new superman_alias[:first_name], superman_alias[:last_name]
# superman.super_punch

class Robot
  def intialize name, purpose
    @name = name
    @purpose = purpose
  end

  def greet
    "Beep Boop" 
  end
end

Robot.new("Joker", "Destroy")
puts Joker.greet