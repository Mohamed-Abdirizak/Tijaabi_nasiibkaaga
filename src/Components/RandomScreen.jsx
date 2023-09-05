import React,{useState} from "react";
import "./RandomScreen.css"
import winImg from '../images/win.gif'
const RandomScreen = () => {

  const [randomNumber, setRandomNumber] = useState(null); 
  const [num,setNum] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [chance, setChance] = useState(0);
  var [chanceOnScreen, setChanceOnScreen] = useState(3);
  const [image, setImage] = useState(null);
  var newRandomNumber;
  // var winImgVar =
 


  const handleDisable = () => {
    setIsDisabled(true);
  };
  


  const [isDisabled, setIsDisabled] = useState(false);

  // const handleDisable = () => {
  //   setIsDisabled(true);
  // };

  const disableClass = isDisabled ? 'disableClass' : '';

  const sooBilaawFun = () => {
    // setIsDisabled(true);
    window.location.reload();
  };
  

  

  const generateRandomNumber = () => {
    if (randomNumber === null) {
      var k = document.getElementsByClassName("fromInput");
      // k.innerHTML.value = "fldkjflsdf"
      // setFrom(0);
      // setTo(100);
       newRandomNumber = Math.floor(Math.random() * 100)+  1;
      setRandomNumber(newRandomNumber);
      console.log(newRandomNumber)
      // console.log(randomNumber)
    }

    const userInput = document.getElementsByClassName("userInputValue");
    
    const fullUserInput =parseInt( userInput[0].value);


    if (randomNumber === fullUserInput)
    {
      console.log(`you win....${fullUserInput} ${randomNumber}`)
      document.getElementById("wonText").innerHTML = ` <h3>Congratualtions!!! </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> = <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`

      setImage(winImg);

      setIsDisabled(true);
    }
    else
    {

   
////////////////////////////////////////////////////////////  HUBI IN LASOO GALIYE EBER IYO INKALE...............................................................
      if (userInput[0].value === "")
      {
        console.log("empty ")
        alert("please enter a value to play the game...")
      }
      else{
        console.log("good...")

        if (fullUserInput <= 100 && fullUserInput >=0)

        {

          if ((newRandomNumber >= 80 && newRandomNumber <= 89) || (randomNumber >= 80 && randomNumber <= 89))
          {
            var fromVar80 = document.getElementById("fromClass");
             fromVar80.innerHTML = "80";
    
             var toVar90 = document.getElementById("toClass");
            toVar90.innerHTML = "89";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
            // console.log(typeof(chace))
    ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 80 && newRandomNumber <= 84) || (randomNumber >= 80 && randomNumber <= 84))
              {
            
    
    
                var fromVar80 = document.getElementById("fromClass");
             fromVar80.innerHTML = "80";
    
             var toVar85 = document.getElementById("toClass");
            toVar85.innerHTML = "84";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 85 && newRandomNumber <= 89) || (randomNumber >= 85 && randomNumber <= 89))
              {
        
    
                var fromVar85 = document.getElementById("fromClass");
             fromVar80.innerHTML = "85";
    
             var toVar90 = document.getElementById("toClass");
            toVar90.innerHTML = "89";
    
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..");
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
          else if((newRandomNumber >= 90 && newRandomNumber <=100) || (randomNumber >= 90 && randomNumber <= 100) )
          {
            var fromVar70 = document.getElementById("fromClass");
             fromVar70.innerHTML = "90";
    
             var toVar80 = document.getElementById("toClass");
            toVar80.innerHTML = "100";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 90 && newRandomNumber <= 94) || (randomNumber >= 90 && randomNumber <= 94))
              {
             
    
    
                var fromVar70 = document.getElementById("fromClass");
             fromVar70.innerHTML = "90";
    
             var toVar75 = document.getElementById("toClass");
            toVar75.innerHTML = "94";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 95 && newRandomNumber <= 100) || (randomNumber >= 95 && randomNumber <= 100))
              {
                var fromVar75 = document.getElementById("fromClass");
             fromVar75.innerHTML = "95";
    
             var toVar80 = document.getElementById("toClass");
            toVar80.innerHTML = "100";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
          else if((newRandomNumber >= 70 && newRandomNumber <=79) || (randomNumber >= 70 && randomNumber <= 79) )
          {
            var fromVar70 = document.getElementById("fromClass");
             fromVar70.innerHTML = "70";
    
             var toVar80 = document.getElementById("toClass");
            toVar80.innerHTML = "80";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 70 && newRandomNumber <= 74) || (randomNumber >= 70 && randomNumber <= 74))
              {
             
    
    
                var fromVar70 = document.getElementById("fromClass");
             fromVar70.innerHTML = "70";
    
             var toVar75 = document.getElementById("toClass");
            toVar75.innerHTML = "74";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 75 && newRandomNumber <= 79) || (randomNumber >= 75 && randomNumber <= 79))
              {
        
    
    
    
                var fromVar75 = document.getElementById("fromClass");
             fromVar75.innerHTML = "75";
    
             var toVar80 = document.getElementById("toClass");
            toVar80.innerHTML = "79";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
    
          else if((newRandomNumber >= 60 && newRandomNumber <=69) || (randomNumber >= 60 && randomNumber <= 69))
          {
    
           
    
    
            var fromVar60 = document.getElementById("fromClass");
             fromVar60.innerHTML = "60";
    
             var toVar70 = document.getElementById("toClass");
            toVar70.innerHTML = "69";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              
              if ((newRandomNumber >= 65 && newRandomNumber <= 69) || (randomNumber >= 65 && randomNumber <= 69))
              {
    
    
    
    
                var fromVar65 = document.getElementById("fromClass");
             fromVar65.innerHTML = "65";
    
             var toVar70 = document.getElementById("toClass");
            toVar70.innerHTML = "69";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 60 && newRandomNumber <= 64) || (randomNumber >= 65 && randomNumber <= 64))
              {
     
    
    
                var fromVar60 = document.getElementById("fromClass");
             fromVar60.innerHTML = "60";
    
             var toVar65 = document.getElementById("toClass");
            toVar65.innerHTML = "64";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
    
          else if((newRandomNumber >= 50 && newRandomNumber <=59) || (randomNumber >= 50 && randomNumber <= 59))
          {
            var fromVar50 = document.getElementById("fromClass");
             fromVar50.innerHTML = "50";
    
             var toVar60 = document.getElementById("toClass");
            toVar60.innerHTML = "59";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 55 && newRandomNumber <= 59) || (randomNumber >= 55 && randomNumber <= 59))
              {
           
    
                var fromVar55 = document.getElementById("fromClass");
             fromVar55.innerHTML = "55";
    
             var toVar60 = document.getElementById("toClass");
            toVar60.innerHTML = "59";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 50 && newRandomNumber <= 54) || (randomNumber >= 50 && randomNumber <= 54))
              {
     
    
    
                var fromVar50 = document.getElementById("fromClass");
             fromVar50.innerHTML = "50";
    
             var toVar55 = document.getElementById("toClass");
            toVar55.innerHTML = "54";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
    
          else if((newRandomNumber >= 40 && newRandomNumber <=49) || (randomNumber >= 40 && randomNumber <= 49))
          {
            var fromVar40 = document.getElementById("fromClass");
             fromVar40.innerHTML = "40";
    
             var toVar50 = document.getElementById("toClass");
            toVar50.innerHTML = "49";
    
    
            //////////////////////////// HADAANS SAXO THE SECOND TIME..................................................
           
    
    
    
    
    
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
            // console.log(chance);
            // console.log(typeof(chanceOnScreen))
    
            // console.log("chances: ", chanceOnScreen);
    
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 40 && newRandomNumber <= 44) || (randomNumber >= 40 && randomNumber <= 44))
              {
    
                
           
    
    
                var fromVar40= document.getElementById("fromClass");
             fromVar40.innerHTML = "40";
    
             var toVar45 = document.getElementById("toClass");
            toVar45.innerHTML = "44";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
    
    
              }
    
              if ((newRandomNumber >= 45 && newRandomNumber <= 49) || (randomNumber >= 45 && randomNumber <= 49))
              {
    
                setChanceOnScreen(chanceOnScreen-1);
         
    
    
                var fromVar45 = document.getElementById("fromClass");
             fromVar45.innerHTML = "45";
    
             var toVar50 = document.getElementById("toClass");
            toVar50.innerHTML = "49";
    
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
          else if((newRandomNumber >= 30 && newRandomNumber <=39) ||  (randomNumber >= 30 && randomNumber <= 39))
          {
            var fromVar30 = document.getElementById("fromClass");
             fromVar30.innerHTML = "30";
    
             var toVar40 = document.getElementById("toClass");
            toVar40.innerHTML = "39";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 30 && newRandomNumber <= 34) || (randomNumber >= 30 && randomNumber <= 34))
              {
            
    
    
                var fromVar30 = document.getElementById("fromClass");
             fromVar30.innerHTML = "30";
    
             var toVar35 = document.getElementById("toClass");
            toVar35.innerHTML = "34";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 35 && newRandomNumber <= 39) || (randomNumber >= 35 && randomNumber <= 39))
              {
            
    
    
                var fromVar35 = document.getElementById("fromClass");
             fromVar35.innerHTML = "35";
    
             var toVar40 = document.getElementById("toClass");
            toVar40.innerHTML = "39";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
          else if((newRandomNumber >= 20 && newRandomNumber <=29) || (randomNumber >= 20 && randomNumber <= 29))
          {
            var fromVar20 = document.getElementById("fromClass");
             fromVar20.innerHTML = "20";
    
             var toVar30 = document.getElementById("toClass");
            toVar30.innerHTML = "29";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 20 && newRandomNumber <= 24) || (randomNumber >= 20 && randomNumber <= 24))
              {
               
    
    
                var fromVar20= document.getElementById("fromClass");
             fromVar20.innerHTML = "20";
    
             var toVar25 = document.getElementById("toClass");
            toVar25.innerHTML = "24";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
    
            }
              }
    
              if ((newRandomNumber >= 25 && newRandomNumber <= 29) || (randomNumber >= 25 && randomNumber <= 29))
              {
            
    
                var fromVar25 = document.getElementById("fromClass");
             fromVar25.innerHTML = "25";
    
             var toVar30 = document.getElementById("toClass");
            toVar30.innerHTML = "29";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
    
            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
    
          else if((newRandomNumber >= 10 && newRandomNumber <=19) || (randomNumber >= 10 && randomNumber <= 19))
          {
            var fromVar10 = document.getElementById("fromClass");
             fromVar10.innerHTML = "10";
    
             var toVar20 = document.getElementById("toClass");
            toVar20.innerHTML = "19";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
           
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 15 && newRandomNumber <= 19) || (randomNumber >= 15 && randomNumber <= 19))
              {
    
              
    
    
                var fromVar80 = document.getElementById("fromClass");
             fromVar80.innerHTML = "15";
    
             var toVar85 = document.getElementById("toClass");
            toVar85.innerHTML = "19";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 10 && newRandomNumber <= 14) || (randomNumber >= 10 && randomNumber <= 14))
              {
               
    
                var fromVar10 = document.getElementById("fromClass");
             fromVar10.innerHTML = "10";
    
             var toVar15 = document.getElementById("toClass");
            toVar15.innerHTML = "14";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }
                
          else if((newRandomNumber >= 0 && newRandomNumber <=9) || (randomNumber >= 0 && randomNumber <= 9))
          {
            var fromVar0 = document.getElementById("fromClass");
             fromVar0.innerHTML = "0";
    
             var toVar10 = document.getElementById("toClass");
            toVar10.innerHTML = "10";
    
            if (chance == 0)
            {
            setChanceOnScreen(chanceOnScreen-1);
    
            }
    
            setChance(1);
    
            ////////////////////////////////////////////START   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
            if (chance == 1)
            {
              if ((newRandomNumber >= 0 && newRandomNumber <= 4) || (randomNumber >= 0 && randomNumber <= 4))
              {
             
    
    
                var fromVar0 = document.getElementById("fromClass");
             fromVar0.innerHTML = "0";
    
             var toVar5 = document.getElementById("toClass");
            toVar5.innerHTML = "4";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
    
              if ((newRandomNumber >= 5 && newRandomNumber <= 9) || (randomNumber >= 5 && randomNumber <= 9))
              {
             
    
                var fromVar5 = document.getElementById("fromClass");
             fromVar5.innerHTML = "5";
    
             var toVar10 = document.getElementById("toClass");
            toVar10.innerHTML = "9";
    
            setChanceOnScreen(chanceOnScreen-1);
            if (chanceOnScreen === 1)
            {
              console.log("chance on scren equl to 0...now stop the game..")
              document.getElementById("wonText").innerHTML = ` <h3>Sorry, 3xdii jaanis waa isticmaashe </h3> <br/> <h2> your choice: ${fullUserInput} <br/> </h2> <h1> != <br/> </h1>   <h2> computer choice: ${randomNumber} </h2>`
              setIsDisabled(true);

            }
              }
            }
    ////////////////////////////////////////////END   IF CHANCE 1: GUESS BETWEEN 5 NUMBERS.....
    
          }



        }

        else{
          alert("enter only 0 to 100")
        }


       
      }




    }
  }

  return (
    <div className="main-div">
      <div className="title">
        <h2>Qiyaas Numberka uu computerka qabasndoono</h2>
      </div>

      <div className="sharxaad">
        <p>
          Waxaa lagaa rabaa inaad latartanto computerka, adigoo qiyaasi doono{" "}
          <br /> numberka uu qabasdoono computer, waxaana lagu siin doonaa meel{" "}
          <br /> aan kabilaawdo qiyaasta iyo number aad ku <br /> joogiso,
          (intaasi dhexdooda ayaad ka qabsanee numberka)
        </p>
      </div>

      <h1> chances:  {chanceOnScreen}</h1>
      <div className="from-to">
        <h2 className="fromLabel">Kabilaaw</h2>
        {/* <input className="fromInput" value={0}  readOnly/>   */}
        <h2 id="fromClass">0</h2>
        <h2 className="toLabel">Ilaa</h2>
        <h2 id="toClass">100</h2>
        {/* <input className="toForm" value={100}  readOnly/> */}

        
      
      </div>
      <div className="userInput">
      <input className="userInputValue" placeholder="qor nasiibkaaga" type="number"  />
      </div>

      {/* <button className="tijBtn" onClick={generateRandomNumber} > Tijaabi nasiibkeyga</button> */}
      <button className={`${disableClass} ${isDisabled ? '' : 'tijBtn'}`} onClick={generateRandomNumber}  disabled={isDisabled}> Tijaabi nasiibkeyga</button>

      <button className="bilBtn" onClick={sooBilaawFun}> Soo bilaaw gameka</button>
      {/* <button className="fgs" onClick={handleDisable} disabled={isDisabled}> diable it</button> */}


      <br/>

      

      <img src={image} alt=""  />
      <h4 id="wonText"></h4>


    </div>
  );
};

export default RandomScreen;
