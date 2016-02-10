require_relative 'spec_helper'
require_relative '../lib/Cd'

describe Cd do

  before(:context) do
    #initlize item
    @cd = Cd.new 12, "Nirvana", 120
  end

  #check initialization
  #check that it is an extended from Item
  #check that it is an instance of Cd
  describe "initialization" do
    it "is an instance of the Cd class" do
    expect(@cd).to be_instance_of(Cd)
    end
    it "is an extended from Item superclass" do
    expect(@cd).to be_kind_of(Item)
    end
  end
  
  #check getters and setters
  describe "accessors" do
    it "should be able to set number of tracks" do
    expect(@cd.tracks).to eq(12)
  end
    it "should be able to set artist" do
    expect(@cd.artist).to eq("Nirvana")
  end
    it "should be able to set run time" do
    expect(@cd.run_time).to eq(120)
  end
end
end