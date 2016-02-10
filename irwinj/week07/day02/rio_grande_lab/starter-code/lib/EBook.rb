require_relative 'DigitalItem.rb'

class EBook < DigitalItem
  attr_accessor :pages, :author

  def initialize(pages, author)
    super(name, price)
    @pages = pages
    @author = author
  end
end