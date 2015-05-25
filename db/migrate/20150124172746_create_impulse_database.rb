class CreateImpulseDatabase < ActiveRecord::Migration
  def change
    create_table :impulse_databases do |t|
      t.integer :property_id
      t.string :property_type
      t.float :budget
      t.integer :number_of_rooms
      t.string :city
      t.string :locality
      t.integer :contact_number
      t.date :posted_on
    end
  end
end