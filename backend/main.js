var app = new Vue({
    el: '#app',
    data: {
        arrayDatos: ["1990", "1985", "1930", "2001", "2005"],
        difficulty: [
            {id: 1, name: "easy", Attempts: 10},
            {id: 2, name: "normal", Attempts: 7},
            {id: 3, name: "hard", Attempts: 4},
        ],
        players: [],
        player: 0,
        difficult: "",
        watch: 0,
        watchG: 0,
        easy: false,
        normal: false,
        hard: false,
        Attempts: "",
        number: "",
        random: "",
        alert: "",
        numberClue: ""
    },
    methods: {
        changeEasy(){
            this.easy = true
        },
        changeNormal(){
            this.normal = true
        },
        changeHard(){
            this.hard = true
        },
        startGame: function () {
            if(this.easy == false && this.normal == false && this.hard == false){
                console.log("Elija una dificultad")
                this.random = ""
            } else{
                let dataYear = this.arrayDatos;
                let numberRandom = Math.floor(Math.random() * dataYear.length);
                let yearRandom = dataYear[numberRandom];
                this.random = yearRandom;
                console.log(this.random); 
            }
            this.difficulty.forEach((element) =>{
                if(this.easy == true && element.id == 1){
                    console.log("Ingresó por fácil")
                    this.Attempts = element.Attempts
                    this.watch = 1
                    return;
                } if (this.normal == true && element.id == 2){
                    console.log("Ingresó por normal")
                    this.Attempts = element.Attempts
                    this.watch = 1
                    return;
                } if (this.hard == true && element.id == 3){
                    console.log("Ingresó por difícil")
                    this.Attempts = element.Attempts
                    this.watch = 1
                    return;
                }
            });
               
        },
        play: function () {
            if(this.number == ""){
                console.log("Ingrese año para adivinar")

            } if(this.number != this.random){
                this.Attempts--;
                console.log(`Te quedan ${this.Attempts} intentos`)

            } if(this.Attempts == 0){
                console.log("Perdiste")
                this.watchG = 1
                this.players.push({
                    player: this.player++,
                    difficult: this.difficulty,
                    Attempts: this.Attempts,
                })
                // console.log(this.player)
                // console.log(this.difficult)   
                // console.log(this.Attempts)             
            }

            if (this.number == this.random) {
                console.log("Ganaste")
                this.watchG = 1
                this.players.push({
                    player: this.player,
                    difficult: this.difficulty,
                    Attempts: this.Attempts
                })
                // console.log(this.player)
                // console.log(this.difficult)   
                // console.log(this.Attempts)
            }

        },
        clue: function () {
            this.numberClue++;
            if(this.random > this.number){
                console.log("El número puede estar un poco mayor")
            } else{
                console.log("El número puede estar un poco menor") 
            }

            if(this.numberClue == 3){
                console.log("Has perdido un intento")
                this.Attempts --
                this.numberClue=0
                console.log(`Te quedan ${this.Attempts} intentos`)
            }
        },
        endGame: function () {
           this.watch = 0
           this.easy = false 
           this.normal = false
           this.hard = false
        },
        position: function () {
           this.watch = 2 
        }

    },
    computed: {

    }
})