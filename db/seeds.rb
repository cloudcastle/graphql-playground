# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(name: 'vlad.yartsev', email: 'vlad.yartsev@castle.co')

Trend.create!(name: 'First Trend', description: 'The very first thing which came into my head')
Trend.create!(name: 'Second Trend', description: 'Another thing which came into my head')