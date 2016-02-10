require_relative 'spec_helper'
require_relative '../lib/Book'

describe Book do

  before(:context) do
    #initiallize item
    @book = Book.new 545, "J.K. Rowling"
  end

  #check initialization
  #check that it is an extended from Item
  #check that it is an instance of Book
  describe "initialization" do
    it "is an instance of the Book class" do
    expect(@book).to be_instance_of(Book)
    end
    it "is an extended from Item superclass" do
    expect(@book).to be_kind_of(Item)
    end
  end
  
  #check getters and setters
  describe "Accessors" do
    it "should be able to set pages" do
    expect(@book.pages).to eq(545)
  end
    it "should be able to set author" do
    expect(@book.author).to eq("J.K. Rowling")
  end
end

end