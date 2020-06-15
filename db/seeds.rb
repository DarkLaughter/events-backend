# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all
UserEvent.destroy_all

puts "creating users"
User.create(name: "Brandon", contact: "brandon@", username:"brandonk", password:"pass123")
User.create(name: "Ramon", contact: "ramon@", username:"ramone", password:"pass123")
    
35.times do 
    User.create(name: Faker::Name.name, contact: Faker::Internet.safe_email, username: Faker::Internet.username, password:"pass123", img_url: Faker::Avatar.image, bio:Faker::Quote.famous_last_words)
end 

puts "creating events"

10.times do
    Event.create(title: Faker::WorldCup.stadium, date: Faker::Date.forward(days: 14) , content: Faker::Hipster.sentences )
    Event.create(title: Faker::Esport.event, date: Faker::Date.forward(days: 14) , content: Faker::Hipster.sentences )
    Event.create(title: Faker::University.name , date: Faker::Date.forward(days: 14) , content: Faker::Hipster.sentences )
    Event.create(title: Faker::Restaurant.name, date: Faker::Date.forward(days: 14) , content: Faker::Hipster.sentences )
end

puts "creating user_events"

50.times do
    UserEvent.create(user_id: User.all.sample.id, event_id: Event.all.sample.id)
end