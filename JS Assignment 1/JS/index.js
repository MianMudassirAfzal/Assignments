function ComparisionMinMax(){
    let x=document.getElementById("FirstInput").value;
    let y=document.getElementById("SecondInput").value;
    if (x>y){
        resultComparision.innerHTML= "First Number is <strong> Greater </strong> then Second Number";
    }else{
        
        resultComparision.innerHTML= "First Number is <strong> Smaller </strong> then Second Number";
    }
}