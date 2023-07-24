let jokes = [

    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "How do you organize a fantastic space party? You planet!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a dinosaur that is sleeping? A dino-snore!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why can't you trust an atom? Because they make up everything!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "I'm on a seafood diet. I see food and I eat it!",
    "What do you call fake spaghetti? An impasta!",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why was the math book sad? Because it had too many problems!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call a fish that wears a crown? King mackerel!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I'm on a seafood diet. I see food and I eat it!",
    "What do you call fake spaghetti? An impasta!",
    "Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why can't you trust an atom? Because they make up everything!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "I'm on a seafood diet. I see food and I eat it!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why was the math book sad? Because it had too many problems!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call a fish that wears a crown? King mackerel!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I'm on a seafood diet. I see food and I eat it!",
    "What do you call fake spaghetti? An impasta!",
    "Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why can't you trust an atom? Because they make up everything!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "I'm on a seafood diet. I see food and I eat it!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why was the math book sad? Because it had too many problems!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What do you call a fish that wears a crown? King mackerel!"
];




let result;



const randomNumber = Math.floor(Math.random() * jokes.length - 1);


function click() {

    for (let i = 0; i < jokes.length; i++) {
        if (randomNumber === i) {
            result = jokes[i]
            let show = document.getElementById("para").innerHTML = result
        }


    }
    return show;
}
document.write(click())
