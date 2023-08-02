class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :image_url
      t.string :location
      t.string :category
      t.string :start_date
      t.string :end_date
      t.integer :vip_tickets_available
      t.integer :regular_tickets_available


      t.timestamps
    end
  end
end
