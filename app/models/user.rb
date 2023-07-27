class User < ApplicationRecord




    # fields
    validates :email, presence: true, uniqueness: true
    validates :username, presence: true, uniqueness: true
end
