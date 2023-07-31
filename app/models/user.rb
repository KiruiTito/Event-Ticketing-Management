class User < ApplicationRecord
    belongs_to :role

    has_many :tickets

    # fields
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
end
