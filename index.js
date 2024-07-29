const firebaseConfig = {
    apiKey: "AIzaSyA-M4ZP4G_Pld9dQcQ9y--_g70GOmRap7o",
    authDomain: "elena-c1609.firebaseapp.com",
    projectId: "elena-c1609",
    storageBucket: "elena-c1609.appspot.com",
    messagingSenderId: "744799819582",
    appId: "1:744799819582:web:95118e7b4b9cbfd49afe6f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //Initalize variables
  const auth = firebase.auth();
  const database = firebase.database();

  // Set up our register function
function register () {
    // Get all our input fields
    email = document.getElementById('txtParola').value
    password = document.getElementById('txtParola').value
    
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
   
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('txtUtilizator').value
    password = document.getElementById('txtParola').value
  
    // Validate input fields
     if(email == "vinatoruelena20" && password == "ev200#1Al22")
      {
  
        window.location.href = "home.html";
        return
       
      }

    else 
    {
      alert("Utilizator sau parolă incorectă")
    }
  
    
  
      
  
      
     
  
    }
    
  
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    if (email == null) {
        return false
      }
    
      if (email.length <= 0) {
        return false
      } else {
        return true
      }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }