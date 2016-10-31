class UpdateBenchesTable < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :image_url, :string
    add_column :benches, :rating, :integer
  end
end
