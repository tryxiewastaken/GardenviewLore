// Datos extraídos del script. Formato: N(id, tipo, título, fecha M/D/AAAA, escritor, [piezas], {extra})
const NOTES = [];
const N = (id, t, ti, d, w, p, x) => NOTES.push({ id, t, ti, d, w, p, ...(x || {}) });
const DL = "Delilah", DS = "Dessa";

N(1,"Note","Ichor","3/11/1982",DL,[
"It is Prana, Qi, Mana, Aṣẹ, call it whatever you want. After all, it can be anything. But what it is most definitely is the raw stuff of life itself.\n\nIt is Ichor.",
"It is ethereal and pure in nature, though mythology has it wrong. Ichor is not gold, it is blacker than darkness. It's a substance that is pure existence condensed into a liquid. A liquid so abundant with energy and life, it craves for a framework to attach to on a fundamental level.\n\nIt is my belief that by understanding Ichor, I will be able to unlock countless mysteries of the ages."]);

N(2,"Note","The Goal","4/2/1984",DL,[
"There's just not enough time in the day. If only I could use Ichor to slow down time, but I know that this beautiful material has its limitations.\n\nI have infinitely more questions than I do answers at this time and what's holding me back are two factors: Ichor quantity and time itself.",
"I formulated a plan to solve the prior. I now know that under a set type of circumstances, Ichor is able to self-replicate. I have designed specialized vats for Ichor self-replication, but I will require an entire facility to house such instruments. I need a tremendous amount of money and space to execute against this plan.",
"As far as the second limitation of time, well, I have a solution for that as well. It's the reason why I'm studying Ichor to begin with after all.\n\nWith the proper understanding and application I'll never have to worry about time ever again. This is The Goal."]);

N(3,"Note","Arthur Walton","9/7/1984",DL,[
"I reunited with Arthur Walton today to discuss my proposal to work together. Thankfully, he was highly receptive. I don't see why he wouldn't be, the opportunity to bring his little cartoon characters to life is likely a dream come true for a man like him.\n\nI will admit that he surprised me more than a few times during our meeting. At first, I incorrectly assumed that the financial gain that he could achieve by working with me would be the thing that appealed to him the most. Conversations around money were met with casual nods, and hand waves.",
"But when I told him that I theorized that our working together could make his creations a reality, there was a glimmer in his eye that I don't think I've seen from anyone else before. He smiled and leaned in, like he was trying to take in every word that I was saying to him. When I finished my proposal, he immediately agreed. No lawyers, no paperwork, no negotiation. He told me that he could tell that I was “something special.”",
"I understand why the man has found so much success in his career. Whether he means it or not, he has a way of making people feel heard. This will undoubtedly be an invaluable skill that he should put to use to secure further funds for what will now be our joint operation.\n\nI believe this partnership will be extremely fruitful."]);

N(4,"Transcript","The Birth of Dandy","7/21/1986",DL,[
"I've done it.\n\nAfter countless theories and late nights, I've finally done it.\n\nOn July 21st 1986, the first Ichor based life form was created by my hand.\n\nIt is L-001. Dandicus Dancifer. Dandy.\n\nArthur only let me study Dandy for a few moments before he took it in his arms and held it. I told him that I needed to conduct proper tests to ensure that it would hold its form, but Arthur told me that he knew that I had “done it.”",
"To my astonishment, when Arthur hugged Dandy, Dandy hugged Arthur back and spoke clear english with the same voice that it had in the TV show.\n\nArthur is taking a walk with Dandy as I write this. I have a perfect view of them from my office.\n\nA creature that was brought into existence mere moments ago with only Ichor and an assortment of illustrations is cognisant, capable of speech, and has fully developed motor skills.",
"And now it is walking in a garden, hand-in-hand with the man who imagined it as a boy.\n\nArthur kept saying it over and over. While there is no real value for me to say this, I'm feeling abnormally emotional and I'm compelled to agree with him:\n\nDandy is beautiful."]);

