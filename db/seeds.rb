# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ski = Category.create!(name: 'Ski')
snowboard = Category.create!(name: 'Snowboard')
rock_protection = Category.create!(name: 'Rock Protection')
shoes = Category.create!(name: 'Shoes')
helmets = Category.create!(name: 'Helmets')
jackets = Category.create!(name: 'Jackets')
packs = Category.create!(name: 'Packs')
accesories = Category.create!(name: 'Accessories')
tents = Category.create!(name: 'Tents')
harnesses = Category.create!(name: 'Harnesses')
footware = Category.create!(name: 'Footware')
ice_and_alpine = Category.create!(name: 'Ice & Alpine')

winter = Collection.create!(name: 'Winter')
CollectionCategory.create!(collections_id: winter.id, categories_id: snowboard.id)
CollectionCategory.create!(collections_id: winter.id, categories_id: ski.id)
CollectionCategory.create!(collections_id: winter.id, categories_id: ice_and_alpine.id)
CollectionCategory.create!(collections_id: winter.id, categories_id: jackets.id)
climbing = Collection.create!(name: 'Climbing')
CollectionCategory.create!(collections_id: climbing.id, categories_id: rock_protection.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: shoes.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: helmets.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: harnesses.id)
mens = Collection.create!(name: "Men's")
CollectionCategory.create!(collections_id: mens.id, categories_id: harnesses.id)
CollectionCategory.create!(collections_id: mens.id, categories_id: jackets.id)
CollectionCategory.create!(collections_id: mens.id, categories_id: footware.id)
CollectionCategory.create!(collections_id: mens.id, categories_id: packs.id)
CollectionCategory.create!(collections_id: mens.id, categories_id: shoes.id)
womens = Collection.create!(name: "Women's")
CollectionCategory.create!(collections_id: womens.id, categories_id: harnesses.id)
CollectionCategory.create!(collections_id: womens.id, categories_id: jackets.id)
CollectionCategory.create!(collections_id: womens.id, categories_id: footware.id)
CollectionCategory.create!(collections_id: womens.id, categories_id: packs.id)
CollectionCategory.create!(collections_id: womens.id, categories_id: shoes.id)

camping = Collection.create!(name: "Camping")

CollectionCategory.create!(categories_id: tents.id, collections_id: camping.id)
CollectionCategory.create!(categories_id: packs.id, collections_id: camping.id)
CollectionCategory.create!(categories_id: footware.id, collections_id: camping.id)
CollectionCategory.create!(categories_id: jackets.id, collections_id: camping.id)




Item.create(name:'Impulse-112-Skis',description:'Built for freeriders who love playful, deep-snow performance yet demand control when launching down steep, aggressive lines, the Impulse 112’s are the big guns you want on a storm day. Wide-waisted at 112-mm, these skis are floaty for deep conditions, while the playful turning radius keeps them nimble for lines that require confidence and accuracy. Their flat, solid-core construction adds torsional stiffness and provides premium power transmission, dampness and stability to hold fast while charging on harder snow. Austrian-made with pre-preg fiberglass and an engineered poplar core, The Impulse 112 is built for the progressive freerider looking to get after it.',price:799.95)
