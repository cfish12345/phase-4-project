class ItemSerializer < ActiveModel::Serializer
    attributes :id, :title, :image_url, :rarity, :has_drop, :boss_id

    belongs_to :boss
end