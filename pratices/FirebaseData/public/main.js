

   const firebaseConfig = {
    apiKey: "AIzaSyD8AT5JhWa_R4C0GDCldgh1oblBeQcK8l0",
    authDomain: "database-8d754.firebaseapp.com",
    projectId: "database-8d754",
    storageBucket: "database-8d754.appspot.com",
    messagingSenderId: "571816246989",
    appId: "1:571816246989:web:20186127c150be7ef17384"
  };


  firebase.initializeApp(firebaseConfig)
  
    var usersRef = firebase.database().ref("users");
  



    console.log("hello")
        document.getElementById("form").addEventListener("submit", submitForm);
    
        function submitForm(e) {
            e.preventDefault()
    
    
            var firstname = getInput('firstname');
            var lastname = getInput('lastname');
    
            saveUsers(firstname,lastname);
    
            
    
            console.log(firstname);
            console.log(lastname);
          
        }
    
        function getInput(id){
            return document.getElementById(id).value;
        }
    
        function saveUsers(firstname,lastname){
            var newUserRef = usersRef.push();
            newUserRef.set({
                firstname: firstname,
                lastname: lastname
            })
        }
       
