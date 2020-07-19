require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client()

//check connection
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

//bind to channel's ID 734151191617077278

//message process
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { 
        return
    }
    
    if (receivedMessage.content.startsWith("?")) {
        processCommand(receivedMessage)
    }
})

//check if it's a command
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]

    console.log("Command received: " + primaryCommand)

    switch (primaryCommand) {
        case "help": helpCommand(receivedMessage)
            break;
        case "star1": star1QuestCommand(receivedMessage)
            break;
        case "star2": star2QuestCommand(receivedMessage)
            break;
        case "star3": star3QuestCommand(receivedMessage)
            break;
        case "star4": star4QuestCommand(receivedMessage)
            break;
        case "star5": star5QuestCommand(receivedMessage)
            break;    
        case "star6": star6QuestCommand(receivedMessage)
            break;
        case "star7": star7QuestCommand(receivedMessage)
            break;
        case "star8": star8QuestCommand(receivedMessage)
            break;
        case "star9": star9QuestCommand(receivedMessage)
            break;   
        case "star10": star10QuestCommand(receivedMessage)
            break;           
        case "star11": star11QuestCommand(receivedMessage)
            break;   
        default: receivedMessage.channel.send("I don't understand the command. Try `?help`.")

    }
}

//functions of command
function helpCommand(receivedMessage) {
        receivedMessage.channel.send("Enter '?starX' for what level you search as quest and I tell you what I got on my bord.")
}

function star1QuestCommand(receivedMessage) {
    var answers = [
        "Boot to the Head - Hunt a Great Maccao",
        "Tackling the Tetsucabra - Hunt a Tetsucabra",
        "Lost in the Jurassic Frontier - Hunt a Gypceros",
        "Gendrome Roadblock - Hunt a Gendrome",
        "In Pursuit of the Sand Wyvern - Hunt a Cephadrome",
        "Shells of Steel - Hunt a Daimyo Hermitaur",
        "Hunt Down the Velocidrome! - Hunt a Velocidrome",
        "Local Threat - Hunt a Yian Kut-Ku",
        "Snow with Occasional Lagombi - Hunt a Lagombi",
        "Bulldrome of the Peaks - Hunt a Bulldrome",
        "The Ingredient of Legend- Hunt an Arzuros",
        "Royal Spit Take - Hunt a Royal Ludroth"
      ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer)
}

function star2QuestCommand(receivedMessage) {
    var answers = [
        "Walk 'n Roll - Hunt a Volvidon",
        "The Desert Gourmand - Hunt a Nibelsnarf",
        "The Poison-fanged Duo - Hunt 2 Gendrome",
        "Noise Violation - Hunt a Najarala",
        "In Search of the Yian Garuga - Hunt a Yian Garuga",
        "Finishing the Job - Hunt 2 Velocidrome",
        "The Shadow in the Mountains - Hunt a Khezu",
        "The New Tenant - Hunt a Blangonga",
        "Royal Assassination - Hunt a Rathian",
        "Ahoy! Royal Ludroth! - Hunt 2 Royal Ludroth",
        "Malfestio Festival - Hunt a Malfestio",
        "Wyvern of the Wind - Hunt a Nargacuga",
        "Tetsucabra Bounty - Hunt a Tetsucabra",
        "Deserted Island Dustup - Hunt 2 Arzuros",
        "Poisonous Pest - Hunt an Iodrome",
        "Pincer through the Sky - Hunt a Shogun Ceanataur",
        "Serpentine Samba - Hunt a Najarala",
        "A Resplendent Dance - Hunt a Great Maccao"
      ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer)  
}

