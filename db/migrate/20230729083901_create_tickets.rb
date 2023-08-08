class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.references :user, null: false 
      t.references :event, null: false
      t.integer :price
      t.string :status

      t.timestamps
    end
  end
end
