//month name
var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
];
//staff information
const staff={
    name: "GM Shimon",
    gender: "Male",
    fatherName: "GM A Rouf",
    motherName: "Shahida Rouf",
    dob:"2003-10-05",
    email: "simon.rosedale99@gmail.com",
    address:"Johor Bahru,Johor,Malaysia",
    role:"staff",
    phone:"+60187817582"
}

//the results of leave application of all users
const results=JSON.parse(window.localStorage.getItem("results"));
console.log(results);

//filling the profile information in my information flied 
function profile(){
    const name=document.getElementById("name");
    const gender=document.getElementById("gender");
    const fatherName=document.getElementById("fatherName");
    const motherName=document.getElementById("motherName");
    const dob=document.getElementById("dob");
    const email=document.getElementById("email");
    const role=document.getElementById("role");
    const address=document.getElementById("address");
    const phone=document.getElementById("phone");

    name.innerText=staff.name;
    gender.innerText=staff.gender;
    fatherName.innerText=staff.fatherName;
    motherName.innerText=staff.motherName;
    dob.innerText=staff.dob;
    email.innerText=staff.email;
    role.innerText=staff.role;
    address.innerText=staff.address;
    phone.innerText=staff.phone;
}
profile();

//getting the current date 
var d =new Date();
let date=d.getDate()+" "+monthNames[d.getMonth()]+" "+d.getFullYear();
let passDate=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
showResult(parseInt(d.getMonth()+1));
document.getElementById("currentDate").innerText=date;

//taking the date input from the user to find the result of that specific date
function searchDate(){
    const inputDate=document.getElementById("date").value;
    const newDate= inputDate.split("-");
    // console.log(newDate);
    if(newDate.length>1){
        //showing the search date 
        document.getElementById("currentDate").innerText="";
        const inputYear=newDate[0];
        const inputMonth=newDate[1];
        const inputDay=newDate[2];
        
        date=(parseInt(inputDay))+" "+monthNames[parseInt(inputMonth)-1]+" "+inputYear;
        document.getElementById("currentDate").innerText=date;

        passDate=inputYear+"-"+(parseInt(inputMonth))+"-"+(parseInt(inputDay)); // assign new date according to the search
        //pass the search date to the showResult function
        showResult(parseInt(inputMonth));
    }
}

//function to show the result of an user 
function showResult(Date) {
    let counter=0;
    const newResult=[];
    document.getElementById("errorMessage").innerText="";
    document.getElementById("resultTable").innerText="";
    results.map(result=>{
        if(result.name=="GM Shimon"){
            const date=parseInt(result.from.split("-")[1]);
            //filtering the results according to the user input date
            console.log(date)
            if(Date==date){
                newResult.push(result);
                counter++;
            }
        }
    })

    if(newResult.length==0){
        document.getElementById("leaveNumber").innerText="";
        document.getElementById("leaveNumber").innerText=2;
        const h3=document.createElement("h3");
        h3.innerText="NO Result Found";
        document.getElementById("errorMessage").appendChild(h3);
    }
    else{

        document.getElementById("leaveNumber").innerText="";
        document.getElementById("leaveNumber").innerText=2-counter;

        //creating tr element for the table 
        const tr1=document.createElement("tr");
        //creating th element of the table
        const th1=document.createElement("th");
        const th2=document.createElement("th");
        const th3=document.createElement("th");

        //assign value to the th
        th1.innerText="Details";
        th2.innerText="Application Date";
        th3.innerText="Status";

        //appending to the tr element
        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);
        document.getElementById("resultTable").appendChild(tr1);

        newResult.map(result => {
            const tr2=document.createElement("tr");

            const td1=document.createElement("td");
            const td2=document.createElement("td");
            const td3=document.createElement("td");

            td1.innerHTML=` <h4 style="margin:0px;padding:0px">Name:${result.name}</h4>
                <p>${result.email}</p>
                <p>Leave from: ${result.from}</p>
            `;
            td2.innerText=result.today;
            td3.innerText=result.status;

            tr2.appendChild(td1);
            tr2.appendChild(td2);
            tr2.appendChild(td3);
            document.getElementById("resultTable").appendChild(tr2);
        })
    }
}

//leave application button function
document.getElementById("leave-application").addEventListener("click", function(){
    location.href="leaveApplication.html";
})

//fill up the edit form
function editForm(){
    const name=document.getElementById("updateName");
    const gender=document.getElementById("updateGender");
    const fatherName=document.getElementById("updateFatherName");
    const motherName=document.getElementById("updateMotherName");
    const dob=document.getElementById("updateDOB");
    const email=document.getElementById("updateEmail");
    const role=document.getElementById("updateRole");
    const address=document.getElementById("updateAddress");
    const phone=document.getElementById("updatePhone");

    name.value=staff.name;
    gender.value=staff.gender;
    fatherName.value=staff.fatherName;
    motherName.value=staff.motherName;
    dob.value=staff.dob;
    email.value=staff.email;
    role.value=staff.role;
    address.value=staff.address
    phone.value=staff.phone;

}
editForm();

//function of edit button 
document.getElementById("edit-profile-container").style.display="none";

function edit(){
    document.getElementById("information-container").style.display="none";
    const main=document.getElementById("main");
    const Display=document.getElementById("edit-profile-container");
    Display.style.display="flex";
    main.style.flexDirection="row-reverse"
    main.appendChild(Display);
}

//submit button of the edit form
function submit(){
    
    const name=document.getElementById("updateName").value;
    const gender=document.getElementById("updateGender").value;
    const fatherName=document.getElementById("updateFatherName").value;
    const motherName=document.getElementById("updateMotherName").value;
    const dob=document.getElementById("updateDOB").value;
    const email=document.getElementById("updateEmail").value;
    const role=document.getElementById("updateRole").value;
    const address=document.getElementById("updateAddress").value;
    const phone=document.getElementById("updatePhone").value;
    
    //update the user data
    staff.name=name;
    staff.gender=gender;
    staff.fatherName=fatherName;
    staff.motherName=motherName;
    staff.dob=dob;
    staff.email=email;
    staff.role=role;
    staff.address=address;
    staff.phone=phone;

    profile();
    console.log(staff);
    
    // again displaying the information of the user
    document.getElementById("edit-profile-container").style.display="none";
    document.getElementById("information-container").style.display="block";
    const main=document.getElementById("main");
    main.style.removeProperty("flex-direction");
    console.log(main);
}




