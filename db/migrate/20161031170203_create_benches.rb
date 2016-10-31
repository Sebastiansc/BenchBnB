class CreateBenches < ActiveRecord::Migration[5.0]
  def change
    create_table :benches do |t|
      t.text :description, null: false
      t.integer :lat, null: false
      t.integer :lng, null: false
    end
  end
end
