class User < ApplicationRecord
    

    has_many :tickets

    # fields
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
end
