class Boss < ApplicationRecord
    has_many :items

    def name_location
        print "You can find #{self.name} inside of the #{self.location}."
    end
end