N(5,"Note","Dioda's Watching Habits",null,DS,[
"Dioda is such a strange Toon.\n\nShe's here in the Labs with me, where she's able to help me further Delilah's glorious work, yet she spends so much time watching the other Toons on the security cameras!",
"Her surveillance has been helpful when planning the best time to send her out and further our diplomacy. That work should take 1-2 hours of the day at maximum.\n\nIt seems like half of her free time is spent with her eye on the screens and the other half is spent yammering on about what the Toons are doing:",
"“Did you zee? Zprout and Cozmo baked cakez for Teagan'z latezt tea party! I wonder what tea zhe made?”\n\n“The Zircuz Troupe iz zo funny! It would be great to watch one of their performanzez in perzon.”\n\nHonestly, it's quite pathetic."]);

N(6,"Transcript","Stop Singing!",null,DS,[
"The incessant singing and humming has started to distract me from my research.\n\nYou must stop. You know that my studies are of the utmost importance."]);

N(7,"Transcript","Pay Brusha a Visit",null,DS,[
"Thank you for the report on Brusha.\n\nPoor thing, if the Toons were not led astray by Dandy, perhaps Tisha wouldn't have given up on their friendship so easily.\n\nNo doubt Brusha feels betrayed, alone…vulnerable.\n\nI think it may be time for a blackout tonight. When the lights go out, pay her a visit.\n\nOpen her eyes to the truth."]);

N(8,"Note","The Nature of Toons","1/21/1987",DL,[
"What is a Toon? It is a new type of creature. A combination of two elements, Ichor and a vessel that the Ichor uses as a framework for physiological and, most fascinatingly, psychological attributes.\n\nIt is not an animal and it is certainly not a human. It experiences emotions, is capable of complex thought, is highly aware and actively seeks external stimuli.\n\nIt does not age.",
"Initially, I believed that it would be best to classify these creatures as Ichor Dependent Entities, but for shorthand, they will commonly be referred to by their vernacular name of “Toon” as it supports the perception that these are simply cartoon characters brought to life. In reality, as my findings have proven time and time again, they are so much more.",
"They are closer to myth than they are to reality. They are as much golem as they are homunculi, and yet they're almost human in their capacity to learn and grow. They are familiar in appearance thanks to the framework that they are given with Arthur's designs.\n\nI do know this: They are wondrous creatures and I believe that they are the key to understanding everything."]);

N(9,"Note","Ichor Containment","5/8/1987",DL,[
"Ichor is an innately amorphous substance, yet like any liquid, if you give it a container to fill, it will do so without complication. But just filling vessels does not cause the Ichor to create life within and from that vessel.\n\nOne cannot just create a being out of Ichor by splashing it onto an object and waiting. No, the process requires much more competency than that. One must conduct the proper method of application to a form that holds it, informs it, and catalyzes it to trigger the creation of life.",
"In the case of creating a Toon, the proper combination of Ichor, a physical framework mold, and Arthur's animation materials like sketches and cels creates a successful result.\n\nThis is why Ichor can be contained in vials and test tubes and not create an army of sentient glassware."]);

