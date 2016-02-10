require 'yelp'

class MainController < ApplicationController
  def index
    @data = Yelp.client.search('Seattle', {term: "food"})
  end
end
