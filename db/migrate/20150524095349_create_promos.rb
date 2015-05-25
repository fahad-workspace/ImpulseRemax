class CreatePromos < ActiveRecord::Migration
  def change
    create_table :promos do |t|
      t.string :promo_heading
      t.string :promo_content
      t.string :promo_extra_content
      t.string :promo_number
      t.integer :promo_priority

      t.timestamps null : false
    end
  end
end