function star3QuestCommand(receivedMessage) {
    var answers = [
        "Flames of Glavenus Passion - Hunt a Glavenus",
        "Tigrex by the Tail - Hunt a Tigrex",
        "Dark Wings, Dark Work - Hunt a Gore Magala",
        "A Thousand Scales of Dread - Hunt a Seregios",
        "A Shocking Scoundrel - Hunt an Astalos",
        "The King's Domain - Hunt a Rathalos",
        "Fury Run Afoul - Hunt a Gammoth",
        "Lagiacrus Lethargy - Hunt a Lagiacrus",
        "Moonlit Bubble Bath - Hunt a Mizutsune",
        "Topple the Monarch - Hunt a Zinogre",
        "Lagiacrushed - Hunt a Lagiacrus",
        "Isle About that Bass - Hunt a Brachydios",
        "Heaven and Earth - Hunt a Rathalos and a Rathian",
        "Fro Shizzle - Hunt a Astalos",
        "Fight or Uragaan! - Hunt an Uragaan",
        "The Shogun's Encampment - Hunt 2 Shogun Ceanataur",
        "An Early Jurassic Excursion - Hunt a Great Maccao and a Glavenus",
        "Wyvern Sand Runners - Hunt a Gendrome and a Seregios",
        "Zinogre, Bearly Fazed - Hunt an Arzuros and a Zinogre",
        "Making it Safe for Swine - Hunt an Iodrome and a Tigrex",
        "Rumble in the Volcano - Hunt a Volvidon and a Brachydios",
        "It's Electric - Slay a Kirin",
        "The White Brute - Slay a Kirin",
        "The Frozen Dictator - Slay a Kushala Daora or repel it",
        "The Elder Dragon of Mist - Slay a Chameleos or repel it",
        "Emperor of Flame - Slay a Teostra or repel it",
        "Stop the Wheel - Slay Shagaru Magala"
      ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer) 
}

function star4QuestCommand(receivedMessage) {
    var answers = [
        "Swing into Action - Hunt a Kecha Wacha",
        "Ruining the Ruins - Hunt a Yian Kut-Ku",
        "Bug Appétit - Hunt a Seltas",
        "Gendrome Roadblock - Hunt a Gendrome",
        "Lost in the Primal Forest - Hunt a Gypceros",
        "Hunt Down the Velocidrome! - Hunt a Velocidrome",
        "Tackling the Tetsucabra - Hunt a Tetsucabra",
        "So Notable: Great Maccao - Hunt 2 Great Maccao",
        "The Land Sharq - Hunt a Cephadrome",
        "Shells of Steel - Hunt a Daimyo Hermitaur",
        "Birds of a Feather - Hunt a Yian Kut-Ku and a Gypceros",
        "The Bulldrome Charges - Hunt a Bulldrome",
        "Enter the Giadrome - Hunt a Giadrome",
        "Snow with Occasional Lagombi - Hunt a Lagombi",
        "Arzuros Encroaches - Hunt an Arzuros",
        "Royal Spit Take - Hunt a Royal Ludroth",
        "A Powerful Team - Hunt a Velocidrome, a Great Maccao, a Seltas, a Bulldrome and a Gendrome"      
    ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer) 
}

function star5QuestCommand(receivedMessage) {
    var answers = [
        "So Notable: Kecha Wacha - Hunt 2 Kecha Wacha",
        "Pink Stink - Hunt a Congalala",
        "Dragon Lady - Hunt a Rathian",
        "The Ioprey Leader - Hunt an Iodrome",
        "The Intelligent Malfestio - Hunt a Malfestio",
        "Serpentine Samba - Hunt a Najarala",
        "Spotted Beauty - Hunt 2 Gendrome",
        "Fin Finder - Hunt a Zamtrios",
        "The Walls Have Eyes - Hunt a Khezu",
        "Must Love Lagombi - Hunt 2 Lagombi",
        "Fight or Uragaan! - Hunt an Uragaan",
        "Worst. Trip. Ever! - Hunt a Yian Garuga",
        "Tetsucabra Bounty - Hunt a Tetsucabra",
        "Nargacuga Throwdown - Hunt a Nargacuga",
        "Insomnia? Meet Hypnotism x 2 - Hunt 2 Malfestio",
        "Brute of the Sands - Hunt a Barroth", 
        "The Desert Gourmand - Hunt a Nibelsnarf",
        "Line in the Sand - Hunt 2 Cephadrome",
        "Wrath of the Rathian - Capture a Rathian",
        "Twin Velocidrome - Hunt 2 Velocidrome",
        "The New Tenant - Hunt a Blangonga",
        "A Plesioth in the Misty Peaks - Hunt a Plesioth",
        "Awful Guest - Hunt a Plesioth",
        "Web Sighting - Hunt a Nerscylla",
        "Poisonous Pair - Hunt 2 Iodrome",
        "Disruptive Eruption - Hunt a Basarios",
        "You Caught This? I Caught This - Hunt a Lavasioth",
        "Tumbling Troublemaker - Hunt a Volvidon",
        "Shogun in the Flames - Hunt a Shogun Ceanataur",
        "Status: Effected - Hunt a Volvidon, a Malfestio, and a Yian Garuga",
        "Desert Brawlers - Hunt a Daimyo Hermitaur, a Rathian, and a Nibelsnarf",
        "The Hunter Games - Hunt a Khezu, an Uragaan, and a Shogun Ceanataur",
        "Hunt, Sweat, and Tears - Hunt a Cephadrome, an Arzuros, an Iodrome, a Lagombi and a Volvidon",
        "Kecha Wacha Earbreaker - Wound Kecha Wacha's ears",
        "Under the Blazing Sun - Hunt a Gendrome"
      ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer)
}

