var score=0; // for final score of user
var inp=[];   // stores options inputed by the user
var oup=["option2","option1","option3","option4","option3"]; // store the correct options for given question
var id=0;  // to check for question number

// creating array of question and option class
var questions = [{
    question: "1: Queue data structure works on",
    options: [{text:"LIFO"},
          {text:"FIFO"},
          {text:"FILO"},
          {text:"LOFI"}
    ]

  },
  {
      question: "2: Which of the following is not a stable sorting algorithm?",
      options: [{text:"Selection sort"},
        {text:"Bubble sort"},
        {text:"Insertion sort"},
        {text:"Merge sort"}
      ]

    },
    {
        question: "3: What is the advantage of bubble sort over other sorting techniques?",
        options: [{text:"It is faster"},
          {text:"Consumes less memory"},
          {text:"Detects whether the input is already sorted"},
          {text:"All of the mentioned"}
        ]

      },
      {
          question: "4: Linked lists are not suitable to for the implementation of?",
          options: [{text:"Insertion sort"},
            {text:"Radix sort"},
            {text:"Polynomial manipulation"},
            {text:"Binary search"}
          ]

        },

        {
            question: "5: What is the maximum number of edges in a bipartite graph having 10 vertices?",
            options: [{text:"24"},
              {text:"21"},
              {text:"25"},
              {text:"16"}
            ]

          }
]


function showQuestion(){  // calling for question page
  const question=document.getElementById("question");
  question.innerText=questions[id].question;

  const opt1=document.getElementById("opt1");
  opt1.innerText=questions[id].options[0].text;

  const opt2=document.getElementById("opt2");
  opt2.innerText=questions[id].options[1].text;

  const opt3=document.getElementById("opt3");
  opt3.innerText=questions[id].options[2].text;

  const opt4=document.getElementById("opt4");
  opt4.innerText=questions[id].options[3].text;

  // adding eventlistener to radio  buttons
  document.getElementById("answer1").addEventListener("click",()=>{
    inp[id]="option1";
  })
  document.getElementById("answer2").addEventListener("click",()=>{
    inp[id]="option2";
  })
  document.getElementById("answer3").addEventListener("click",()=>{
    inp[id]="option3";
  })
  document.getElementById("answer4").addEventListener("click",()=>{
    inp[id]="option4";
  })




    var p=document.querySelector(".prev");
    var n=document.querySelector(".next");
    var e=document.querySelector(".evaluate");
    var pb=document.querySelector("#file"); // progress bar
  if(id===0){   // for first page of quiz
    p.classList.add("hide");
    e.classList.add("hide");
    pb.value=20*id;

  }
  else if(id>=1 && id<=3){  // for second to fourth page
    p.classList.remove("hide");
    e.classList.add("hide");
    n.classList.remove("hide");
      pb.value=20*id;

  }
  else{    // for last page
    // p.classList.add("hide");
    n.classList.add("hide");
    e.classList.remove("hide");
    pb.value=20*id;

  }
}


  showQuestion();

// eventlistener on next button
document.querySelector(".next").addEventListener("click",()=>{
  id++;
  showQuestion();
});

// eventlistener on prev button
document.querySelector(".prev").addEventListener("click",()=>{
  id--;
  showQuestion();
});


// eventlistener on evaluate button
document.querySelector(".evaluate").addEventListener("click",()=>{
  giveResult();
});

function giveResult(){
  for(var i=0;i<5;i++){   // checking the answers for all question
    if(inp[i]===oup[i]){
      score++;
    }
  }



var page=document.querySelector(".inner-div");
page.innerHTML= "Your score is "+score +   // print score
"<br>"+
"<a href=index.html> <button class='evaluate'>Retry </button></a>"; // allowing retake of quiz
page.classList.add("finalSubmission");   // adding css styling to final page
}
