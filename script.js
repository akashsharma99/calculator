
function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num=="" && num!="0"){
        document.getElementById("output-value").innerText="";
    }
    else{
        if(num[num.length-1]=="."){
            document.getElementById("output-value").innerText=num;
        }
        else
        document.getElementById("output-value").innerText=getFormattedNumber(num);   
    }
}

function getFormattedNumber(num){
    if(num=="-"){
		return "";
    }
    
    //let n=Number(num);
    //let value=n.toLocaleString("en");
    //return String(n);
    return num;
    //alert(value)
    //return value;
}

/*function reverseNumberFormat(num){
    num=num.replace(/,/g,'');
   
    return Number(num);
}*/

let operator=document.getElementsByClassName("operator");
for(let i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="backspace"){
           //output=String(reverseNumberFormat(getOutput()));
           let output=getOutput(); 
           if(output){
                let newOutput=output.slice(0,output.length-1);
                printOutput(newOutput);
            }
        }
        else if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else{
            let output=getOutput();
            let history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=""||history!=""){
                //output=(output=="")?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    let result=eval(history);
                    //console.log(typeof(result));
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printOutput("");
                    printHistory(history);

                }
            
            }
        }
    });
}

let nums=document.getElementsByClassName("number");
for(let i=0;i<nums.length;i++){
    nums[i].addEventListener('click',function(){
        let opt=getOutput();
        if(opt.length<15){
            
            if(opt[opt.length-1]=="." && this.value!="."){
                document.getElementById("output-value").innerText=opt+this.value;
            }
            else{
                //output=reverseNumberFormat(getOutput());
            // alert(output);
                let output=getOutput();
                if(output!=NaN ){
                    output=output+this.value; 
                    //alert(output);
                    printOutput(output);
                }
            }
        }
    });
}