# db/seeds.rb
roles = ['Admin', 'Organizer', 'Attendee']

roles.each do |role_name|
  Role.create(name: role_name)
end