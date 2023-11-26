
let jokes = [` What do you call a dinosaur with a wide vocabulary?
A thesaurus`, ` What do you call a fake noodle?
An impasta`, `Why did the teddy bear so no to dessert?
Because she was stuffed`, `How do you stop an astronaut’s baby from crying?
You rocket`, `How do you get a tissue to dance?
You put a little boogie into it`, `How does the ocean say hello?
It waves`, `What is a snake’s favorite subject?
Hiss-tory`, `What are the strongest days of the week?
Saturday and Sunday. The rest are weak days.`, `Why can’t you give Elsa a balloon?
She will let it go`, `How do you make the number 7 even?
Remove the S`, `What do you give a sick lemon?
Lemon aid`, `What is in Squidward’s underpants?
Squidmarks`, `If you are English in the kitchen and English in the living room, what are you in the bathroom?
European`, `If a butcher wears an XL shirt and size 13 shoes, what does he weigh?
Meat`, `What falls in winter, but never gets hurt?
Snow`, `What can you catch, but never throw?
A cold`, `I wrote a song about a tortilla. Well actually, it is more of a wrap.`, `I was going to tell a pizza joke, but it was too cheesy.`, `Why was 6 afraid of 7?
Because 7, 8, 9`, `Knock Knock / Who’s there? / Boo / Boo, who? / Don’t cry it’s just me`];

    // console.log(jokes.length);

    
    

    // document.getElementById("jokehere").innerHTML = jokes[random];

    function refresh(){
      let random = Math.floor(Math.random() * jokes.length);
      console.log(random);
      document.getElementById("jokehere").innerHTML = jokes[random];
    }

    // let a = document.getElementsByTagName("div")[0];
    // let newdiv = document.createElement("div");
    // newdiv.innerHTML = "<h1> pratheek</h1>"
    // a.appendChild(newdiv);

    for(let i =0; i<5 ; i++){
      let a = document.getElementsByTagName("div")[0];
    let newdiv = document.createElement("div");
    newdiv.innerHTML = "pratheek"
    a.appendChild(newdiv);

    }
