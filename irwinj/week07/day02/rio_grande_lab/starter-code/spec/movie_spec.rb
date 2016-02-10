require_relative 'spec_helper'
require_relative '../lib/Movie'

describe Movie do

  before(:context) do
    @movie = Movie.new 120, "Richard Donner", "Steven Spielberg"
  end

  describe "initialization" do
    it "should be an instance of Movie class" do
      expect(@movie).to be_instance_of(Movie)
    end
    it "is an extended from digital item superclass" do
      expect(@movie).to be_kind_of(DigitalItem)
    end
  end

  describe "accessors" do
    it "should be able to set run time" do
      expect(@movie.run_time).to eq(120)
    end
    it "should be able to set director" do
      expect(@movie.director).to eq("Richard Donner")
    end
    it "should be able to set producer" do
      expect(@movie.producer).to eq("Steven Spielberg")
    end
  end
end