function star6QuestCommand(receivedMessage) {
    var answers = [
        "The Lightning Crown - Hunt an Astalos",
        "What a Girl Wants - Hunt a Tigrex",
        "Rathalos Run - Hunt a Rathalos",
        "Watch Your Steppe - Hunt a Gore Magala",
        "Bug Buffet - Hunt a Seltas Queen",
        "A Bewitching Dance - Hunt a Mizutsune",
        "Dread Locked - Hunt a Gore Magala",
        "Barioth Hunt - Hunt a Barioth",
        "The Unshakable Mountain God - Hunt a Gammoth",
        "Topple the Monarch - Hunt a Zinogre",
        "Hunt a Zinogre - Hunt a Deviljho",
        "A Cure for Cowardice - Hunt a Gravios",
        "Master of the Molten Deep - Hunt an Agnaktor",
        "Duel in the Volcanic Hollow - Hunt a Glavenus",
        "Bug Bite - Capture a Seltas Queen",
        "Heaven and Earth - Hunt a Rathalos and a Rathian",
        "From Beyond the Sands - Hunt a Glavenus",
        "Legend of the Monkey King - Hunt a Rajang",
        "Astalos Territory - Hunt an Astalos",
        "Lord of the Skies - Hunt a Rathalos",
        "The Rajang in the Snow - Hunt a Rajang",
        "Fury Run Afoul - Hunt a Gammoth",
        "Bl-Bl-Blangongas! - Hunt 3 Blangongas",
        "Surrounded by Bubbles - Hunt a Mizutsune",
        "The Fisherman's Fiend - Hunt a Lagiacrus",
        "For Whom the Gong Tolls - Hunt a Duramboros",
        "River of Fire - Hunt 2 Lavasioth",
        "Dances with Wyverns - Hunt a Rathian, a Yian Kut-Ku and a Astalos",
        "Bugging Out - Hunt a Malfestio, a Mizutsune and a Seltas Queen",
        "A Three Hour Tour - Hunt a Khezu, a Zamtrios and a Gammoth",
        "A Hollow Defense - Hunt a Yian Garuga, a Tetsucabra and a Glavenus",
        "Wild Gunman - Hunt a Nargacuga, a Plesioth and a Lagiacrus",
        "Marshlands Rag - Hunt a Bulldrome, a Najarala and a Duramboros",
        "Firefight to the Finish! - Hunt a Shogun Ceanataur, a Lavasioth and a Agnaktor",
        "At the Slayground - Hunt a Rathalos, a Kecha Wacha and a Rajang",
        "It's Electric - Slay a Kirin",
        "The White Brute - Slay a Kirin",
        "A Scenic Locale - Slay a Kirin",
        "Miasma Attack - Hunt a Hyper Gypceros",
        "Stop the Wacha! - Hunt a Hyper Kecha Wacha",
        "We Are Not Amused - Hunt a Hyper Rathian",
        "Zamtrios Fight! - Hunt a Hyper Zamtrios",
        "The Frog of War - Hunt a Hyper Tetsucabra",
        "Triple Toady Terror - Hunt 3 Hyper Tetsucabra",
        "Woe Malfestio - Hunt a Hyper Malfestio",
        "Born of Darkness - Hunt a Hyper Nargacuga",
        "Nibeling on Apples - Hunt a Hyper Nibelsnarf",
        "Warning: Hyper Yian Garuga! - Hunt a Hyper Yian Garuga",
        "Hyper for Holes - Hunt a Hyper Blangonga",
        "The Plesioth Adventure - Hunt a Hyper Plesioth",
        "Daimyo of the Deserted Island - Hunt a Hyper Daimyo Hermitaur",
        "Where the Wild Manes Are - Hunt a Hyper Royal Ludroth",
        "Hyper Investigation - Hunt a Hyper Yian Kut-Ku",
        "The Khezu and the Shadow - Hunt a Hyper Khezu",
        "Bring on the Shogun - Hunt a Hyper Shogun Ceanataur",
        "Unnerving Najarala - Hunt a Hyper Najarala",
        "Eruption Embodied - Hunt a Hyper Uragaan",
        "The Magma's Rage - Hunt a Hyper Lavasioth",
        "Minion Audition Imposition - Hunt a Hyper Yian Kut-Ku and a Hyper Shogun Ceanataur",
        "Everywhere You Look - Hunt 2 Iodrome",
        "Malfestio Headbreaker - Wound Malfestio's head",
        "The Snow Must Go On - Hunt a Lagombi"
    ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer)
}

