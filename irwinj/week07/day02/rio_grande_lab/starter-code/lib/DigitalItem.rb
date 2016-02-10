require_relative 'Item.rb'

class DigitalItem < Item
    attr_reader :quantity
    attr_accessor :name, :price, :description, :download_size

    def initialize name, price, download_size = 0
        @name = name
        @price = price
        @quantity = 1
        @description = ""
        @download_size = download_size
    end

    def sell amount
        if @quantity >= amount
            @quantity = 1
            true
        else
            false
        end
    end

    def stock amount
        @quantity = 1
        true
    end

    def return amount
        @quantity = 1
        true
    end

    def ship_price
        @weight == -1
        false
    end
end