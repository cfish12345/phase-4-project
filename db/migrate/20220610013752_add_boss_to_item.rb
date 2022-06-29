class AddBossToItem < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :boss_id, :integer
  end
end