function star7QuestCommand(receivedMessage) {
    var answers = [
        "Stop the Wheel - Slay a Shagaru Magala",
        "A Gathering of Wyverns - Hunt a Astalos and a Rathian",
        "A Song of White and Lapis - Hunt a Mizutsune and a Malfestio",
        "A Cold Set of Armor - Hunt a Gammoth and a Zamtrios",
        "Rocked and Rolled - Hunt a Brachydios",
        "Hammer vs. Blade - Hunt a Glavenus and an Uragaan",
        "A Roar to the Heavens - Hunt a Zinogre and a Tigrex",
        "The Hapless Bodyguard - Hunt 3 Rajang",
        "Seer of Swords - Hunt a Seregios",
        "The Yukumo Gal Special - Hunt 2 Zinogres",
        "Repaying the Favor - Hunt a Brachydios",
        "You Bet Your Life - Hunt a Deviljho and a Rajang",
        "Wyvern's Way - Hunt a Yian Garuga and a Tigrex",
        "Bewitching Heat - Hunt a Glavenus and a Mizutsune",
        "The Mountain God's Lightning - Hunt an Astalos and a Gammoth",
        "A Man's Arena is His Castle - Hunt a Lagombi, a Blangonga, a Zamtrios, and a Gammoth",
        "The Hunter Games - Hunt a Mizutsune, a Royal Ludroth, a Plesioth and a Seltas Queen",
        "The Flames of War - Hunt a Yian Garuga, an Uragaan, an Agnaktor, a Rathalos and a Glavenus",
        "A Shocking Revelation! - Hunt a Khezu, a Lagiacrus, a Zinogre, a Rajang and a Astalos",
        "The Gathering Storm - Hunt a Nargacuga, a Tigrex, a Seregios, and a Gore Magala",
        "Putting the Gore in Magala - Hunt a Hyper Gore Magala",
        "Steppe in the Right Direction - Hunt a Hyper Deviljho",
        "Tigrex, Tigrex, Burning Bright - Hunt a Hyper Tigrex",
        "A Thousand Blades of Wrath - Hunt a Hyper Seregios",
        "A Fiery Temper - Hunt a Hyper Rathalos",
        "The Unassailable Seltas Queen - Hunt a Hyper Seltas Queen",
        "Rajang's Black Spirit - Hunt a Hyper Rajang",
        "Savage Sword of the Desert - Hunt a Hyper Glavenus",
        "Wyvernlit Evening - Hunt a Hyper Astalos",
        "Wyverns All Around Us - Hunt a Hyper Rathalos and a Hyper Rathian",
        "Into the Malestrom - Hunt a Hyper Lagiacrus",
        "The Lithe and Unbreaking - Hunt a Hyper Mizutsune",
        "The Peril of the Land - Hunt a Hyper Duramboros",
        "The Wolf and the Footbath - Hunt a Hyper Zinogre",
        "The Thieving Gypceros - Hunt 3 Hyper Gypceros",
        "Steam and Smoke - Hunt a Hyper Brachydios",
        "The Glowing Embers - Hunt a Hyper Agnaktor",
        "Primal Forest Defense - Hunt a Hyper Gypceros, a Hyper Najarala, and a Hyper Seltas Queen",
        "The End of the Trials - Hunt a Hyper Tigrex and a Hyper Seregios",
        "The Descending Fog - Hunt a Hyper Yian Garuga, a Hyper Yian Kut-Ku, and a Hyper Rathian",
        "Searching for Secret Baths - Hunt a Hyper Royal Ludroth, a Hyper Duramboros, and a Hyper Zinogre",
        "Show Me Your Shaka-Strength - Hunt a Hyper Rathalos, a Hyper Zinogre, and a Hyper Lagiacrus",
        "The Marshlands Nightmare - Hunt a Hyper Khezu, a Hyper Shogun Ceanataur, and a Hyper Astalos",
        "The Birds of Prey - Hunt a Hyper Yian Kut-Ku, a Hyper Malfestio and a Hyper Yian Garuga",
        "The Fanged Beasts - Hunt a Hyper Gammoth, a Hyper Kecha Wacha and a Hyper Blangonga",
        "The Winged Wyverns - Hunt a Hyper Astalos, a Hyper Rathalos and a Hyper Seregios",
        "The Foes of the Deep - Hunt a Hyper Mizutsune, a Hyper Plesioth, a Hyper Nibelsnarf, and a Hyper Lagiacrus",
        "The Beasts of Brawn - Hunt a Hyper Uragaan, a Hyper Duramboros, a Hyper Brachydios and a Hyper Glavenus",
        "Ring of the Silver Sol - Hunt a Silver Rathalos",
        "Ring of the Golden Lune - Hunt a Gold Rathian",
        "Usurpers of the Throne - Hunt a Silver Rathalos and a Gold Rathian",
        "Following the Fallen - Hunt a Hyper Silver Rathalos",
        "Fool's Gold - Hunt a Hyper Gold Rathian",
        "Shining Examples - Hunt a Hyper Silver Rathalos and a Hyper Gold Rathian",
        "Child of Destruction - Hunt a Furious Rajang",
        "A Shock in the Dark - Hunt 2 Furious Rajang",
        "Triumphant Rage - Hunt a Savage Deviljho",
        "The Frozen Dictator - Slay a Kushala Daora or repel it",
        "Kushala Daora Strikes - Slay a Kushala Daora or repel it",
        "The Elder Dragon of Mist - Slay a Chameleos or repel it",
        "Beyond the Silence - Slay a Chameleos or repel it",
        "Emperor of Flame - Slay a Teostra or repel it",
        "The Fires of Devastation - Slay a Teostra or repel it",
        "Grim Tidings - Slay an Akantor",
        "Absolute Zero - Slay an Ukanlos",
        "The Looming Calamity - Slay an Amatsu",
        "The Brilliant Darkness - Slay an Alatreon"
      ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer)
}

