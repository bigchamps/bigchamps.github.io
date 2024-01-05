---
thumbnail: /assets/img/posts/Firefighter/firefighter.png
title: FireFighter - Creating a new 2d top down game
project: Fire Fighter
category: [Project, Game]
description: An Unity 2d top down game
---
<p style="text-align: left;">
I have a lot of good concepts for a game. This idea however seem great so I'll try to make it a reality. Here's a draft of it so far:</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">This game is based on Flash point.</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">Genre: Action, Strategy</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">Player: A fire fighter</p>
<p style="text-align: left;">Goal: Rescue people inside a building before the building burn out (OR totally subside the fire?)</p>
<p style="text-align: left;">Score: base on time, how many people you rescue (and how many died? penalties?)</p>
<p style="text-align: left;">Environment: A building interior from top down view with fog of war</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>UI Scene 1</strong>: This will contain splash image, start button, Sound on/off</p>
<p style="text-align: left;"><strong>UI Scene 2</strong>: This will contain mission select, Each will have a map selection image.</p>
<p style="text-align: left;"><strong>UI Scene 3</strong>: The game</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>Game Scene 1</strong>: you&rsquo;re inside the fire truck getting detail about the mission. This is the time when the player can review the building map structure and plan the best rout. Click continue to start.</p>
<p><img class="img-responsive" src="{{ site.url }}{{ site.baseurl }}\assets\img\posts\Firefighter\img1.png" alt="proto type 1"></p>
<p style="text-align: left;"><strong>Game Scene 2</strong>: Actual game. Timer will start here. Player will attempt to go inside the building and save the victims. The idea is that it will be very hard to suppress all the fire and the only goal is to rescue as many people as you can. (Should there be some mission that&rsquo;s possible to clear out the fire ?)</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">Other concept: Building are always possible to extinguish fire and rescue people is only for score.</p>
<p style="text-align: left;">Scene concept:</p>
<p><img class="img-responsive" src="{{ site.url }}{{ site.baseurl }}\assets\img\posts\Firefighter\img2.png" alt="proto type 2"></p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;">Real example:</p>
<p><img class="img-responsive" src="{{ site.url }}{{ site.baseurl }}\assets\img\posts\Firefighter\img3.png" alt="proto type 3"></p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>Mechanic</strong></p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>1. Interactable object</strong></p>
<p style="text-align: left;"><strong>Door</strong>: Door can be kick open or smash if stuck. Door can be burned down. Health is 100</p>
<p style="text-align: left;"><strong>Wall</strong>: Wall can collapse or smash. Health is 100</p>
<p style="text-align: left;">People that need to be rescue: people can be carried to safety, this will reduce movement speed. These people will be randomly generated through spawn point.</p>
<p style="text-align: left;"><strong>2. Fire spread mechanic</strong></p>
<p style="text-align: left;">Fire source will continuously spewing out fire. This will be randomly generated through spawn point.</p>
<p style="text-align: left;">Fire will spread to it&rsquo;s surrounding after a certain timer. (how we implement this is to have tile have a heat status. Fire will add to heat status to adjacent tile with max of 100. Once 100 it will cause fire. Any tile that is cause to be on fire will have heat status turn to 100.</p>
<p style="text-align: left;">After fire is extinguish, it will turn to smoke for 5s (add ventilation mechanic to get rid of smoke ? ). This will prevent vision from firefighter(basically a fog of war)</p>
<p style="text-align: left;">Fire hazard will be items that will explode if the tiles is on fire. This will be clearly mark to player by a symbol.</p>
<p style="text-align: left;">Explosion if a tile explode everything surrounding it will be instantly on fire. Anyone around it will die. This will be come a new fire source.</p>
<p style="text-align: left;"><strong>3. Limited resources:</strong></p>
<p style="text-align: left;">Heat: There&rsquo;s only so much heat fire fighter can endure. If it reach max you&rsquo;ll burn. (Add health?)</p>
<p style="text-align: left;">Water: There&rsquo;s limited amount of water we have to extinguish fire. So plan strategically to rescue people.</p>
<p style="text-align: left;"><strong>4. Fog of war:</strong></p>
<p style="text-align: left;">Every room is closed off and fire fighter only have vision of 2 radius tiles surrounding him. Every other room is in fog of war</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>5. Building collapse</strong></p>
<p style="text-align: left;">Instead of time, we&rsquo;ll have building collapse. Once the building is dmg after certain extend. It will collapse and kill everyone inside it.</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>6. Possible people(optional)</strong></p>
<p style="text-align: left;">when the game started, people it will show direction that possible people will be in.</p>
<p style="text-align: left;">Later addition, people can move around; run out the building if not injured</p>
<p style="text-align: left;">Arsonist?</p>
<p style="text-align: left;">&nbsp;</p>
<p style="text-align: left;"><strong>Game Scene 3</strong></p>
<p style="text-align: left;">This scene will show how many people you rescue (and how many died? penalties?) and how much time it took and your score (and star rating), Clicking continue in this scene will return user to mission select scene</p>
<p>&nbsp;</p>