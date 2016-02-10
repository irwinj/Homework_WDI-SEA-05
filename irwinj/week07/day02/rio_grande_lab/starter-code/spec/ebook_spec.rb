require_relative 'spec_helper'
require_relative '../lib/EBook'

describe EBook do

  before(:context) do
    @ebook = EBook.new 250, "Frank Herbert"
  end

  describe "initialization" do
    it "should be an instance of EBook class" do
      expect(@ebook).to be_instance_of(EBook)
    end
    it "is an extended from digital item superclass" do
      expect(@ebook).to be_kind_of(DigitalItem)
    end
  end

  describe "accessors" do
    it "should be able to set pages" do
      expect(@ebook.pages).to eq(250)
    end
    it "should be able to set author" do
      expect(@ebook.author).to eq("Frank Herbert")
    end
  end
end