class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :image_url
      t.string :rarity
      t.boolean :has_drop

      t.timestamps
    end
  end
end