function star8QuestCommand(receivedMessage) {
    var answers = [
        "Pecking Order - Hunt a Yian Kut-Ku",
        "After That Bird! - Hunt a Gypceros",
        "Sweetheart's Pick: Lofty Ludroth - Hunt a Royal Ludroth",
        "Fangs for the Bath - Hunt 2 Arzuros",
        "Daimyo Hermitaur Flambé - Hunt a Daimyo Hermitaur",
        "Lost, But Not for Long - Hunt a Gypceros",
        "Face Two Face - Hunt 2 Kecha Wacha",
        "Enough Monkeying Around - Hunt a Kecha Wacha",
        "Pleasantly Sozzled - Hunt a Tetsucabra",
        "A Brush with Bugs - Hunt 2 Seltas",
        "Surprise! - Hunt a Cephadrome and a Daimyo Hermitaur",
        "The Bird Who Wood Be King - Hunt a Yian Kut-Ku",
        "The Killer Rabbit of Arctic Ridge - Hunt a Lagombi",
        "Survival of the Biggest - Hunt a Giadrome and a Bulldrome",
        "Riverside Rumble - Hunt an Arzuros",
        "Water Fight - Hunt 2 Royal Ludroth"
    ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer) 
}

function star9QuestCommand(receivedMessage) {
    var answers = [
        "The Legend of King Apple - Hunt a Volvidon",
        "Treasure Pinnacle: Rice - Hunt a Malfestio",
        "Hunt a Malfestio - Hunt a Rathian",
        "Naked Aggression - Hunt a Shogun Ceanataur",
        "I See It Rollin'... - Hunt a Volvidon",
        "Dirty Deals - Hunt a Barroth",
        "Share the Load (and the Reward) - Hunt a Nibelsnarf",
        "Shadows in the Desert Lake - Hunt a Plesioth",
        "Not Mushroom to Swing a Congalala - Hunt a Congalala",
        "Sky Tribe: Savior of the Skyway - Hunt a Rathian",
        "Face-off in the Jungle - Hunt a Nargacuga",
        "Royal Assassination - Hunt a Rathian",
        "Feeding Time - Hunt a Nerscylla",
        "Through Thick and Fin - Hunt a Zamtrios",
        "The Next Stage of E-Volvi-lution - Hunt a Volvidon and a Great Maccao",
        "Trade Dispute - Hunt a Nibelsnarf",
        "A Coil to Arms - Hunt a Najarala",
        "Chilled to the Marrow - Hunt a Khezu",
        "Earn Your Strength - Hunt a Blangonga",
        "We've Reached Peak Blangonga - Hunt 2 Blangongas",
        "Please Plesioth Me! - Hunt a Plesioth",
        "Jumping at Shadows - Hunt a Nargacuga",
        "The Owled Man and the Sea - Hunt a Malfestio",
        "That's No Rock... - Hunt a Basarios",
        "The Shadow in the Cave - Hunt a Khezu",
        "March Melancolico - Hunt a Najarala",
        "Interruption: Conga Line - Hunt 2 Congalala",
        "Commission: Basarios - Hunt a Basarios",
        "Afro Soul Is a Way of Life - Hunt a Lavasioth",
        "Hunt a Lavasioth - Hunt a Shogun Ceanataur",
        "Minion's Devotion - Hunt a Velocidrome, a Giadrome, an Iodrome, a Gendrome, and a Great Maccao",
        "So Notable: Hyper Hermitaur - Hunt a Hyper Daimyo Hermitaur",
        "Revenge from the Skies - Revenge from the Skies",
        "Commission: Hyper Kecha Wacha - Hunt a Hyper Kecha Wacha",
        "Frog's Face, Demon's Heart - Hunt a Hyper Tetsucabra",
        "The Verdant Hills Are Alive - Hunt a Hyper Gypceros",
        "The Hype is Royal - Hunt a Hyper Royal Ludroth"
    ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer) 
}