N(10,"Note","The Grim Metamorphosis","6/11/1987",DL,[
"I have made another astonishing discovery.\n\nIt was my understanding that when Ichor was used to create a Toon, the beings' physiology would forever remain immutable, not to be affected by age or sickness. Short of injury from external stimuli, a Toon is effectively immortal.\n\nBut something changed.",
"I started to notice that sometimes Dandy's appearance was noticeably different from its design. Sometimes its eyes would flash red or its petals looked sharper. Additionally, Dandy recently started to tell Arthur and I that it was feeling strange things and had trouble breathing. Arthur believed that this was just an extension of the loneliness that it already reported, but this proved to be so much more.\n\nLate last night while I was preparing for the creation of M-001, I heard a horrible noise coming from Dandy's room. I rushed over and what I saw was a being that looked like it came from a nightmare.",
"Dandy had transformed into a beast that vaguely resembled its marketable cutesy design. Instead, a twisted abomination laid waste to everything it could.\n\nI had no way of controlling it, so I waited until it tired and the most remarkable thing happened. It turned back into Dandy.",
"I'm writing this note in the wreckage of what used to be my office. Thankfully Arthur and other employees didn't see what happened. I'll have to wipe the footage from what's left of our security cameras.\n\nI'm going to conduct further studies on what happened. I must know if there's a way to cure it, if there's a way to control it, and if there is a risk that this can happen to every Toon that's created.",
"I told Arthur that a chemical reaction was responsible for the destruction of the office and that he should stay away until everything is safe. I'll be working out of his office now. I also told him that he needs to provide me with a proper laboratory for my research. I requested for it to be beneath the center."]);

N(11,"Transcript","Late Night Library Meetings",null,DS,[
"I know about your little meetings with Brightney.\n\nI told you, you can only appear in front of the Toons who are a part of our plans. Brightney is not one of those Toons.\n\nThis is for our safety. Dandy's infection has spread to the others and it's our job to help purify them of their ailment. If you become corrupted, then we fail and Delilah is never going to come back.\n\nDo you want that to happen? Do you want to do that to me?\n\nLeave her be."]);

N(12,"Transcript","Dioda! Focus!",null,DS,[
"As humorous as it is to see all of the moments where Dandy and Dyle have been hurt or made fools of, please make sure you are not prioritizing the creation of your “Blooper Reels” over the very important work that you need to be doing."]);

N(13,"Note","Human Exposure to Ichor","4/14/1996",DL,[
"Last night I accidentally came in contact with unworked Ichor. It was late and I was careless, but thankfully I only touched it for a few seconds before making it to the decontamination shower to wash it from my hands.\n\nIt didn't feel like anything at all. It was not warm or cold, it did not hurt or soothe. Even now, 12 hours after exposure I have observed no noticeable physical effects, but that does not mean that it did not provoke a reaction.",
"Something feels wrong now. Something deep inside me. I find it unprofessional to chronicle my emotional state, let alone in a report such as this, but ever since I came in contact with Ichor I've felt uncomfortable. It's as if my body is naturally and subconsciously opposed to touching the material.",
"Unfortunately, no matter what I do, my hands have become stained by the Ichor. When I look at my fingers now, my fingerprints have a light black shine around them.",
"I admit, I've always been curious about how the human body reacts to Ichor. Human experimentation was always planned to be one of the next steps of my studies to reach The Goal.\n\nI will follow-up this report with any further findings, should they arise. Perhaps I should start wearing gloves just in case."]);

N(14,"Letter","Unfinished Work and Toons","10/5/1991",DL,[
"I understand that you're busy with your test screenings, but you MUST keep your animation team in check. I've been informed that one of your board artists (likely that one you've been coddling lately) showed Gourdy an animatic of Holloway Haunting.\n\nI have told you multiple times that we cannot allow Toons to consume source material that is work in progress.\n\nWe don't understand if there are long-term impacts to exposing Toons to unfinished source material."],{to:"Arthur"});

N(15,"Note","On the Powers of Toons","6/14/1992",DL,[
"An increasingly important part of my studies is understanding how some Toons possess powers that seemingly defy the laws of science.\n\nFor instance SC-011 is able to access a sort of pocket dimension within her head where she stores items that she collects and HSC-006 (potentially to be reclassified to SC-012) is able to phase through solid matter.",
"As a scientist, I am tempted to say that these extraordinary 'abilities' that the Toons wield are proof of scientific improbabilities such as extradimensional space and quantum tunneling, yet I fear that I'm being too rational. It is likely something far simpler and open-ended.\n\nMy hypothesis is that when Ichor merges with the design framework of a character as its vessel, the Ichor also brings to life the fantastic abilities that the character has in the Dandy's World TV show.\n\nIn short, Ichor bridges the gap of fiction and reality.",
"If my hypothesis is correct, this could change the world as we know it, but there's one more detail that expands my studies even further.",
"M-002 has the ability to read, interact with, and shape the dreams of Toons. Unlike the unique abilities of other Toons, this power is one that delves into the realm of the metaphysical. If the very dreams of Toons can be controlled, can other elements of a Toon be controlled if a Toon is designed to have such an ability?\n\nI must study this further."]);

