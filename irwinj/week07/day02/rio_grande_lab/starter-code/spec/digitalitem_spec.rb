require_relative 'spec_helper'
require_relative '../lib/DigitalItem'

describe DigitalItem do 
  
  before(:context) do
    #initialize item
    @digitalItem = DigitalItem.new("Digital Item",1.99)
    @digitalItem2 = DigitalItem.new("name",1.99,4)
  end
  
  describe "Initialization" do
    it "is an instance of the digital item class" do
    expect(@digitalItem).to be_instance_of(DigitalItem)
    end
    it "is assigned a name" do
      expect(@digitalItem.name).to eq("Digital Item")
    end
    it "is assigned a price" do
      expect(@digitalItem.price).to eq(1.99)
    end
    it "should assign quantity to 1" do
      expect(@digitalItem.quantity).to eq(1)
    end
    it "is an instance of the digital item class" do
      expect(@digitalItem2).to be_instance_of(DigitalItem)
    end
    it "is assigned a name" do
      expect(@digitalItem2.name).to eq("name")
    end
    it "is assigned a price" do
      expect(@digitalItem2.price).to eq(1.99)
    end
    it "should assign download size to 4" do
      expect(@digitalItem2.download_size).to eq(4)
    end
  end

  describe "Accessors" do
    it "should be able to get quantity" do
      expect(@digitalItem.quantity).to eq(1)
    end
    it "should be able to get and set name" do
      @digitalItem.name="New Name"
      expect(@digitalItem.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @digitalItem.price=44.99
      expect(@digitalItem.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@digitalItem.description).to eq("")
      @digitalItem.description="test"
      expect(@digitalItem.description).to eq("test")
    end  
    it "should be able to get and set download size but default to 0" do
      expect(@digitalItem.download_size).to eq(0)
      @digitalItem2.download_size = 4
      expect(@digitalItem2.download_size).to eq(4)
    end  
  end
  describe "methods" do
    it "should not decrease when sold" do
      result = @digitalItem.sell 1
      expect(result).to eq(true)
      expect(@digitalItem.quantity).to eq(1)
    end
    it "should not stock more when stocked" do
      result = @digitalItem.stock 1
      expect(result).to eq(true)
      expect(@digitalItem.quantity).to eq(1)
    end
    it "should not increase when item is returned" do
      result = @digitalItem.return 1
      expect(result).to eq(true)
      expect(@digitalItem.quantity).to eq(1)
    end
    it "should return false when ship_price is used" do
      expect(@digitalItem.ship_price).to eq(false)
    end
  end
end
