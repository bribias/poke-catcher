## HTML

1.  BUTTON
        -Why? CATCH THAT POKEMON!
            - Change the data in localStorage
            - Rerender the DOM
2. 3 radio buttons
        - Why? SELECT CAUGHT POKEMONN!
3.  3 images
        - Why? SHOW THAT POKEMON!

## EVENTS

1. On load
        - call renderThreePokemon
2. on clicking 'capture' 
        - Get:
             - Current Pokedex
                - figure out the id of the pokemon user selected
        - call renderThreePokemon

## DRY codeeee

renderThreePokemon
        -Generate 3 new random pokemon
            -use a while loop to prevent repeats 
        -Look at these new three pokemon and increment their encountered properties
            - if this is the first time we encountered this pokemon, initialzie a new item 
                { id: 'weedle, encountered: 1, captured: 0 }
            - otherewise, encountered++
        - Render images