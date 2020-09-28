# Conway's Game of Life

## Origins

[Conway's Game of Life](https://www.conwaylife.com/wiki/Conway's_Game_of_Life) is the best known example of a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton) created by British Mathematician [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway).

In October of 1970 [Martin Gardener](https://en.wikipedia.org/wiki/Martin_Gardner) introduced Life to the public in his "Mathematical Games" column in Scientific American. The game became an instant cult classic amongst computer programmers who could now access affordable minicomputers.

Since it's inception programmers have been taking on the challenge of programming their own versions of Life. This repo contains my version of Life, I hope you enjoy it!

## [Click here to see my version of the game](https://mandihamza.github.io/life/)

---

## The rules of Life

After reading about John Von Neumann's research on creating self replicating machines, Conway was inspired to distill Neumann's original 29 states to the bare essentials. 

Over the course of [18 months of coffee breaks](https://www.youtube.com/watch?v=R9Plq-D1gEk) with his colleagues at Princeton, he devised a [set of rules and expectations](https://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#cite_note-1) by experimenting on a go board.


![Life on a go board](https://upload.wikimedia.org/wikipedia/commons/1/18/%D0%98%D0%B3%D1%80%D0%B0_%22%D0%96%D0%B8%D0%B7%D0%BD%D1%8C%22.gif)

[Lev Kalmykov / CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0)

### Rules:

1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
2. Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
3. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
4. Any dead cell with exactly three live neighbours will come to life.

### Expectations:

1. There should be no initial pattern for which there is a simple proof that the population can grow without limit.
2. There should be initial patterns that apparently do grow without limit.
3. There should be simple initial patterns that grow and change for a considerable period of time before coming to an end in the following possible ways:
    - Fading away completely (from overcrowding or from becoming too sparse); or
    - Settling into a stable configuration that remains unchanged thereafter, or entering an oscillating phase in which they repeat an endless cycle of two or more periods.
