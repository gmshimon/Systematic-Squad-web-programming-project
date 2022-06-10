let id;
        var today = new Date()
        var dd = parseInt(today.getDate())
        var mm = parseInt(today.getMonth()) + 1
        var yyyy = parseInt(today.getFullYear());

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("date").setAttribute("min",today);

        let applications=[];
        const hehe=JSON.parse(window.localStorage.getItem("applications"));
        if(hehe){
            applications=[...hehe];
            console.log(applications);
        }
        else{
            console.log("nai")
        }
        id=applications.length;
        
        document.getElementById("apply").addEventListener("click",function(){
            id++
            const name=document.getElementById("name").value;
            const email=document.getElementById("email").value;
            const leaveType=document.getElementById("leaveType").value;
            const date=document.getElementById("date").value;
            const dayNumber=parseInt(document.getElementById("dayNumber").value);
            const dayType=document.getElementById("dayType").value;
            const reason=document.getElementById("reason").value;

            if(dayNumber==0||isNaN(dayNumber)){
                alert("Please Select number of days");
            }
            else{
                console.log(dayNumber);
                //create new object 
                const newApplication={id:id,name:name,email:email,leaveType: leaveType,type:dayType, from: date, day: dayNumber,reason: reason,status:"Pending",today:today}
                //push the new object to the applications array
                applications.push(newApplication);
                //storing the array in the localStorage
                // const getData2=JSON.parse(window.localStorage.getItem('applications'));
                // if(getData2){}
                // else{
                    window.localStorage.setItem("applications",JSON.stringify(applications)); //storing applications in local storage
                // }
                clearForm();
            }
            // console.log(applications);
        })
        function clearForm(){
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("leaveType").value="";
            document.getElementById("dayNumber").value="";
            document.getElementById("reason").value="";
            document.getElementById("date").value="";
        }
        document.getElementById("profile").addEventListener("click", function(){
            location.href = "homePageStaff.html";
        })