N(16,"Note","Twisted Report #2: Ambrosia","4/22/1995",DL,[
"I have perfected the formula for a solution that allows me to both revert a Toon from its Twisted state when applied properly and reconstitute a Toon when its form has been damaged severely.\n\nAs the key ingredient to this solution is Ichor, I feel that it is appropriate to continue with the established Hellenic mythological nomenclature by deeming this substance, “Ambrosia.”",
"The process of creating Ambrosia is an extremely complicated series of steps that requires an abundance of Ichor and state of the art lab equipment.",
"I have yet to write the exact formula down to ensure that I alone am the sole person to understand how to create Ambrosia. My lab assistants will have to come to me to request for it to be made. This way I can record exactly how much of the substance exists at all times.",
"My understanding of how Ambrosia works is the following:\n\nWhen a Toon's physical form is damaged in a significant way such as becoming a Twisted (if the Toon is not Dandy), the Ichor that constitutes its body is unable to properly regain the design that it is based off of naturally.\n\nThe application of Ambrosia acts as a sort of 'reminder' to the Ichor within a Toon and causes it to take on its intended design again. The closest biological parallel to this would be the nature of stem cells found in animals and plants.",
"Ambrosia will be an instrumental tool in the growth of this business. It will also ensure our safety, maintain the secrecy of the existence of Twisteds, and, most importantly, will serve as yet another stepping stone on the path to The Goal."]);

N(17,"Transcript","Hurry Up!!",null,DS,[
"Dioda, I need you to be quicker when you bring Toons back to the Lobby after applying Ambrosia to them.\n\nLast night when a group had to leave behind Boxten I watched you apply Ambrosia to him and then wind up and listen to his music THREE WHOLE TIMES before you picked him up.\n\nWhat if he woke up? You'd have to attack him and then use a whole new dosage on him. You know that we can't be wasting Delilah's precious gift."]);

N(18,"Note","Lost Toons","8/11/1995",DL,[
"When a Toon's body undergoes substantial physical trauma or mutilation, it effectively shuts down and the Ichor that its body consists of starts to separate from its frame.\n\nAs I've stated before, I believe that a Toon is immortal. When a Toon enters this state, it is not dead, rather it enters a period of prolonged unconsciousness.\n\nI have taken to calling this state becoming “Lost.”",
"A properly applied dosage of Ambrosia brings a Toon back from this state and they quickly regain normal physical and mental functioning. Ergo, the “Lost” can be “Found.”\n\nI do not understand if a Toon can recover from being Lost on its own as I have not been afforded the time and resources to allow a Toon to be Lost for longer than a few days before Arthur starts asking about it.\n\nI will be conducting further research on this state when time allows."]);

N(19,"Note","Dandy's Ichor","5/29/1996",DL,[
"For reasons that have yet to be understood, the Ichor that Dandy's body consists of is entirely unique.\n\nNormally, once Ichor is used to create the body of a Toon, it cannot be used again if extracted.\n\nIn the case of Dandy's Ichor, the material maintains its potency and even gains new attributes.",
"This discovery is bewildering to say the least. Arthur would assuredly say that this just confirms that Dandy is “special” but nothing is so simple when it comes to science.\n\nI have a few new theories that I need to formalize thanks to this discovery.\n\nThe most intriguing is this: Could I use Dandy's Ichor to create new Toons?"]);

