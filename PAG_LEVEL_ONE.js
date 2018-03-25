//Images
var media = document.getElementById("images");
//Text
var text = document.getElementById("text");
//Button Box
var buttonBox = document.getElementById('buttonBox');
//User Input
var input = document.getElementById('input');
//Username -- Still not used
var userName;

//Replaces text with words passed in as params
var wordReplace = function(words) {
    text.innerHTML = words.replace("User name", userName);
};

//Replaces img with img passed in as param
var addImg = function(img) {
    media.style.backgroundImage = "url(" + img + ")";
};

//Changes buttons with buttons specified as params
var changeButtons = function(buttonList) {
    buttonBox.innerHTML = "";
    for (var i = 0; i < buttonList.length; i++) {
        buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
    }
};

//Calls the scene passed in as params
var advanceTo = function(s) {
    addImg(s.image);
    wordReplace(s.text);
    changeButtons(s.buttons);
};

//Scene dict and scene dec
var scenario = {};
scenario = {
    one: {
        image: "http://i65.tinypic.com/dxmo7b.jpg",
        text: "Welcome to Programming Across Generations level one! Enter your name below to begin."
    },
    two: {
        image: "http://i64.tinypic.com/2ex31na.jpg",
        text: "Throughout this course, you will learn a little about some of the concepts used to create programs like the one you're using right now.",
        buttons: [
            ["Continue", "advanceTo(scenario.three)"]
        ]
    },
    three: {
        image: "https://thumb.ibb.co/mc3Nva/Female_Knight.png",
        text: "In order to complete this program, you will be asked to respond using the controls below.",
        buttons: [
            ["Continue", "advanceTo(scenario.four)"]
        ]
    },
    four: {
        image: "http://i66.tinypic.com/14txwro.png",
        text: "Periodically, you will be asked to try it yourself. To do this, click on the image of the Programming Across Generations Try It Yourself Editor in the top left corner (go ahead and open this now). ",
        buttons: [
            ["Continue", "advanceTo(scenario.six)"],
            ["Exit", "advanceTo(scenario.two)"]
        ]
    },
    five: {
        image: "//img",
        text: "Hi! This is Programming Across Borders level one. Here, you will get your feet wet in a programming language known as 'Python'.",
        buttons: [
            ["Continue", "advanceTo(scenario.six)"]
        ]
    },
    six: {
        image: "https://thumb.ibb.co/mc3Nva/Female_Knight.png",
        text: "Python is an object-oriented language that is used to make things like video-games.",
        buttons: [
            ["Continue", "advanceTo(scenario.seven)"]
        ]
    },
    seven: {
        image: "//img",
        text: "By the end of this course, you will be able to create a really cool program with turtle!",
        buttons: [
            ["Continue", "advanceTo(scenario.eight)"]
        ]
    },
    eight: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "In order to start, we must first tell the computer to get the turtle. Do this by typing the line 'import turtle' without quotes in the first line of the Try It Yourself editor.",
        buttons: [
            ["Continue", "advanceTo(scenario.nine)"]
        ]
    },
    nine: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "Import tells Python to get some code to do a specific things. Another example we'll get to later in this level is 'math'.",
        buttons: [
            ["Continue", "advanceTo(scenario.ten)"]
        ]
    },
    ten: {
        image: "//Jacob confused",
        text: "What does 'import' do in Python?",
        buttons: [
            ["Tells Python to get some code to do a specific thing", "advanceTo(scenario.eleven)"],
            ["Tells Python to just get the turtle", "advanceTo(scenario.twelve)"]
        ]
    },
    eleven: {
        image: "//Jacob happy",
        text: "Correct! Import is useful for so many different things.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirteen)"]
        ]
    },
    twelve: {
        image: "//Jacob sad",
        text: "Incorrect!",
        buttons: [
            ["Continue", "advanceTo(scenario.ten)"]
        ]
    },
    thirteen: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "Now we have a turtle, but he has no home! Let's make him a nice home.",
        buttons: [
            ["Continue", "advanceTo(scenario.fourteen)"]
        ]
    },
    fourteen: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "In order to give the turtle a home, we need to make a variable for it. A variable is something that stores something else. An example is 'age = 10'. In this case, age is a variable, and 10 is what it represents.",
        buttons: [
            ["Continue", "advanceTo(scenario.fifteen)"]
        ]
    },
    fifteen: {
        image: "//Jacob confused",
        text: "What does a variable do?",
        buttons: [
            ["Store things", "advanceTo(scenario.sixteen)"],
            ["Makes Python a scripting language", "advanceTo(scenario.seventeen)"]
        ]
    },
    sixteen: {
        image: "//Jake happy",
        text: "Correct! Python does a great job at helping us store things that we can use over and over again.",
        buttons: [
            ["Continue", "advanceTo(scenario.eighteen)"]
        ]
    },
    seventeen: {
        image: "//Jake sad",
        text: "Incorrect! Try again.",
        buttons: [
            ["Continue", "advanceTo(scenario.fifteen)"]
        ]
    },
    eighteen: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "We're going to create a home for the turtle by saving the portion of the screen that will become the 'house' for the turtle as a variable.",
        buttons: [
            ["Continue", "advanceTo(scenario.nineteen)"]
        ]
    },
    nineteen: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "As a good coding practice, always name the variables you use after what they're there for.",
        buttons: [
            ["Continue", "advanceTo(scenario.twenty)"]
        ]
    },
    twenty: {
        image: "http://i67.tinypic.com/jg137b.png",
        text: "Since the home for the turtle will be essentially a window, let's name the variable that will store the home 'window'.",
        buttons: [
            ["Continue", "advanceTo(scenario.twentyone)"]
        ]
    },
    twentyone: {
        image: "http://i65.tinypic.com/2zgcck0.png",
        text: "Let's do this by declaring the variable like so: 'window = turtle.Screen()' - make sure to put this on a new line.",
        buttons: [
            ["Continue", "advanceTo(scenario.twentytwo)"]
        ]
    },
    twentytwo: {
        image: "http://i65.tinypic.com/2zgcck0.png",
        text: "Notice that we make a new window by getting the 'Screen' portion of turtle. The period lets Python know that  we are getting a certain method in the turtle class.",
        buttons: [
            ["Continue", "advanceTo(scenario.twentythree)"]
        ]
    },
    twentythree: {
        image: "http://i65.tinypic.com/2zgcck0.png",
        text: "A class is like a bunch of code that does a specific thing, and a method is just getting a small portion of that library to do an even more specific task.",
        buttons: [
            ["Continue", "advanceTo(scenario.twentyfour)"]
        ]
    },
    twentyfour: {
        image: "//Jake confused",
        text: "What does the period operator do in Python?",
        buttons: [
            ["Allows the programmer to access specific 'code snippets' within a class.", "advanceTo(scenario.twentyfive)"],
            ["Allows the programmer to execute a .exe file", "advanceTo(scenario.twentysix)"]
        ]
    },
    twentyfive: {
        image: "//Jake happy",
        text: "Correct! We'll explore classes and methods more in this module.",
        buttons: [
            ["Continue", "advanceTo(scenario.twentyseven)"]
        ]
    },
    twentysix: {
        image: "//Jake sad",
        text: "Incorrect! Try again pal!",
        buttons: [
            ["Continue", "advanceTo(scenario.twentytwo)"]
        ]
    },
    twentyseven: {
        image: "http://i64.tinypic.com/2wojd6r.png",
        text: "Now we can access the turtle, and we've defined a home, all we need to do is to name the turtle and teach it some cool tricks!",
        buttons: [
            ["Continue", "advanceTo(scenario.twentyeight)"]
        ]
    },
    twentyeight: {
        image: "http://i65.tinypic.com/2zgcck0.png",
        text: "To name the turtle, we need to name a variable with the same name as the name that you wish for your turtle.",
        buttons: [
            ["Continue", "advanceTo(scenario.twentynine)"]
        ]
    },
    twentynine: {
        image: "http://i68.tinypic.com/28m21ae.png",
        text: "Name the turtle like this: 'name = turtle.Turtle()' where you replace 'name' with the name that you want for your turtle. I'll name mine turtle.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirty)"]
        ]
    },
    thirty: {
        image: "http://i68.tinypic.com/28m21ae.png",
        text: "In the previous slide, we accessed the turtle class, specifically the Turtle method in order to create a new turtle, which is now stored inside a variable in which you named the turtle. I named mine turtle, so I'll continue to refer to my turtle as turtle.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtyone)"]
        ]
    },
    thirtyone: {
        image: "http://i67.tinypic.com/16ns0g.png",
        text: "At this point in the program, you should have an import declaration, a screen declaration, and a turtle declaration. If you do not, you should back up now in the program and fix what you don't have.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtytwo)"]
        ]
    },
    thirtytwo: {
        image: "http://i68.tinypic.com/28m21ae.png",
        text: "Now that we have all we need, let's style the game a bit to make it look better.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtythree)"]
        ]
    },
    thirtythree: {
        image: "http://i68.tinypic.com/28m21ae.png",
        text: "First, let's color our screen.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtyfour)"]
        ]
    },
    thirtyfour: {
        image: "http://i63.tinypic.com/16qa6f.png",
        text: "Remember that the name of the variable that holds our screen is named 'window', so to color it, let's access the bgcolor method of the variable 'window', do this by writing the line 'window.bgcolor('color')'",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtyfive)"]
        ]
    },
    thirtyfive: {
        image: "http://i63.tinypic.com/16qa6f.png",
        text: "Make the color anything that you want. I'll make the home for my turtle light blue by writing the line 'window.bgcolor('lightblue')'. Click Run after to see the results.",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtysix)"]
        ]
    },
    thirtysix: {
        image: "//img",
        text: "How do you define the color of a screen in Python turtle?",
        buttons: [
            ["turtle.Turtle('green')", "advanceTo(scenario.thirtyseven)"],
            ["window.bgcolor('lightblue')", "advanceTo(scenario.thirtyeight)"]
        ]
    },
    thirtyseven: {
        image: "//img",
        text: "Incorrect! Try again pal!",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtythree)"]
        ]
    },
    thirtyeight: {
        image: "//img",
        text: "Correct! You're really going places!",
        buttons: [
            ["Continue", "advanceTo(scenario.thirtynine)"]
        ]
    },
    thirtynine: {
        image: "http://i63.tinypic.com/16qa6f.png",
        text: "Now we have a nice home for the turtle, but we need to give the turtle itself some color!",
        buttons: [
            ["Continue", "advanceTo(scenario.fourty)"]
        ]
    },
    fourty: {
        image: "//img",
        text: "To add color to the turtle, we need to access the color method of the turtle. How do you think this is done?",
        buttons: [
            ["name.color('color')", "advanceTo(scenario.fourtyone)"],
            ["import math", "advanceTo(scenario.fourtyone)"]
        ]
    },
    fourtyone: {
        image: "http://i63.tinypic.com/x60hzt.png",
        text: "The right way to set the color of the turtle is to write name.color('color') to a new line, where you replace 'name with the name of the turtle and 'color' with whichever color you want.",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtytwo)"]
        ]
    },
    fourtytwo: {
        image: "http://i63.tinypic.com/x60hzt.png",
        text: "Now, we need to tell the turtle how big to be.",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtythree)"]
        ]
    },
    fourtythree: {
        image: "//img",
        text: "To do this, we need to access the pensize method of the turtle variable. How do we do that?",
        buttons: [
            ["name.pensize(#)", "advanceTo(scenario.fourtyfour)"],
            ["name.up()", "advanceTo(scenario.fourtyfour)"]
        ]
    },
    fourtyfour: {
        image: "http://i67.tinypic.com/243279z.png",
        text: "The correct way to set the size is name.pensize(#) where name is the name of your turtle and # is a whole number (it's better if this number is positive and less than ten).",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtyfive)"]
        ]
    },
    fourtyfive: {
        image: "http://i67.tinypic.com/243279z.png",
        text: "Great! All that's left is to tell the turtle what shape to be... which is the shape of a turtle.",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtysix)"]
        ]
    },
    fourtysix: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "To do this, write the line 'name.shape('turtle')' without the outside quotes, where name is whatever you named your turtle.",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtyseven)"]
        ]
    },
    fourtyseven: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "Great! Now we have everything we need to start telling the turtle to move!",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtyeight)"]
        ]
    },
    fourtyeight: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "The turtle knows basic moves. For now, we'll just use left, right, and forward.",
        buttons: [
            ["Continue", "advanceTo(scenario.fourtynine)"]
        ]
    },
    fourtynine: {
        image: "//img",
        text: "Our ultimate goal here is to tell the turtle to make a triangle. What kinds of things do you think we'll need?",
        buttons: [
            ["Angles and the lengths of the sides", "advanceTo(scenario.fifty)"],
            ["How far the turtle has moved", "advanceTo(scenario.fifty)"]
        ]
    },
    fifty: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "We have to know the angles of the triangle and the lengths of the sides. How far the turtle has moved can be measured, but isn't very useful here.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftyone)"]
        ]
    },
    fiftyone: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "We want to know how big to make the triangle, so we need some integers that dictate this.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftytwo)"]
        ]
    },
    fiftytwo: {
        image: "//img",
        text: "We're going to need to save the numbers so we can give them to the turtle, how can we acomplish this?",
        buttons: [
            ["Use variables", "advanceTo(scenario.fiftythree)"],
            ["Import the math module", "advanceTo(scenario.fiftyfour)"]
        ]
    },
    fiftythree: {
        image: "//img",
        text: "Correct! We have to use a variable to store this information in for later so that the turtle knows how far to move.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftyfive)"]
        ]
    },
    fiftyfour: {
        image: "//img",
        text: "Incorrect. We have to use a variable which acts like a bucket, so that the turtle can look in the bucket later on to see the angles and size that the user told us.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftyfive)"]
        ]
    },
    fiftyfive: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "A variable in Python is declared by stating the name of the variable (like 'angle' for example) followed by an equals sign and a value, as we looked at earlier.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftysix)"]
        ]
    },
    fiftysix: {
        image: "data_types.png",
        text: "We're going to look at some values (better known as data types) for the next little bit.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftyseven)"]
        ]
    },
    fiftyseven: {
        image: "//img",
        text: "One kind of data type is an integer, which is just a number without a decimal (1,2,3, etc...).",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftyeight)"]
        ]
    },
    fiftyeight: {
        image: "//img",
        text: "A boolean is either true or false. These data types are usesul for loops which we'll look at later.",
        buttons: [
            ["Continue", "advanceTo(scenario.fiftynine)"]
        ]
    },
    fiftynine: {
        image: "//img",
        text: "Another data type is the float. A float has numbers past the decimal. For example: 1.0, 1.1, and so on.",
        buttons: [
            ["Continue", "advanceTo(scenario.sixty)"]
        ]
    },
    sixty: {
        image: "//img",
        text: "Lastly, we'll look at strings, which are basically  just words.",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtyone)"]
        ]
    },
    sixtyone: {
        image: "//img",
        text: "Of course, there are more data types than this. If you would like to know more about data types, check out the supplemental content section of the Programming Across Borders website.",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtytwo)"]
        ]
    },
    sixtytwo: {
        image: "//img",
        text: "Which of these is NOT a data type covered so far at this point in the course?",
        buttons: [
            ["Integer", "advanceTo(scenario.sixtyfour)"],
            ["Strings", "advanceTo(scenario.sixtyfour)"],
            ["Tuple", "advanceTo(scenario.sixtythree)"]
        ]
    },
    sixtythree: {
        image: "//img",
        text: "Good job! We haven't talked about tuples yet, and probably won't in the duration of this course",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtyfive)"]
        ]
    },
    sixtyfour: {
        image: "//img",
        text: "Nope. We've already talked about those. Try again.",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtytwo)"]
        ]
    },
    sixtyfive: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "Okay, now we need to store some numbers. Since we're going to make a triangle, we need the measure of the angle (to keep things simple, we're making an equaladeral triangle).",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtysix)"]
        ]
    },
    sixtysix: {
        image: "//img",
        text: "What's a good angle measure for an equaladeral triangle? ",
        buttons: [
            ["500", "advanceTo(scenario.sixtyseven)"],
            ["120", "advanceTo(scenario.sixtyseven)"]
        ]
    },
    sixtyseven: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "We need all of the interior angles to add to 360, so 120 is the best option.",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtyeight)"]
        ]
    },
    sixtyeight: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "Great! Now, we need to store that number in a variable.",
        buttons: [
            ["Continue", "advanceTo(scenario.sixtynine)"]
        ]
    },
    sixtynine: {
        image: "//img",
        text: "Which of these data types would we store the number 120 in?",
        buttons: [
            ["Integer", "advanceTo(scenario.seventy)"],
            ["Float", "advanceTo(scenario.seventyone)"]
        ]
    },
    seventy: {
        image: "//img",
        text: "Right. An integer is the data type that we use to store whole numbers in.",
        buttons: [
            ["Continue", "advanceTo(scenario.seventytwo)"]
        ]
    },
    seventyone: {
        image: "//img",
        text: "Nope. You might want to review data types again",
        buttons: [
            ["Try the question again", "advanceTo(scenario.sixtynine)"],
            ["Look at data types again", "advanceTo(scenario.fiftyseven)"]
        ]
    },
    seventytwo: {
        image: "http://i67.tinypic.com/oczs2.png",
        text: "Now we just have to declare and initialize the variable that'll hold the the angle measures for the triangle.",
        buttons: [
            ["Continue", "advanceTo(scenario.seventythree)"]
        ]
    },
    seventythree: {
        image: "http://i66.tinypic.com/4vsa9v.png",
        text: "I did this by naming the variable and initializing the value like this: 'angle = 120'",
        buttons: [
            ["Continue", "advanceTo(scenario.seventyfour)"]
        ]
    },
    seventyfour: {
        image: "http://i66.tinypic.com/4vsa9v.png",
        text: "Since the variable 'angle' is now declared and initialized, we need a variable that is similar to it that stores the size of each side in the triangle.",
        buttons: [
            ["Continue", "advanceTo(scenario.seventyfive)"]
        ]
    },
    seventyfive: {
        image: "//img",
        text: "If were going to make an equiladeral triangle, what must be true about each side (hint: each angle had to be the same measure)?",
        buttons: [
            ["Each side must be the same size", "advanceTo(scenario.seventysix)"],
            ["The measure of each side must add up to 360", "advanceTo(scenario.seventysix)"]
        ]
    },
    seventysix: {
        image: "http://i66.tinypic.com/4vsa9v.png",
        text: "If you said that each side must be of equal measure, then you were correct. This number can be anything, but let's keep it fairly small due to the limited amount of space we have on screen.",
        buttons: [
            ["Continue", "advanceTo(scenario.seventyseven)"]
        ]
    },
    seventyseven: {
        image: "http://i66.tinypic.com/4vsa9v.png",
        text: "The variable that stores the value we'll use to tell the turtle how big to draw the triangle must be an integer, just like we did when we declared a variable for the angle measures.",
        buttons: [
            ["Continue", "advanceTo(scenario.seventyeight)"]
        ]
    },
    seventyeight: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "I named my variable 'size' and initialized its value to 50.",
        buttons: [
            ["Continue", "advanceTo(scenario.seventynine)"]
        ]
    },
    seventynine: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "Your variable should say something like 'size = 50', making sure to put it on a new line and remove the quotation marks. If yours does not look similar to this, please fix it now.",
        buttons: [
            ["Continue", "advanceTo(scenario.eighty)"]
        ]
    },
    eighty: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "Okay. Now we have a turtle that we want to draw a triangle, angle measurements, and the size that we want the triangle to be. We can finally begin to instruct the turtle as to how to move.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightyone)"]
        ]
    },
    eightyone: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "We're going to be accessing methods on your turtle. To begin thinking about this, recall the name of your turtle (mine's name is turtle).",
        buttons: [
            ["Continue", "advanceTo(scenario.eightytwo)"]
        ]
    },
    eightytwo: {
        image: "//img",
        text: "Also remember that accessing a method of something requires a certain operator. What is this operator?",
        buttons: [
            ["Period operator", "advanceTo(scenario.eightythree)"],
            ["Concactination operator", "advanceTo(scenario.eightythree)"]
        ]
    },
    eightythree: {
        image: "//img",
        text: "If you said the period operator, then you are correct. The period allows us to access a certain member of something.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightyfour)"]
        ]
    },
    eightyfour: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "Let's talk about some of the different methods that we will be accessing throughout the rest of this course.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightyfive)"]
        ]
    },
    eightyfive: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "One of these methods is 'forward'.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightysix)"]
        ]
    },
    eightysix: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "You access the forward method by stating the name of what you want it to act upon followed by the period operator and a set of parenthesis that hold the value in the form of an integer.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightyseven)"]
        ]
    },
    eightyseven: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "The value that goes into the  set of parenthesis is known as a parameter.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightyeight)"]
        ]
    },
    eightyeight: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "Just like variables, paramaters accept data types.",
        buttons: [
            ["Continue", "advanceTo(scenario.eightynine)"]
        ]
    },
    eightynine: {
        image: "http://i67.tinypic.com/2a4z6km.png",
        text: "The data type that we pass in  to the 'forward' method is a number, and in our case, an integer.",
        buttons: [
            ["Continue", "advanceTo(scenario.ninety)"]
        ]
    },
    ninety: {
        image: "http://i63.tinypic.com/2w2m26u.png",
        text: "So, to use the 'forward' method in its entirety, we would write the line 'name.forward(x)' where name is the name of your turtle and x (lets make x less than 50 so the turtle doesn't go off-screen).",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetyone)"]
        ]
    },
    ninetyone: {
        image: "http://i63.tinypic.com/2w2m26u.png",
        text: "Now, if you run the code, the turtle will move forward by whatever measure that you specified for x in the last scenario.",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetytwo)"]
        ]
    },
    ninetytwo: {
        image: "http://i63.tinypic.com/2w2m26u.png",
        text: "We need to make it do more than just move in a straight line though. We need to make a triangle.",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetythree)"]
        ]
    },
    ninetythree: {
        image: "http://i63.tinypic.com/2w2m26u.png",
        text: "We can begin to accomplpish this by using the 'left' method to act on the the turtle.",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetyfour)"]
        ]
    },
    ninetyfour: {
        image: "http://i63.tinypic.com/2w2m26u.png",
        text: "The 'left' method accepts one parameter of a degree number as an integer.",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetyfive)"]
        ]
    },
    ninetyfive: {
        image: "http://i63.tinypic.com/2w2m26u.png",
        text: "Just like with the forward method, we use the name of the turtle, the period operator, the name of the method, and a set of parenthesis with parameters inside",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetysix)"]
        ]
    },
    ninetysix: {
        image: "http://i68.tinypic.com/21jylib.png",
        text: "All together, you should have a line that says something like 'name.left(120)'",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetyseven)"]
        ]
    },
    ninetyseven: {
        image: "//img",
        text: "Fill in the blank: name of operand, period operator, ____, parenthesis, input parameters",
        buttons: [
            ["Name of variable", "advanceTo(scenario.ninetynine)"],
            ["Name of method", "advanceTo(scenario.ninetyeight)"],
            ["Name of namespace", "advanceTo(scenario.ninetynine)"]
        ]
    },
    ninetyeight: {
        image: "//img",
        text: "Correct! The name of the method should come after the peiod operator.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundred)"]
        ]
    },
    ninetynine: {
        image: "//img",
        text: "Try again pal!",
        buttons: [
            ["Continue", "advanceTo(scenario.ninetyseven)"]
        ]
    },
    onehundred: {
        image: "http://i68.tinypic.com/21jylib.png",
        text: "Okay. So, the line 'name.left(x)' should be in your code, where name is the name of your turtle and x is a number (an integer value of 120 would work best in our case).",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredone)"]
        ]
    },
    onehundredone: {
        image: "http://i68.tinypic.com/21jylib.png",
        text: "Now, we have two statements that tell the turtle to move forward by a number and to move left by a number, but if you remember, we previously created variables that stored these numbers for us.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwo)"]
        ]
    },
    onehundredtwo: {
        image: "//img",
        text: "To use these, let's just replace the numbers inside the parenthesis in front of the forward and left methods with the name of the variable that  already represents these values.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthree)"]
        ]
    },
    onehundredthree: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Like this: turtle.left(angle). If you named your variables like I did, then exactly like that.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfour)"]
        ]
    },
    onehundredfour: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "This is good, but we can only do this move once, and we need to repeat it three times to make a triangle.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfive)"]
        ]
    },
    onehundredfive: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "We can accomplish this in two different ways. We'll only go over one here, but both will be in the example program on the site.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredsix)"]
        ]
    },
    onehundredsix: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "The goal of programming is to accomplish as much as possible in as few lines as possible.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredseven)"]
        ]
    },
    onehundredseven: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "To do this, you'll often see that a few shortcuts are used to limit the amount of space used. One of these shortucts is to use a 'loop'.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredeight)"]
        ]
    },
    onehundredeight: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "There are two kinds of loops. One is known as a 'for', and the other is a 'while'.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundrednine)"]
        ]
    },
    onehundrednine: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "A for loop is used when we know how many times we want to do something, and a while loop is used when we don't have a set number of times to do something, but want to do something while something is true or false.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredten)"]
        ]
    },
    onehundredten: {
        image: "//img",
        text: "What's a for loop used for?",
        buttons: [
            ["To do something while something is something else", "advanceTo(scenario.onehundredeleven)"],
            ["To do something for a limited number of times", "advanceTo(scenario.onehundredtwelve)"]
        ]
    },
    onehundredeleven: {
        image: "//img",
        text: "That's wrong. Try again.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredeight)"]
        ]
    },
    onehundredtwelve: {
        image: "//img",
        text: "Correct! Way to go!",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirteen)"]
        ]
    },
    onehundredthirteen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Okay. Now let's learn about the syntax of the for loop (since that's the loop that we'll use).",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfourteen)"]
        ]
    },
    onehundredfourteen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Before we begin to dive into some of the functional part of the loop, let's talk about what a 'range' is in mathamatics.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfifteen)"]
        ]
    },
    onehundredfifteen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "A defined range is the numbers between two values (in our case, integers).",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredsixteen)"]
        ]
    },
    onehundredsixteen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "In python, when you don't define a start value, it assumes that you start at 0.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredseventeen)"]
        ]
    },
    onehundredseventeen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "So, if we say 'in range(5)', python starts at 0, and goes to 4 for a total of 5.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredeighteen)"]
        ]
    },
    onehundredeighteen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Python starts counting at zero in the case of loops and lists.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundrednineteen)"]
        ]
    },
    onehundrednineteen: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Another important note about for loops is the amount of whitespace you need to have it work properly.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwenty)"]
        ]
    },
    onehundredtwenty: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Whitespace is just spaces that are filled, but not with a character.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentyone)"]
        ]
    },
    onehundredtwentyone: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Examples of whitespace are spaces, and tabs. The space is occupied, but not by anything that we can see.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentytwo)"]
        ]
    },
    onehundredtwentytwo: {
        image: "//img",
        text: "Which of these is NOT an example of whitespace?",
        buttons: [
            ["A space", "advanceTo(scenario.onehundredtwenty)"],
            ["An 'R'", "advanceTo(scenario.onehundredtwentythree)"],
            ["A tab", "advanceTo(scenario.onehundredtwenty)"]
        ]
    },
    onehundredtwentythree: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Right. Whitespace takes up space... it's just white!",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentyfour)"]
        ]
    },
    onehundredtwentyfour: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Whitespace that occurs before something is known as 'trailing', and whitespace after something is 'leading'.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentyfive)"]
        ]
    },
    onehundredtwentyfive: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "A for loop starts with a line that has no trailing or leading whitespace.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentysix)"]
        ]
    },
    onehundredtwentysix: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Usually, that first line is something like 'for x in range(#):' where '#' is an integer.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentyseven)"]
        ]
    },
    onehundredtwentyseven: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "Whatever name comes after the 'for' keyword in a for loop is the name of the iterating variable.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentyeight)"]
        ]
    },
    onehundredtwentyeight: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "The iterating variable acts like a counter so that we know how far we've progressed in the loop.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredtwentynine)"]
        ]
    },
    onehundredtwentynine: {
        image: "http://i67.tinypic.com/15wfd08.png",
        text: "In our case, we want the for loop to make the sides of the triangles for us, so we need to name the variable something that makes sense to that.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirty)"]
        ]
    },
    onehundredthirty: {
        image: "//img",
        text: "Let's call it something like 'num_sides'.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtyone)"]
        ]
    },
    onehundredthirtyone: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "So, the line that initiates the for loop should look something like this 'for num_sides in range(3):'",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtytwo)"]
        ]
    },
    onehundredthirtytwo: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "When you write the body of the for loop, everything that needs to be repeated must be indented under the for loop.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtythree)"]
        ]
    },
    onehundredthirtythree: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "This indention must be one tab (four spaces). ",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtyfour)"]
        ]
    },
    onehundredthirtyfour: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "What's in the body of the for loop is what gets repeated. Keep in mind that this needs to be indented by four spaces under the line that creates the for loop.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtyfive)"]
        ]
    },
    onehundredthirtyfive: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "In the body, we want the Turtle to move forward by the veraible we declared earlier.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtysix)"]
        ]
    },
    onehundredthirtysix: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "An example of the first line in the body of your for loop would look like this: 'turtle.forward(size)'",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtyseven)"]
        ]
    },
    onehundredthirtyseven: {
        image: "//img",
        text: "Which is the correct indention rule for the body of a for loop?",
        buttons: [
            ["Four spaces", "advanceTo(scenario.onehundredthirtyeight)"],
            ["Two spaces", "advanceTo(scenario.onehundredthirtynine)"]
        ]
    },
    onehundredthirtyeight: {
        image: "//img",
        text: "Correct! Python uses indention styles to determine the ending of lines (kinda like periods in English).",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredforty)"]
        ]
    },
    onehundredthirtynine: {
        image: "//img",
        text: "Try again bud.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredthirtyseven)"]
        ]
    },
    onehundredforty: {
        image: "//img",
        text: "Okay, the second line in the body of our for loop should be a statement that makes the turtle turn left. How do we do that?",
        buttons: [
            ["turtle.left(angle)", "advanceTo(scenario.onehundredfortyone)"],
            ["turtle.up(120)", "advanceTo(scenario.onehundredfortyone)"]
        ]
    },
    onehundredfortyone: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "'turtle.left(angle)' is the correct way to make the second statement in the body. We do it because we want the turtle to move forward, then  turn left. Not the other way around.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfortytwo)"]
        ]
    },
    onehundredfortytwo: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "Now we have a declared for loop with a body that accomplishes what once took us six lines in just three lines.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfortythree)"]
        ]
    },
    onehundredfortythree: {
        image: "http://i66.tinypic.com/11gmzk5.png",
        text: "Okay! We have a turtle with a home that draws a triangle. At this point, you could quit the program, or you could continue on to level two and learn more about some advanced topics in Python.",
        buttons: [
            ["Continue", "advanceTo(scenario.onehundredfortyfour)"],
            ["Quit", "advanceTo(scenario.one)"]
        ]
    },
    onehundredfortyfour: {
        image: "",
        text: "To continue on to level two, click on the 'Coding Across Borders' text in the bottom-right corner and go to the 'Learning Envio' tab to enjoy level two.",
    },
};

//Gets Username from user -- still not implemented due to lack of unnderstanding of HTML
input.onkeypress = function submitUserName(event) {
    if (event.key == "Enter" || event.keyCode == 13) {
        userName = input.value;
        input.parentNode.removeChild(input);
        advanceTo(scenario.two);
    }
};

//Initial advance to start the dictionary
advanceTo(scenario.one);