function star10QuestCommand(receivedMessage) {
    var answers = [
        "The Unapproachable Yian Garuga - Hunt a Yian Garuga",
        "Paralyzing Peril - Hunt a Lagiacrus",
        "Return from the Pinnacle - Hunt a Zinogre",
        "Pinnacle Pioneering - Hunt an Astalos",
        "Problem at the Pinnacle - Hunt a Gore Magala",
        "The Boiling Broiling Desert - Hunt a Glavenus",
        "Water Kerfuffle - Hunt a Mizutsune",
        "Hunt-a-Thon: Yian Garuga - Hunt 2 Yian Garuga",
        "Primal Forest Fears - Hunt a Nerscylla and a Malfestio",
        "Hunt-a-Thon: Gravios - Hunt 2 Gravios before time expires or deliver a Paw Pass Ticket",
        "The Lost Expedition - Hunt a Barioth",
        "Ice Recovery - Hunt a Gammoth",
        "A Certain Gravitas - Hunt a Gravios",
        "The Royal Guard - Hunt a Seltas Queen",
        "Eclipse at Jurassic Frontier - Hunt a Gore Magala",
        "PR Disaster - Hunt a Rathian and a Glavenus",
        "Predator in the Hills - Hunt a Rathalos and a Rathian",
        "I Hope It's Not Barioth Flavored - Hunt a Barioth",
        "Howl at the Moon - Hunt a Zinogre",
        "Hunter Dojo: Bubble-jitsu - Hunt a Mizutsune",
        "'Kiken' Means 'Danger'! - Hunt a Rathalos",
        "The Sun, Also Wyverns - Hunt a Lagiacrus",
        "Hunter Dojo: Lightning Wushu - Hunt an Astalos",
        "Uragaan Grief - Hunt an Uragaan",
        "Heavenly Fire, Earthly Flame - Hunt a Lavasioth and a Rathalos",
        "Giant Dragon Invasion - Slay a Lao-Shan Lung or repel it",
        "Frontier Fisticuffs - Hunt a Cephadrome, a Rathian, and a Plesioth",
        "Down With This Sort of Thing - Hunt a Great Maccao, a Kecha Wacha, a Gypceros, and an Astalos",
        "Searing Sands - Hunt a Gendrome, a Daimyo Hermitaur, a Nibelsnarf, and a Barroth",
        "Arena Bakalaka-Battle! Woo! - Hunt an Arzuros, a Volvidon, and a Barroth",
        "Trial by Fart - Hunt a Hyper Congalala",
        "The Pinnacle of Good Records - Hunt a Hyper Basarios",
        "The Pinnacle of Terror - Hunt a Hyper Rathian",
        "Eat in Pieces - Hunt a Hyper Nibelsnarf",
        "Diabolical Deluge - Hunt a Hyper Plesioth",
        "Temnoceranophobia - Hunt a Hyper Nerscylla",
        "...Or Just Wait for It to Poop - Hunt a Hyper Najarala",
        "Zamtrios, Right Ahead! - Hunt a Hyper Zamtrios",
        "Frozen Seaway Horror Story - Hunt a Hyper Khezu",
        "Sweets for My Sweets - Hunt a Hyper Malfestio",
        "Nargacuga in the Jurassic Frontier - Hunt a Hyper Nargacuga",
        "The Mud Must Flow - Hunt a Hyper Barroth",
        "Shhhhut Up - Hunt a Hyper Blangonga",
        "No Place to Run - Hunt a Hyper Shogun Ceanataur",
        "It's a Miner's Life - Hunt a Hyper Lavasioth",
        "Let the Games Begin - Hunt a Hyper Kecha Wacha and a Hyper Nerscylla",
        "Material Old Girl - Hunt a Hyper Basarios and a Hyper Shogun Ceanataur",
        "A Pinnacle Just for You - Slay a Kirin",
        "Reality or Fantasy? - Slay a Kirin",
        "The Phantom Beast! - Slay a Kirin"
    ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer) 
}

