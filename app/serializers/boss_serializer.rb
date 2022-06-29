class BossSerializer < ActiveModel::Serializer
    attributes :id, :name, :image_url, :killcount

    has_many :items
end