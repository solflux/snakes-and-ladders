# Snakes and Ladders

This library provides the game engine for Snakes and Ladders, based off the code kata from [Agile Katas](https://agilekatas.co.uk/katas/SnakesAndLadders-Kata).

## Getting Started

In future this package will be installable via npm, however that will come later.

This guide assumes you have the following already installed:
- node v18

To get a local copy up and running follow these simple steps:

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/solflux/snakes-and-ladders-kata.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run the tests
   ```sh
   npx test
   ```

## Usage

// todo: give examples once interface is defined

## Roadmap

- [x] Moving your token
    - [x] Token can move across the board
    - [x] Moves are determined by dice rolls
    - [x] Player can win the game
- [ ] Snakes and ladders
    - [ ] Snakes go down
    - [ ] Ladders go up
- [ ] Multiple players
    - [ ] Determining play order
    - [ ] Following play order
- [ ] Computer controlled character
    - [ ] Computer play order
    - [ ] Computer playing

## Contributing

To contribute please fork the repo and create a pull request. Alternatively open an issue tagged as "enhancement" and I wil look as soon as I am able.

When contributing code please adhere to the standards already present in the repository. Namely the use of Rome for linting, and the use of outside-in TDD when building features.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.