N(20,"Note","L-001 is Losing His Edge",null,DS,[
"Per my command, Dioda compiled footage of times when L-001 became a Twisted over the past decade.\n\nA noticeable commonality in the footage is that it's very clear that he is reluctant to transform.\n\nI have two theories why this is:\n- L-001 is ashamed of his ability to turn into a Twisted at will.\n- L-001's grasp on himself when he is Twisted has loosened and he's worried about hurting the other Toons.",
"Both theories produce the same result. L-001 is stunting himself. It seems that he is set on being his own downfall.\n\nHe is clearly going against the gift that was given to him when Delilah created him, a gift that I have honed.",
"If it's true, that he's doing this to himself to “protect” the other Toons, he's an even greater fool than I thought he was.\n\nHe knows that we are effectively immortal. If he manages to cause another Toon to become Lost, he can just bring them back! I've done it to Dioda hundreds of times."]);

N(21,"Note","Spring Cleaning","3/13/1997",DL,[
"The shareholders from the bank got together and presented an idea to Arthur and I with promises that it would increase our overall revenue.\n\nThey said that routinely selling my research to other large corporations and governments would allow us to generate “significant capital.” They don't even know what my work is and they still want to pawn it off.",
"While my work requires more funding, the Center's facilities require greater upkeep, and Arthur's plans for the construction of a new amusement park get loftier and loftier, my research is not a bargaining chip to sell to the highest bidder.\n\nThe death of progress is bureaucracy.\n\nPerhaps we're in need of a little “spring cleaning.” I have advised Arthur to allocate enough funds so we can gain full executive control of Gardenview for good."]);

N(22,"Letter","Shrimpo Hate Memo","2/2/1998",DL,[
"Please bring Shrimpo to the Labs tomorrow.\n\nI've heard that he's been having a hard time adjusting and his current handler has been ineffective.\n\nAdditionally, please report to me the Toons who he has been fraternizing with so I can correct them."],{to:"Devan"});

N(23,"Transcript","Remember! You! Are! Magnetic!",null,DS,[
"Please remember to stay away from the key rack when you have a full charge.  I found the key to one of the Ambrosia reserves on the ground the other day.\n\nIf we don't have Ambrosia, then we can't bring back the others when they become Lost or Twisted. If we can't bring back the others, then we can't finish Delilah's work.\n\nIf we can't finish Delilah's work, then I'll have no choice but to limit the security camera footage screen time you so very much adore.\n\nNo excuses."]);

N(24,"Note","Money Problems","10/20/1998",DL,[
"The most cursed thing in this world is money.\n\nArthur keeps coming to me and asking for my input on ways that we can reduce costs and increase profits.\n\nI keep on reminding him that I am a scientist. The business side of things are his problems to worry about. Though he makes a good point, the more money we make, the more funding my research gets. The further my research gets, the closer I am to achieving my Goal.",
"I suppose these concerns are not all bad though. Perhaps I can use our financial worries to get Arthur to finally approve some of my more practical experiments that require original Toon designs.\n\nAfter all, Toons created to help keep the Center and the upcoming Park running would surely cut down on costs."]);

N(25,"Note","The Creation of Dyle","1/27/1999",DL,[
"The first usage of Dandy's Ichor as a key reactant was a success. Gardenview now has its first Operational Assistant Toon, a dedicated Transit Manager.\n\nAt present, OA-001 is like a canvas without a painting. A tabula rasa who will be more effective, more loyal, and more cost saving than any human employee.",
"As the first Toon without a personality framework informed by the Dandy's World show, the task will fall to me to ensure that OA-001 fits his intended design.",
"Arthur insisted on giving him a name and thinks that OA should stand for “Off-Air.” I explained to him that such consideration is entirely unneeded. Unlike the Toons who interact with customers, OA-001 was specifically designed to be a member of the staff. He does not require a name to call himself nor any other attributes that could distract him from his job such as likes and dislikes.",
"But Arthur gave me that puppydog look that he gives whenever he's trying to guilt trip me, which never works, but I relented and settled on the name, “Dyle Timesly.”"]);

