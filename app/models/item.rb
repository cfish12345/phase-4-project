class Item < ApplicationRecord
    belongs_to :boss
    belongs_to :account

    def has_item
        if self.has_drop == false
            self.update(has_drop: true)
        else
            print "You already have a #{self.title}!"
        end
    end
end
