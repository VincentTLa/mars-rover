# MARS ROVERS

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their onboard cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

To control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right, respectively, without moving from its current spot.

'M' means move forward one grid point and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

## Input:

The first line of input is the upper-right coordinates of the plateau. The lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y coordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

## Output:

The output for each rover should be its final coordinates and heading.

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E

# Application


https://user-images.githubusercontent.com/37315218/224194469-61172f15-afa6-48c3-9267-b7b52be60328.mov



# Philosophy

I have chosen to complete this task on React Native to hone my skills, as well as hoping to achieve a stage where the problem can be visualised using images and animations instead of just plain text.

https://github.com/mithi/react-philosophies

While coding I have tried to implement the philosophy that is spoken about within this github.

# Assumptions

## Design

To limit user error, I have split the inputs to their respective input fields, which is then validated.
The _size of the plateu_ and the _starting position_ are limited to entering only two numbers.

For a future implementation, I have set the application to be a Stack Navigation. This is for a potential animation screen to show, where once user submits, the animation will play showing the rover's steps and outputs.

## Assumptions made while coding:

- If the rover was outside of plateu then it is considered as 'fallen'.
- Rover cannot start outside of the plateu
- The Compass Points are N,E,S,W only

# Running the code

To start with, clone the project. Then,

To run the project locally, simply install packages on the folder using
`npm install`
and then run the project using
`npm start`

To view the project either use a device simulator such as XCode or Android studio.
The project can also be viewed on your own personal device using the Expo Go application. This can be run by scanning the QR code that is shown on terminal from running `npm start`

To test the application, run `npm run test`

# Reflection

When coding on future projects, I should follow a TDD approach and keep in mind of SOLID principles. I should also become more familiar with testing in jest.