N(26,"Note","The Creation of Dessa","12/29/1999",DL,[
"OA-003 has been created. I will admit. She is unique.\n\nOf all the OA Toons that I requested from Arthur, this is the first who will work closely with me to assist in my ever-growing list of experiments and the treatment of other Toons. I normally let Arthur design all physical aspects of his characters, but I had a few specific requests.",
"I have found that OA-003 is as eager to perform in her tasks as she is eager to receive praise from me. While I do not believe this was an intended feature to her design, I am happy to make use of it. She will need to work hard to impress me.",
"I decided to name her myself. OA-003 will be referred to as Medessa Injectine. Arthur has taken to calling her “Dessa” for short.\n\nHer purpose? Simple.\n\nHelp me.\n\nIt's funny. Dandy, Dyle, Dioda and Dessa. Everyone that keeps Arthur's life in order has a name that starts with a “D.”"]);

N(27,"Note","The Work Continues",null,DS,[
"I was made to help Delilah.\n\nBut Delilah is not here. She hasn't been here for so, so long.\n\nI've compiled as much of her research as possible and highlighted each theory and hypothesis. There are hundreds!",
"In the late 1990's, she started to wonder what it would be like to modify the Toons beyond their original designs and push them to their limits.\n\nThis would not be like what they're naturally doing under Dandy's rule, no, this would be controlled and for the sake of scientific progress.\n\nThis would help Delilah.\n\nMaybe this would help bring her back to me."]);

N(28,"Note","Frustrations with Arthur","6/18/2000",DL,[
"It is a shame that my research has to be conducted around the administration of Gardenview. Arthur must understand that my studies are of the highest importance.\n\nThe creation of the Toons and the Gardenview Center were a means to an end. They were just supposed to be a revenue source to fund greater studies. Yes, Arthur's interests were never exactly aligned with my own, but I've done more than enough for him. I made his characters a reality.",
"Arthur can't help himself though. One day he wants to talk about franchising, then international locations, then back to the ridiculous theme park that we've now spent millions of dollars on and who knows how many years developing.\n\nIt's like every idea that pops into his head must be made a reality, and of course, the logistics fall on me.",
"If only I could correct him as if he was a Toon. If I could, my life would be far, far easier. But I'm still at the whim of an unruly man whose dreams have only become bigger."]);

N(29,"Note","The Simple Ichor Dependent Entity Hypothesis","10/26/2000",DL,[
"Of all the elements that make up a Toon, I believe that it is design above all else that informs the building blocks of what will eventually become the creature's personality traits.\n\nAs I've written before, it's my understanding that Ichor is innately without structure and craves both physical and psychological form.",
"Even OA Toons have personality types that lend themselves to their physical designs. For instance, Arthur couldn't help himself but add artistic flourishes when he designed OA-001. All I asked for was a Transit Operator, yet Arthur gave Dyle physical attributes like a neatly kept outfit and an upright posture. Even without source material exposure to further the development of personality and to fabricate memories, OA-001 quickly developed a firm and orderly personality.",
"I hypothesize that if one were to design a viable form completely absent of noticeable personality indicators, one could create a being that shares most of the attributes of a Toon, but is much simpler in function. By my estimations, this being would have significantly less capacity than a fully formed Toon, but would likely be able to be taught rudimentary skills.",
"I have some concerns around the act of creating a creature like this though. I'm unsure if these Simple Ichor Dependent Entities would be able to one day develop the capacity for complex thought. If so, using them as an unregulated cost-savvy labor force alternative would be entirely off the table.",
"Additionally, my calculations indicate that the amount of Ichor needed to create such a being would be greater than the capacity of the physical frame, thus, the being would constantly leak Ichor.\n\nI have enough messes to clean up."]);

