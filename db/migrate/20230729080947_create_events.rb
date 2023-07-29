class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :image_url
      t.string :location
      t.string :category
      t.string :start_date
      t.string :end_date
      t.integer :tickets_available

      t.timestamps
    end
  end
end