function star11QuestCommand(receivedMessage) {
    var answers = [
        "Sky Render - Slay a Valstrax or repel it",
        "Hunter Dojo: Valstrax-ryu - Slay a Valstrax or repel it",
        "Supersonic - Slay a Valstrax or repel it",
        "Scales of Justice - Slay a Valstrax or repel it",
        "Battle of 1001 Blades - Hunt a Seregios",
        "Beware Twin Horns on the Sand - Hunt a Diablos",
        "Deviljho Hunt - Hunt a Deviljho",
        "Paint it Gold - Hunt a Rajang",
        "Tracing the Family Tree - Hunt a Tigrex",
        "Price Freeze - Hunt a Tigrex",
        "Seregios Scuffle - Hunt a Seregios",
        "Emegency at the Arctic Ridge! - Hunt a Rajang",
        "Misty Opportunity? - Hunt a Duramboros",
        "Everything in Moderation - Hunt a Deviljho",
        "Lavaclad Beast - Hunt an Agnaktor",
        "Brachydios Bypass - Hunt a Brachydios",
        "A Very Long Engravement - Hunt a Glavenus and a Gravios",
        "Ends of the Earth - Slay a Shagaru Magala",
        "A Titanic Clash - Hunt an Agnaktor and a Duramboros",
        "The Ol' Razzle Dazzle - Hunt a Deviljho and a Rajang",
        "Jurassic Skulduggery - Hunt a Malfestio, a Zinogre, a Rathalos, and a Tigrex",
        "Verdant Hills Missive - Hunt a Yian Garuga, a Najarala, a Rathian, and an Astalos",
        "A Quest of Friendship - Hunt a Royal Ludroth, a Nargacuga, and a Lagiacrus",
        "Fiery Four-way Fracas - Hunt a Gravios, a Brachydios, and a Glavenus",
        "Castle on the Run - Slay an Ahtal-Ka",
        "Pitched Pinnacle Battle - Hunt a Hyper Deviljho",
        "All Creatures Cleaved and Small - Hunt a Hyper Glavenus",
        "Backwater Battle - Hunt a Hyper Diablos",
        "Rajang Against the Machine - Hunt a Hyper Rajang",
        "Seeking the Sea King - Hunt a Hyper Lagiacrus",
        "If These Rocks Could Talk - Hunt a Hyper Astalos",
        "Appeal from Authority - Hunt a Hyper Duramboros",
        "Neopteronophobia - Hunt a Hyper Seltas Queen",
        "It Takes Mizutsune to Tango - Hunt a Hyper Mizutsune",
        "Something Wicked - Hunt a Hyper Gore Magala",
        "Setting the Barioth High - Hunt a Hyper Barioth",
        "The Big Push - Hunt a Hyper Gammoth",
        "What's Mine is Mine - Hunt a Hyper Uragaan",
        "Agnaktor's Deep - Hunt a Hyper Agnaktor",
        "Garuga's Comeuppance - Hunt a Hyper Yian Garuga",
        "Seregios Exposé - Hunt a Hyper Seregios",
        "Tigrex Trap - Hunt a Hyper Tigrex",
        "Zinogre-enthusiasm - Hunt a Hyper Zinogre",
        "Even Brachydios Need A Holiday - Hunt a Hyper Brachydios",
        "Marshland Fandango - Hunt a Hyper Gravios",
        "Let's Get Igneous - Hunt a Hyper Rathalos",
        "R.I.P. - Hunt a Hyper Rathalos and a Hyper Rathian",
        "Death at My Greaves - Hunt a Hyper Gravios and a Hyper Nerscylla",
        "Pinnacle Problems - Hunt a Hyper Basarios, a Hyper Zinogre, and a Hyper Astalos",
        "A Bed of Sand - Hunt a Hyper Barroth, a Hyper Tigrex, and a Hyper Glavenus",
        "Jungle Funk - Hunt a Hyper Congalala, a Hyper Nargacuga, and a Hyper Mizutsune",
        "Arctic Ridge Allegiances - Hunt a Hyper Khezu, a Hyper Barioth, and a Hyper Gammoth",
        "Arena Allegiances - Hunt a Zinogre, a Hyper Najarala, a Tigrex, and a Gravios",
        "Path of the Hunter - Hunt a Hyper Mizutsune, a Hyper Astalos, a Hyper Gammoth, a Hyper Glavenus, and a Hyper Diablos",
        "Silver-Tongued Storyteller - Hunt a Silver Rathalos",
        "Gold Digger - Hunt a Gold Rathian",
        "The Sun and the Moon - Hunt a Silver Rathalos and a Gold Rathian",
        "By the Light of the Silvery Rath - Hunt a Hyper Silver Rathalos",
        "A Jurassic Frontier Just for You - Hunt a Hyper Gold Rathian",
        "A Tragedy in Silver and Gold - Hunt a Hyper Silver Rathalos and a Hyper Gold Rathian",
        "Heaven and Hell - Hunt a Chaotic Gore Magala",
        "Primal Screams - Hunt a Chaotic Gore Magala",
        "The Jungle VIP - Hunt a Furious Rajang",
        "Deranged Desert Deviljho - Hunt a Savage Deviljho",
        "Brachydios Brute Squad - Slay a Raging Brachydios",
        "Steel Yourself - Slay a Kushala Daora or repel it",
        "Blizzard Blower - Slay a Kushala Daora or repel it",
        "Out of Thin Air - Slay a Chameleos or repel it",
        "Into Thin Air - Slay a Chameleos or repel it",
        "Sandblasting - Slay a Teostra or repel it",
        "Explosion Marks the Spot - Slay a Teostra or repel it",
        "A Bone to Pick - Slay a Nakarkos",
        "Trial by Akantor - Slay an Akantor",
        "Polar Peril - Slay an Ukanlos",
        "Who Will Hunt the Rain? - Slay an Amatsu",
        "Glory Glory Alatreon - Slay an Alatreon",
        "Fade to Black - Slay a Fatalis or repel it",
        "The End is Nigh - Slay a Crimson Fatalis or repel it",
        "Old Fatalis - Slay a White Fatalis or repel it"
    ]
      
      var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      receivedMessage.channel.send("Go on hunters! Your quest is " + randomAnswer) 
}

  // Log our bot in using the token from https://discordapp.com/developers/applications/me
    client.login(process.env.ACCESS_TOKEN);