const quote0 = {
  quote: "I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",
  media: ["taken"]
}

const quote1 = {
  quote: "Hold your ground, hold your ground! Sons of Gondor, of Rohan, my brothers! I see in your eyes the same fear that would take the heart of me. A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day. An hour of wolves and shattered shields, when the age of men comes crashing down! But it is not this day! This day we fight! By all that you hold dear on this good Earth, I bid you stand, Men of the West!",
  media: ["lord of the rings", "return of the king"]
}

const quote2 = {
  quote: "This... stuff? Oh, ok. I see. You think this has nothing to do with you. You go to your closet and you select, I don't know, that lumpy blue sweater, for instance, because you're trying to tell the world that you take yourself too seriously to care about what you put on your back. But what you don't know is that that sweater is not just blue, it's not turquoise. It's not lapis. It's actually cerulean. And you're also blithely unaware of the fact that in 2002, Oscar de la Renta did a collection of cerulean gowns. And then I think it was Yves Saint Laurent, wasn't it, who showed cerulean military jackets? I think we need a jacket here. And then cerulean quickly showed up in the collections of eight different designers. And then it, uh, filtered down through the department stores and then trickled on down into some tragic Casual Corner where you, no doubt, fished it out of some clearance bin.",
  media: ["devil wears prada"]
}

const quote3 = {
  quote: "It is an important and popular fact that things are not always what they seem. For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—while all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.",
  media: ["hitchhiker", "guide to the galaxy"]
}

const quote4 = {
  quote: "Then, what shall we die for? You will listen to me! Listen! The Brethren will still be looking here, to us, to the Black Pearl, to lead. And what will they see? Frightened bilge rats aboard a derelict ship? No. No, they will see free men and freedom! And what the enemy will see is the flash of our cannons. They will hear the ring of our swords, and they will know what we can do. By the sweat of our brows and the strength of our backs, and the courage of our hearts. Gentlemen. Hoist the colors!",
  media: ["pirates of the caribbean", "at world's end"]
}

const quote5 = {
  quote: "I believe in taking care of myself and a balanced diet and rigorous exercise routine. In the morning if my face is a little puffy I'll put on an ice pack while doing stomach crunches. I can do 1000 now. After I remove the ice pack I use a deep pore cleanser lotion. In the shower I use a water activated gel cleanser, then a honey almond body scrub, and on the face an exfoliating gel scrub. Then I apply an herb-mint facial mask which I leave on for 10 minutes while I prepare the rest of my routine. I always use an after shave lotion with little or no alcohol, because alcohol dries your face out and makes you look older. Then moisturizer, then an anti-aging eye balm followed by a final moisturizing protective lotion.",
  media: "american psycho"
}

const quote6 = {
  quote: "That you are a slave, Neo. Like everyone else, you were born into bondage. Born into a prison that you cannot smell or taste or touch. A prison for your mind. Unfortunately, no one can be told what the Matrix is. You have to see it for yourself. This is your last chance. After this there is no turning back. You take the blue pill, the story ends. You wake up in your bed and believe whatever you want to. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember, all I'm offering is the truth. Nothing more.",
  media: "matrix"
}

const quote7 = {
  quote: "Very well, where do I begin? My father was a relentlessly self-improving boulangerie owner from Belgium with low grade narcolepsy and a penchant for buggery. My mother was a fifteen year old French prostitute named Chloe with webbed feet. My father would womanize, he would drink, he would make outrageous claims like he invented the question mark. Sometimes he would accuse chestnuts of being lazy, the sort of general malaise that only the genius possess and the insane lament. My childhood was typical, summers in Rangoon, luge lessons. In the spring we'd make meat helmets. When I was insolent I was placed in a burlap bag and beaten with reeds, pretty standard really. At the age of twelve I received my first scribe. At the age of fourteen, a Zoroastrian named Vilma ritualistically shaved my testicles. There really is nothing like a shorn scrotum, it's breathtaking, I suggest you try it.",
  media: "austin powers"
}

const quote8 = {
  quote: "Welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club. The second rule of Fight Club is: you DO NOT talk about Fight Club! Third rule of Fight Club: if someone yells “stop!”, goes limp, or taps out, the fight is over. Fourth rule: only two guys to a fight. Fifth rule: one fight at a time, fellas. Sixth rule: the fights are bare knuckle. No shirt, no shoes, no weapons. Seventh rule: fights will go on as long as they have to. And the eighth and final rule: if this is your first time at Fight Club, you have to fight.",
  media: "fight club"
}

const quote9 = {
  quote: "You know what you look like to me, with your good bag and your cheap shoes? You look like a rube. A well-scrubbed, hustling rube with a little taste... Good nutrition has given you some length of bone, but you're not more than one generation from poor white trash, are you - Officer Starling...? That accent you're trying so desperately to shed - pure West Virginia. What was your father, dear? Was he a coal miner? Did he stink of the lamp...? And oh, how quickly the boys found you! All those tedious, sticky fumblings, in the back seats of cars, while you could only dream of getting out. Getting anywhere. Getting all the way - to the F...B...I.",
  media: "silence of the lamb"
}

const quotes = [quote0, quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9];


export function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}