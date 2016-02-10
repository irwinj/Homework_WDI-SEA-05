require_relative 'Item.rb'
class Book < Item
  attr_accessor :pages, :author

    def initialize pages, author
        super(name,price)
        @pages = pages
        @author = author
    end
end

b = Book.new "Book Title", 12.99
puts b.price
puts b.pages = 33
puts b.author = "Author Name"