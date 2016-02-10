require_relative 'spec_helper'
require_relative '../lib/Bluray'

describe Bluray do

  before(:context) do
    @bluray = Bluray.new 120, "Steven Spielberg", "George Lucas"
  end

  #check initialization
  #check that it is an extended from Item
  #check that it is an instance of Bluray
  describe "initialization" do
    it "is an instance of the Bluray class" do
    expect(@bluray).to be_instance_of(Bluray)
    end
    it "is an extended from Item superclass" do
    expect(@bluray).to be_kind_of(Item)
    end
  end
  
  #check getters and setters
  describe "Accessors" do
    it "should be able to set run time" do
    expect(@bluray.run_time).to eq(120)
  end
    it "should be able to set director" do
    expect(@bluray.director).to eq("Steven Spielberg")
  end
    it "should be able to set producer" do
    expect(@bluray.producer).to eq("George Lucas")
  end
end

end