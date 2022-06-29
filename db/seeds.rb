# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
bandos = Boss.create(name: 'General Graardor', location: 'God Wars Dungeon', killcount: 624, 
    image_url: "https://oldschool.runescape.wiki/images/thumb/General_Graardor.png/280px-General_Graardor.png?4dd90")
sara = Boss.create(name: 'Commander Zilyana', location: 'God Wars Dungeon', killcount: 596, 
    image_url: "https://oldschool.runescape.wiki/images/thumb/Commander_Zilyana.png/250px-Commander_Zilyana.png?c5eaa")
zammy = Boss.create(name: 'Kril Tsutsaroth', location: 'God Wars Dungeon', killcount: 650, 
    image_url: "https://oldschool.runescape.wiki/images/thumb/K%27ril_Tsutsaroth.png/280px-K%27ril_Tsutsaroth.png?73bda")
arma = Boss.create(name: 'Kreearra', location: 'God Wars Dungeon', killcount: 580, 
    image_url: "https://oldschool.runescape.wiki/images/thumb/Kree%27arra.png/280px-Kree%27arra.png?ba75c")

puts "Seeded Bosses"

Item.create(title: 'Bandos Chestplate', image_url: "https://oldschool.runescape.wiki/images/thumb/Bandos_chestplate_detail.png/100px-Bandos_chestplate_detail.png?98028", rarity: '1/381', has_drop: false, boss_id: 1)
Item.create(title: 'Bandos Tassets', image_url: "https://oldschool.runescape.wiki/images/thumb/Bandos_tassets_detail.png/120px-Bandos_tassets_detail.png?abaeb", rarity: '1/381', has_drop: true, boss_id: 1)
Item.create(title: 'Bandos Godsword', image_url: "https://oldschool.runescape.wiki/images/thumb/Bandos_godsword_detail.png/130px-Bandos_godsword_detail.png?2250a", rarity: '1/508', has_drop: true, boss_id: 1)
Item.create(title: 'Pet Graardor', image_url: "https://oldschool.runescape.wiki/images/Pet_general_graardor.png?85699", rarity: '1/5000', has_drop: false, boss_id: 1)

    
    
Item.create(title: 'Saradomin Godsword', image_url: "https://oldschool.runescape.wiki/images/thumb/Saradomin_godsword_detail.png/130px-Saradomin_godsword_detail.png?a1482", rarity: '1/508', has_drop: false, boss_id: 2)
Item.create(title: 'Armadyl Crossbow', image_url: "https://oldschool.runescape.wiki/images/thumb/Armadyl_crossbow_detail.png/150px-Armadyl_crossbow_detail.png?de091", rarity: '1/508', has_drop: false, boss_id: 2)
Item.create(title: 'Pet Zilyana', image_url: "https://oldschool.runescape.wiki/images/Pet_zilyana.png?f3f6a", rarity: '1/5000', has_drop: false, boss_id: 2)
    
    
Item.create(title: 'Zamorakian Spear', image_url: "https://oldschool.runescape.wiki/images/thumb/Zamorakian_spear_detail.png/150px-Zamorakian_spear_detail.png?29623", rarity: '1/127', has_drop: true, boss_id: 3)
Item.create(title: 'Staff of the Dead', image_url: "https://oldschool.runescape.wiki/images/thumb/Staff_of_the_dead_detail.png/98px-Staff_of_the_dead_detail.png?aa8b8", rarity: '1/508', has_drop: true, boss_id: 3)
Item.create(title: 'Zamorakian Godsword', image_url: "https://oldschool.runescape.wiki/images/thumb/Zamorak_godsword_detail.png/140px-Zamorak_godsword_detail.png?f52af", rarity: '1/508', has_drop: true, boss_id: 3)
Item.create(title: 'Pet Kril', image_url: "https://oldschool.runescape.wiki/images/Pet_k%27ril_tsutsaroth.png?fe846", rarity: '1/5000', has_drop: true, boss_id: 3)
    
    
Item.create(title: 'Armadyl Chestplate', image_url: "https://oldschool.runescape.wiki/images/thumb/Armadyl_chestplate_detail.png/100px-Armadyl_chestplate_detail.png?78ba5", rarity: '1/381', has_drop: false, boss_id: 4)
Item.create(title: 'Armadyl Chainskirt', image_url: "https://oldschool.runescape.wiki/images/thumb/Armadyl_chainskirt_detail.png/75px-Armadyl_chainskirt_detail.png?9bcc8", rarity: '1/381', has_drop: false, boss_id: 4)    
Item.create(title: 'Armadyl Godsword', image_url: "https://oldschool.runescape.wiki/images/thumb/Armadyl_godsword_detail.png/130px-Armadyl_godsword_detail.png?f2566", rarity: '1/508', has_drop: false, boss_id: 4)
Item.create(title: 'Pet Kreearra', image_url: "https://oldschool.runescape.wiki/images/Pet_kree%27arra.png?f3f6a", rarity: '1/5000', has_drop: false, boss_id: 4)

puts "Seeded Items"

User.create(username: "chris", password: "secret")