N(30,"Note","Ichorlings",null,DS,[
"I've done it! I'VE DONE IT! In her name, with her hand guiding me, I've created life!\n\nI dug through a few of Delilah's studies and found diagrams that theorized that if Ichor was properly exposed to a vessel with no pre-set personality and no physical attributes that informed its intended design, a baseline being could be created.",
"Delilah's notes state that she had to set her thesis aside, but I think that in her benevolence she knew that one day her dutiful apprentice would need a stepping stone on the path to understanding exactly what make Toons tick.\nIt only took a few years of experimentation, but eventually I did it!",
"Dioda said that we should call them “Sketches” but that's stupid.\n\nThey don't look sketchy at all, they look drippy if anything.\n\nThey are beings made of Ichor, and almost nothing else, so I declare them the Ichorlings!"]);

N(31,"Note","Ichorling Limitations",null,DS,[
"I've been experimenting on Ichorlings for months now and no amount of poking or prodding with their creation formula has allowed me to improve upon Delilah's original thesis at all.",
"Sure, they're impressive. They obey commands when given and they are able to use complex tools, but something's off about them. It's in their eyes. It's like they're not fully formed yet.\n\nIt just goes to show that a Toon truly cannot achieve what a human can.\n\nWe are simply too limited."]);

N(32,"Transcript","The Goal (Note #2)","4/2/2000",DL,[
"What has happened to me?\n\nI've found myself worrying about the things that Arthur should be worrying about.\n\nWhere my mind was previously only concerned with experimentation and exploration, I now wonder if we're able to increase revenue year over year.\n\nI should be ashamed of myself.",
"These days I feel as if I've forgotten why I'm conducting my studies in the first place. Was this not all in the pursuit of understanding Ichor? To one day use it and change humankind forever?\n\nMy hands hurt from drawing formulas, my hair is beginning to thin and grey. The cycle of time keeps on turning and every day I grow closer to my end.\n\nJust like everyone else.\n\nNo. I refuse. I will not accept this limitation."]);

N(33,"Note","Ichor Source",null,DS,[
"In all of her incredible reports, Delilah only briefly mentions Gardenview's source of Ichor. If what I've found is anything to go by, the Ichor is still self-replicating in the vats many floors below.\n\nBut how is it this much?",
"If only we could get to the deepest floors of the Labs. Even Dioda and I as Twisteds are not strong enough to clear the rubble."]);

N(34,"Note","Ichor Flow","9/24/2000",DL,[
"The Ichor is replicating too slowly.\n\nWhat makes matters worse is that Toons have started to turn Twisted far more routinely. I don't know if it's because they have become more sensitive, if Toons are actually experiencing a sort of unforeseen senescence, or because of some other external factors.",
"Now that Arthur knows about Twisteds, I thought he'd understand the importance of having a stockpile of Ichor to create Ambrosia, but he's been no help. I tried talking to him yesterday and he just gave me that smile he always gives me and told me, “he trusted me to find the answer.”",
"I've been racking my brain about how to solve this problem. The only thing that I can hypothesize is that if I transfect the Ichor with the right external material I could trigger it to self-replicate faster. But what could a miracle substance like Ichor possibly require for faster replication? Anything that's introduced to Ichor is used as a baseline for something else to be created, not more usable Ichor.\n\nEverything except Dandy, of course.",
"I fear that this need is about to be urgent. If we don't have enough Ichor, we can't create more Toons, we can't create more Ambrosia and we won't be able to keep Gardenview running properly.\n\nIchor MUST flow and flow freely or The Goal will never be achieved."]);

N(35,"Transcript","Ruined Tapes",null,DS,[
"Thanks to you, an entire stack of tapes is completely ruined.\n\nYou NEED to wear your gloves at all times! The EMF that your hands emit is too powerful for you to be interacting with tapes!\n\nDispose of the ruined ones when you can. I don't care where they go. Scatter them around for all I care."]);

