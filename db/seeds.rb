# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

demo = User.create!(email: 'demo@email.com', password: 'password', first_name: 'Lynn', last_name: 'Hill', company_name: 'App Academy' )

climb = Category.create!(name:'Climb', image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/climb.jpg')

ski = Category.create!(name: 'Ski & Ride', image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/ski.jpg' )


rock_protection = Category.create!(name: 'Rock Protection', parent_id: climb.id,image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image6.jpg')
# shoes = Category.create!(name: 'Shoes', parent_id: climb.id)
helmets = Category.create!(name: 'Helmets', parent_id: climb.id, image_url: 'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image1.jpg')
ice_and_alpine = Category.create!(name: 'Ice & Alpine', parent_id: climb.id, image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/category7.JPG')
jackets = Category.create!(name: 'Jackets', parent_id: ski.id, image_url: 'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image4.jpg')
cpacks = Category.create!(name: 'Climbing Packs & Packpacks', parent_id: climb.id, image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/packs.jpg')
packs = Category.create!(name: 'Packs', parent_id: climb.id, image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image2.jpg')
womenspacks  = Category.create!(name: 'Packs',  image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image5.jpg')
womensjackets = Category.create!(name: 'Jackets',  image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image10.JPG')
mensjackets = Category.create!(name: 'Jackets',  image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/climbhike.JPG')
accesories = Category.create!(name: 'Accessories', image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image3.jpg')
tents = Category.create!(name: 'Tents', image_url: 'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image18.jpg')
harnesses = Category.create!(name: 'Harnesses', parent_id: climb.id, image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image9.JPG')
headlamps = Category.create!(name: 'Lighting', image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/category7.JPG')
menspacks  = Category.create!(name: 'Packs',  image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image5.jpg')

winter = Collection.create!(name: 'Winter',activity: true, image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/sunset.jpg')
CollectionCategory.create!(collections_id: winter.id, categories_id: ski.id)
CollectionCategory.create!(collections_id: winter.id, categories_id: ice_and_alpine.id)
# CollectionCategory.create!(collections_id: winter.id, categories_id: jackets.id)

climbing = Collection.create!(name: 'Climbing', activity: true, image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/bannerimages/image7.jpg')
CollectionCategory.create!(collections_id: climbing.id, categories_id: rock_protection.id)

CollectionCategory.create!(collections_id: climbing.id, categories_id: helmets.id)
CollectionCategory.create!(collections_id: climbing.id, categories_id: harnesses.id)
equipment = Collection.create!(name: 'Equipment')
CollectionCategory.create!(collections_id: equipment.id, categories_id: climb.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: ice_and_alpine.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: ski.id)

CollectionCategory.create!(collections_id: equipment.id, categories_id: tents.id)

CollectionCategory.create!(collections_id: equipment.id, categories_id: cpacks.id)
CollectionCategory.create!(collections_id: equipment.id, categories_id: harnesses.id)


mens = Collection.create!(name: "Men's")
CollectionCategory.create!(collections_id: mens.id, categories_id: harnesses.id)
CollectionCategory.create!(collections_id: mens.id, categories_id: mensjackets.id)

CollectionCategory.create!(collections_id: mens.id, categories_id: menspacks.id)

womens = Collection.create!(name: "Women's")
CollectionCategory.create!(collections_id: womens.id, categories_id: harnesses.id)
CollectionCategory.create!(collections_id: womens.id, categories_id: womensjackets.id)

CollectionCategory.create!(collections_id: womens.id, categories_id: womenspacks.id)


camping = Collection.create!(name: "Camping")

CollectionCategory.create!(categories_id: tents.id, collections_id: camping.id)
CollectionCategory.create!(categories_id: menspacks.id, collections_id: camping.id)
CollectionCategory.create!(categories_id: accesories.id, collections_id: camping.id)

# impulse= Item.create(name:'Impulse 112 Skis',
# description:'Built for freeriders who love playful, deep-snow performance yet demand control when launching down steep, aggressive lines, the Impulse 112’s are the big guns you want on a storm day. Wide-waisted at 112-mm, these skis are floaty for deep conditions, while the playful turning radius keeps them nimble for lines that require confidence and accuracy. Their flat, solid-core construction adds torsional stiffness and provides premium power transmission, dampness and stability to hold fast while charging on harder snow. Austrian-made with pre-preg fiberglass and an engineered poplar core, The Impulse 112 is built for the progressive freerider looking to get after it.',
# price:799.95,
# image_url:'')

c4_0_3 = Item.create!(name: 'C4 #0.3',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.3.webp')
CategoryItem.create!(items_id: c4_0_3.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_0_3.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_0_3.id, categories_id: ice_and_alpine.id)

c4_0_4 = Item.create!(name: 'C4 #0.4',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url: 'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.4.webp')
CategoryItem.create!(items_id: c4_0_4.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_0_4.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_0_4.id, categories_id: ice_and_alpine.id)

c4_0_5 = Item.create!(name: 'C4 #0.5',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url: 'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.5.webp')
CategoryItem.create!(items_id: c4_0_5.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_0_5.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_0_5.id, categories_id: ice_and_alpine.id)

c4_0_75 = Item.create!(name: 'C4 #0.75',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url: 'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.75.webp')
CategoryItem.create!(items_id: c4_0_75.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_0_75.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_0_75.id, categories_id: ice_and_alpine.id)

c4_1 = Item.create!(name: 'C4 #01',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-1.webp')
CategoryItem.create!(items_id: c4_1.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_1.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_1.id, categories_id: ice_and_alpine.id)

c4_2 = Item.create!(name: 'C4 #02',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-2.webp')
CategoryItem.create!(items_id: c4_2.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_2.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_2.id, categories_id: ice_and_alpine.id)

c4_3 = Item.create!(name: 'C4 #03',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-3.webp')
CategoryItem.create!(items_id: c4_3.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_3.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_3.id, categories_id: ice_and_alpine.id)

c4_4 = Item.create!(name: 'C4 #04',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-4.webp')
CategoryItem.create!(items_id: c4_4.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_4.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_4.id, categories_id: ice_and_alpine.id)

c4_5 = Item.create!(name: 'C4 #05',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-5.webp')
CategoryItem.create!(items_id: c4_5.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_5.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_5.id, categories_id: ice_and_alpine.id)

c4_6 = Item.create!(name: 'C4 #06',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-6.webp')
CategoryItem.create!(items_id: c4_6.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_6.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_6.id, categories_id: ice_and_alpine.id)

c4_7 = Item.create!(name: 'C4 #07',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-7.webp')
CategoryItem.create!(items_id: c4_7.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_7.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_7.id, categories_id: ice_and_alpine.id)

c4_8 = Item.create!(name: 'C4 #08',
description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
price:79.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-8.webp')
CategoryItem.create!(items_id: c4_8.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: c4_8.id, categories_id: climb.id)
CategoryItem.create!(items_id: c4_8.id, categories_id: ice_and_alpine.id)

screwup = Item.create!(name: 'Ice Screw Up',
description:"Protect and organize your winter rack with the Black Diamond Ice ScrewUp. This lightweight, convenient roll-up pouch protects the threads and teeth of your ice screws and saves space when they're stored in your pack.",
price:21.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/IceScrewUp.webp')
CategoryItem.create!(items_id: screwup.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: screwup.id, categories_id: climb.id)


sabre = Item.create!(name: 'Sabretooth Crampons',
description:"From moderate local ice flows to classic mountaineering routes and technical alpine faces, the Black Diamond Sabretooth Crampon is our best all-around crampon for the spectrum of frozen objectives. The Sabretooth’s redesigned stainless steel construction incorporates a strong, yet light design with durable horizontal front points and increased rocker in the front rail to accommodate modern mountain boots. The dual secondary points are optimized for technical precision, while still maintaining a balanced, stable platform on descents and lower angle terrain.",
price:199.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/SabretoothCramons.webp')
CategoryItem.create!(items_id: sabre.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: sabre.id, categories_id: climb.id)



slinger = Item.create!(name: 'Slinger Leash',
description:"A single, lightweight piolet-specific version of our popular Spinner Leash, the Black Diamond Slinger Leash is a stretchy tethering system for keeping your piolet attached without a wrist leash. We've upgraded the leash with a locking carabiner for added security when clipped to your axe's head or spike, we've added extension to the elastic webbing, and we've updated the webbing to polyester which absorbs less water than standard nylon.",
price:29.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/SlingerLeash.webp')
CategoryItem.create!(items_id: slinger.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: slinger.id, categories_id: climb.id)


swift = Item.create!(name: 'Swift Ice Axe',
description:"With an adjustable pommel and a T rating, the Black Diamond Swift takes mountaineering piolets into the 21st century. One-piece hot forged stainless steel head construction, ergonomic shaft and technical profile for performance in technical snow sections and the FlickLock™ pommel adds adjustability for varying terrain.",
price:199.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/SwiftIceAxe.webp')
CategoryItem.create!(items_id: swift.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: swift.id, categories_id: climb.id)

ulice = Item.create!(name: 'Ultralight Ice Screw',
description:"Designed for ski mountaineering, glacial travel and high-end alpinism, the Ultralight Ice Screw says it all in the name. Weighing in at 45% lighter than our Express Screws, the Ultralight Screw combines a steel tip with an aluminum body and forged aluminum hanger that features two clip-in points. The innovative wire-gate Express handle shaves more weight and also clicks open and closed. The Ultralights are also easily identified by length with the classic BD color scheme.",
price:84.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/ULIce.webp')
CategoryItem.create!(items_id: ulice.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: ulice.id, categories_id: climb.id)

viperice = Item.create!(name: 'Viper Ice Tool',
description:"A durable, easy-to-swing tool built for a full season of winter climbing objectives, the redesigned Black Diamond Viper Ice Tool provides all-around performance for the ice and alpine climber. The Viper’s hydroformed shaft extends through the grip for maximum rigidity and a responsive feel, and our Natural Pick is included to beef up durability on scrappy mountain terrain. The adjustable FlickLock® pommel acts as a secondary grip position for ice climbing and cragging and easily slides up the shaft for choking up on low-angle snow slopes. The modular head allows for easy changing of picks and swapping between hammer and adze.",
price:259.95,
image_url:'https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/ViperIceTool.webp')
CategoryItem.create!(items_id: viperice.id, categories_id: rock_protection.id)
CategoryItem.create!(items_id: viperice.id, categories_id: climb.id)




# impulse= Item.create(name:'Impulse 112 Skis',
# description:'Built for freeriders who love playful, deep-snow performance yet demand control when launching down steep, aggressive lines, the Impulse 112’s are the big guns you want on a storm day. Wide-waisted at 112-mm, these skis are floaty for deep conditions, while the playful turning radius keeps them nimble for lines that require confidence and accuracy. Their flat, solid-core construction adds torsional stiffness and provides premium power transmission, dampness and stability to hold fast while charging on harder snow. Austrian-made with pre-preg fiberglass and an engineered poplar core, The Impulse 112 is built for the progressive freerider looking to get after it.',
# price:799.95,
# image_url:'')

# c4_0_3 = Item.create!(name: 'C4 #0.3',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file1 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.3.webp')
# c4_0_3.photo.attach(io: file1, filename:'C4-0.3.webp')

# c4_0_4 = Item.create!(name: 'C4 #0.4',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file2 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.4.webp')
# c4_0_4.photo.attach(io: file2, filename:'C4-0.4.webp')

# c4_0_5 = Item.create!(name: 'C4 #0.5',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file3 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.5.webp')
# c4_0_5.photo.attach(io: file3, filename:'C4-0.5.webp')

# c4_0_75 = Item.create!(name: 'C4 #0.75',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file4 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-0.75.webp')
# c4_0_75.photo.attach(io: file4, filename:'C4-0.75.webp')

# c4_1 = Item.create!(name: 'C4 #01',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file5 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-1.webp')
# c4_1.photo.attach(io: file5, filename:'C4-1.webp')

# c4_2 = Item.create!(name: 'C4 #02',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file6 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-2.webp')
# c4_2.photo.attach(io: file6, filename:'C4-2.webp')

# c4_3 = Item.create!(name: 'C4 #03',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file8 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-3.webp')
# c4_3.photo.attach(io: file8, filename:'C4-3.webp')

# c4_4 = Item.create!(name: 'C4 #04',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file9 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-4.webp')
# c4_4.photo.attach(io: file9, filename:'C4-4.webp')

# c4_5 = Item.create!(name: 'C4 #05',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file10 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-5.webp')
# c4_5.photo.attach(io: file10, filename:'C4-5.webp')

# c4_6 = Item.create!(name: 'C4 #06',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file11 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-6.webp')
# c4_6.photo.attach(io: file11, filename:'C4-6.webp')

# c4_7 = Item.create!(name: 'C4 #07',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file12 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-7.webp')
# c4_7.photo.attach(io: file12, filename:'C4-7.webp')

# c4_8 = Item.create!(name: 'C4 #08',
# description:'The world’s best-selling, most trusted cam just got better. The new, redesigned Camalot C4 has now upped the ante, considering it’s 10% lighter yet just as durable as before. Plus, it features a modern design that improves on the old tried-and-true Camalots. The cam’s lobes are lighter and more sculpted, optimized for strength to weight, while the slings have a visual update for easier differentiation when racking. And speaking of racking, we’re introducing a new innovative trigger keeper on sizes #4, #5, #6, #7, and #8 that keeps the big guys contracted for compact racking and immediately release when you’re ready to place. We’ve also widened the trigger as well for better handling.',
# price:79.95)
# file13 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/c4/C4-8.webp')
# c4_8.photo.attach(io: file13, filename:'C4-8.webp')

# screwup = Item.create!(name: 'Ice Screw Up',
# description:"Protect and organize your winter rack with the Black Diamond Ice ScrewUp. This lightweight, convenient roll-up pouch protects the threads and teeth of your ice screws and saves space when they're stored in your pack.",
# price:21.95)
# file14 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/IceScrewUp.webp')
# screwup.photo.attach(io: file14, filename:'IceScrewUp.webp')

# sabre = Item.create!(name: 'Sabretooth Crampons',
# description:"From moderate local ice flows to classic mountaineering routes and technical alpine faces, the Black Diamond Sabretooth Crampon is our best all-around crampon for the spectrum of frozen objectives. The Sabretooth’s redesigned stainless steel construction incorporates a strong, yet light design with durable horizontal front points and increased rocker in the front rail to accommodate modern mountain boots. The dual secondary points are optimized for technical precision, while still maintaining a balanced, stable platform on descents and lower angle terrain.",
# price:199.95)
# file15 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/SabretoothCramons.webp')
# sabre.photo.attach(io: file15, filename:'SabretoothCramons.webp')



# slinger = Item.create!(name: 'Slinger Leash',
# description:"A single, lightweight piolet-specific version of our popular Spinner Leash, the Black Diamond Slinger Leash is a stretchy tethering system for keeping your piolet attached without a wrist leash. We've upgraded the leash with a locking carabiner for added security when clipped to your axe's head or spike, we've added extension to the elastic webbing, and we've updated the webbing to polyester which absorbs less water than standard nylon.",
# price:29.95)
# file16 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/SlingerLeash.webp')
# slinger.photo.attach(io: file16, filename:'SlingerLeash.webp')


# swift = Item.create!(name: 'Swift Ice Axe',
# description:"With an adjustable pommel and a T rating, the Black Diamond Swift takes mountaineering piolets into the 21st century. One-piece hot forged stainless steel head construction, ergonomic shaft and technical profile for performance in technical snow sections and the FlickLock™ pommel adds adjustability for varying terrain.",
# price:199.95)
# file17 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/SwiftIceAxe.webp')
# sabre.photo.attach(io: file17, filename:'SwiftIceAxe.webp')

# ulice = Item.create!(name: 'Ultralight Ice Screw',
# description:"Designed for ski mountaineering, glacial travel and high-end alpinism, the Ultralight Ice Screw says it all in the name. Weighing in at 45% lighter than our Express Screws, the Ultralight Screw combines a steel tip with an aluminum body and forged aluminum hanger that features two clip-in points. The innovative wire-gate Express handle shaves more weight and also clicks open and closed. The Ultralights are also easily identified by length with the classic BD color scheme.",
# price:84.95)
# file18 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/ULIce.webp')
# ulice.photo.attach(io: file18, filename:'ULIce.webp')

# viperice = Item.create!(name: 'Viper Ice Tool',
# description:"A durable, easy-to-swing tool built for a full season of winter climbing objectives, the redesigned Black Diamond Viper Ice Tool provides all-around performance for the ice and alpine climber. The Viper’s hydroformed shaft extends through the grip for maximum rigidity and a responsive feel, and our Natural Pick is included to beef up durability on scrappy mountain terrain. The adjustable FlickLock® pommel acts as a secondary grip position for ice climbing and cragging and easily slides up the shaft for choking up on low-angle snow slopes. The modular head allows for easy changing of picks and swapping between hammer and adze.",
# price:259.95)
# file19 = URI.open('https://bluesquarebucket.s3.us-west-1.amazonaws.com/iceandalpine/IceAlpine/ViperIceTool.webp')
# viperice.photo.attach(io: file19, filename:'ViperIceTool.webp')

