let result = document.getElementById("result");
        let weight = document.getElementById("weight");
        let feet = document.getElementById("heightinfeet");
        let inch = document.getElementById("heightininch");

        

        function calcmyBMI(){
            if(weight.value == "" || inch.value ==""||  feet.value==""){
                alert("Please fill up your weights and heights first Sir!!!");
            }else{
                calc = 703 * Number(weight.value) / Math.pow(Number(inch.value) + Number(feet.value) * 12, 2)
                result.innerText = (calc).toFixed(1);
                weight.value = "";
                feet.value = "";
                inch.value = "";
            }
        }
        function clearresult() {
                result.innerHTML = "";
        }
        