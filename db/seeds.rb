# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
demo = User.create!(email: 'demo@email.com', password: 'password', first_name: 'Lynn', last_name: 'Hill', company_name: 'App Academy' )

climb = Category.create!(name:'Climb')
ski = Category.create!(name: 'Ski & Ride')
snowhelmets = Category.create!(name: 'Snow Helmets', parent_id: ski.id)
rock_protection = Category.create!(name: 'Rock Protection', parent_id: climb.id)
shoes = Category.create!(name: 'Shoes', parent_id: climb.id)
helmets = Category.create!(name: 'Helmets', parent_id: climb.id)
ice_and_alpine = Category.create!(name: 'Ice & Alpine', parent_id: climb.id)
jackets = Category.create!(name: 'Jackets', parent_id: ski.id)
cpacks = Category.create!(name: 'Climbing Packs & Packpacks', parent_id: climb.id)
packs = Category.create!(name: 'Packs', parent_id: climb.id)


accesories = Category.create!(name: 'Accessories', parent_id: ski.id)
tents = Category.create!(name: 'Tents')
harnesses = Category.create!(name: 'Harnesses', parent_id: climb.id)
footware = Category.create!(name: 'Footware')

winter = Collection.create!(name: 'Winter',activity: true)
CollectionCategory.create!(collections_id: winter.id, categories_id: ski.id)
CollectionCategory.create!(collections_id: winter.id, categories_id: ice_and_alpine.id)
# CollectionCategory.create!(collections_id: winter.id, categories_id: jackets.id)

climbing = Collection.create!(name: 'Climbing', activity: true)
CollectionCategory.create!(collections_id: climbing.id, categories_id: rock_protection.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: shoes.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: helmets.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: harnesses.id)
equipment = Collection.create!(name: 'Equipment')
CollectionCategory.create!(collections_id: equipment.id, categories_id: climb.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: ice_and_alpine.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: ski.id)

CollectionCategory.create!(collections_id: equipment.id, categories_id: tents.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: footware.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: cpacks.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: harnesses.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: snowhelmets.id)

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





impulse= Item.create(name:'Impulse 112 Skis',
description:'Built for freeriders who love playful, deep-snow performance yet demand control when launching down steep, aggressive lines, the Impulse 112’s are the big guns you want on a storm day. Wide-waisted at 112-mm, these skis are floaty for deep conditions, while the playful turning radius keeps them nimble for lines that require confidence and accuracy. Their flat, solid-core construction adds torsional stiffness and provides premium power transmission, dampness and stability to hold fast while charging on harder snow. Austrian-made with pre-preg fiberglass and an engineered poplar core, The Impulse 112 is built for the progressive freerider looking to get after it.',
price:799.95)

c4_0_3 = Item.create!(name: 'C4 #0.3',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95)
file1 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.3.webp')
c4_0_3.photo.attatch(io: file1, filename:'C4-0.3.webp')

c4_0_4 = Item.create!(name: 'C4 #0.4',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95)
file1 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.4.webp')
c4_0_4.photo.attatch(io: file1, filename:'C4-0.4.webp')

c4_0_5 = Item.create!(name: 'C4 #0.5',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95)
file1 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.5.webp')
c4_0_5.photo.attatch(io: file1, filename:'C4-0.5.webp')

c4_0_75 = Item.create!(name: 'C4 #0.75',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95)
file1 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.75.webp')
c4_0_75.photo.attatch(io: file1, filename:'C4-0.75.webp')



# make demo kuser in seeds
#push asap auth to heroku
#add optional parent fk columun to categories
# work on getting all info to front end. 
#