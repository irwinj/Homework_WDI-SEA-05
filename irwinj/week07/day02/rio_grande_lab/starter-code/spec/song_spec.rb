require_relative 'spec_helper'
require_relative '../lib/Song'

describe Song do

  before(:context) do
    @song = Song.new 120, "Jay-Z"
  end

  describe "initialization" do
    it "should be an instance of song class" do
      expect(@song).to be_instance_of(Song)
    end
    it "is an extended from digital item superclass" do
      expect(@song).to be_kind_of(DigitalItem)
    end
  end

  describe "accessors" do
    it "should be able to set run time" do
      expect(@song.run_time).to eq(120)
    end
    it "should be able to set artist" do
      expect(@song.artist).to eq("Jay-Z")
    end
  end
end