const applications=[
    {
        id:1,
        name:"GM Shimon",
        email:"simon.rosedale99@gmail.com",
        title:"Staff",
        status:"Pending",
        from:"2022-06-11",
        day:"2",
        leaveType:"Working From Home",
        type:"Half Day",
        today: "2022-06-01"
    },
    {
        id:2,
        name:"Fayruz Tahzeeb",
        email:"tahzeeb@gmail.com",
        title:"Staff",
        status:"Pending",
        from:"2022-06-11",
        day:"1",
        leaveType:"Parental",
        type:"Full Day",
        today: "2022-06-6"
    },
    {
        id:3,
        name:"Toya lazmi Khan",
        email:"lazmin@gmail.com",
        title:"Staff",
        status:"Pending",
        from:"2022-06-11",
        day:"2",
        leaveType:"Annual Leave",
        type:"Half Day",
        today: "2022-06-10"
    },
    {
        id:4,
        name:"Adnan Shafi",
        email:"shafi@gmail.com",
        title:"Staff",
        status:"Pending",
        from:"2022-06-11",
        day:"2",
        leaveType:"Normal Leave",
        type:"Half Day",
        today: "2022-06-10"
    },
  ];
  
  const getData=JSON.parse(window.localStorage.getItem('applications'));
  if(getData){}
  else{
    window.localStorage.setItem("applications",JSON.stringify(applications)); //storing applications in local storage
  }
  
  const getApplications=JSON.parse(window.localStorage.getItem("applications")); //retrieving applications from local storage
  
  const box=document.getElementById("application-box");
  
  let count=0;
  let totalApplicationCount=0;
  
  //mapping the applications array of object
  for(const application of getApplications){
    
    const h=application;

    //getting the current date
    var today = new Date();
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
    //calculating the number of new applications
    if(today==application.today){
      count++;
    }
    totalApplicationCount++; //calculating the total number of applications
  
    //creating a new row for each applicants
    const tr=document.createElement("tr");
    tr.innerHTML=`
            <td class="staff">
              <span class="material-icons">
                perm_identity
              </span>
              <div class="staff-de">
                <h5>${application.name}</h5>
                <p>${application.email}</p>
              </div>
            </td>
            <td>
              <div class="staff-de">
                <h5>${application.leaveType}</h5>
                <p>${application.type}</p>
              </div>
            </td>
            <td class="staff-desig">
              <h5>${application.title}</h5>
            </td>
            <td class="approved"><p>${application.day}</p></td>
            <td ><p>${application.status}</p></td>
            <td class="role"><p>${application.from}</p></td>
            <td class="approve" onclick="approved('${application.id}')"><button class="approve" >Approve</button>  
            </td>
            <td>
            <button class="reject"  onclick="reject('${application.id}')"><i class="fa-solid fa-xmark"></i></button>
            </td>
      `;
      box.appendChild(tr);
      
  };

  function approved(id){
    let results=[];
    let remainingApplications=[];
    const hehe=JSON.parse(window.localStorage.getItem("results"));
    if(hehe){
        results=[...hehe];
    }
    else{
        console.log("nai")
    }
    const newId=parseInt(id)
    getApplications.map(application=>{
        if(newId==application.id){
            application.status="Approved";
            results.push(application);
        }
        if(newId!=application.id){
            remainingApplications.push(application);
        }
    });
    console.log(remainingApplications);

    window.localStorage.setItem("applications",JSON.stringify(remainingApplications)); //storing applications after approval in local storage
    
    window.localStorage.setItem("results",JSON.stringify(results));
    location.reload();
  };

    //reject button
  function reject(id){
    let results=[];
    let remainingApplications=[];
    const hehe=JSON.parse(window.localStorage.getItem("results"));
    if(hehe){
        results=[...hehe];
    }
    else{
        console.log("nai")
    }
    const newId=parseInt(id)
    getApplications.map(application=>{
        if(newId==application.id){
            application.status="Rejected";
            results.push(application);
            console.log("rejected")
        }
        if(newId!=application.id){
            remainingApplications.push(application);
        }
    });
    console.log(remainingApplications);

    window.localStorage.setItem("applications",JSON.stringify(remainingApplications)); //storing applications after approval in local storage
    
    window.localStorage.setItem("results",JSON.stringify(results));
    location.reload();
  }

  //display the number of new application
  const newApplication = document.getElementById('new-application');
  newApplication.innerText="";
  newApplication.innerText=count;
  
  //display the number of total applications
  document.getElementById('total-applications').innerText="";
  document.getElementById('total-applications').innerText=totalApplicationCount;