const inquirer=require('inquirer');
inquirer.prompt([
    {
        type:'input',
        name:'num1',
        message: 'Enter num1' 
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter num2'
    },
    {
        type:'list',
        name:'operation',
        message:'Enter opr',
        choices:['Add',
                 'Sub',
                 'Mul',
                 'Div']
    }
      
])

.then(answers=>{
    var num1=Number(answers.num1);
    var num2=Number(answers.num2);
    var opr=answers.operation;

    var ans=0
   if(opr=='Add'){
         ans=num1+num2;
         console.log(ans);
   }
   else if(opr=='Sub'){
    ans=num1-num2;
    console.log(ans);
   }
   else if(opr=='Mul'){
    ans=num1*num2;
    console.log(ans);
    }
    else if(opr=='Div'){
    ans=num1/num2;
    console.log(ans);
    }
    else {
    console.log("Error")
    process.exit(9)
    }
    

});