N(36,"Note","Influencing Tapes",null,DS,[
"Yesterday, Dioda brought in SC-023 who had recently Twisted. Before I applied a dosage of Ambrosia to undo his Twisted state, I decided to experiment with the Ichor casting process based on one of the few test formulas that Delilah left behind.\n\nIt was just a slight modification that she theorized could potentially assist in psychological stabilization, but the result was something much, much bigger.",
"SC-023 still lacked full control over himself, but he was very receptive to my verbal directions. He was still Twisted and near feral in his behavior, but he did as I commanded him to. When Dioda released him from his restraints, he tried to run away as he normally does when he is Twisted, but SC-023 immediately obeyed when I told him to stop.",
"Delilah's brilliance has revealed yet another mystery of my kind. If Twisteds can be controlled like this, there may be a way to fully control a Toon in their normal state.\n\nI must explore this even more.\n\nThis much influence over Toons should be wielded by a human, but as Delilah's hand, I will make great use of this discovery in service to her work."]);

N(37,"Letter","Gardenview Park","10/24/2001",DL,[
"I've done as you asked and calculated the initial Ichor requirements for Gardenview Park.\n\nI've told you time and time again that our Ichor output is insufficient to help keep the Toons properly maintained as it is.\n\nWhat you're asking for isn't just impossible, it's in the realm of fantasy. But you asked for a calculation, so I'll deliver. See below:\n\nPark Cast Toons:"],{to:"Arthur",stain:true});

N(38,"Transcript","Missing Tape",null,DS,[
"Where did that tape with Arthur and Delilah go? I wanted to review it despite it being magnetized.\n\nYou didn't dispose of it with the rest of the ruined bunch, did you???"]);

N(39,"Transcript","Find That Tape",null,DS,[
"I can't stop thinking about the tape that Delilah had on her person when I saw her last.",
"Could that be the tape that L-001 has been looking for all this time? Could it contain the hard truth about what happened?",
"We need to find it at all costs. I don't care if you need to scout the entire center.\n\nFind that tape before L-001 does."]);

N(40,"Letter","Letter to Dyle",null,DS,[
"I hope you're enjoying being Dandy's little pet. While I'm disgusted that you still associate yourself with him, I want you to know that I only hold a little bit of a grudge against you.\n\nTo show how kind I am, I'm going to let you in on a little secret that I think that rotten little weed has known about for quite some time.",
"I'm sure you've noticed that the Ichor is flowing quite freely across the center. While I regret to tell you that Dioda and I still have no idea where the Ichor's exact source is, we did manage to access the database that dear Delilah used to report Ichor reserves.\n\nI think you're going to want to know what we found out.\n\nFind Me."],{to:"Dyle"});

N(41,"Letter","Letter to L-001",null,DS,[
"How much longer are you going to keep this up, L-001?\n\nYou may not have seen what Dioda and I have been up to since YOU made the center shut down, but we've been watching you. We've been watching all of you.\n\nI see what you're doing. It's pathetic seeing someone in such denial.",
"But I won't get in the way of your “Ichor Operation.” In fact, I think I'll encourage the other Toons to keep it up while they help me with my research.\n\nI have a feeling that you know why it's so important to clear the pipes.\n\nBut know that one day, I'm going to take everything away from you the way you took her from me."],{to:"L-001"});

N(42,"Transcript","Leaving","6/27/2002",DL,[
"How could he do this? After all I've done for him? After all the progress I've made?\n\nThe Goal is still in my grasp and I won't let him get in my way.\n\nI still don't understand why, but Dandy is the key. The Ichor in his body is the key. It always has been.",
"I've wasted decades of my life helping Arthur build a house of cards that he just knocked down like a child throwing a tantrum.\n\nClosing the center for this? He's out of his mind.\n\nI needed more time to get to the bottom of this, but I don't think I'll be afforded it at Gardenview.\n\nI think it's time for me to leave. I'm taking my research and I'm taking my creation with me."]);
