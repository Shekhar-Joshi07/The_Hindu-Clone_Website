class user{
    constructor(){

    }


    #checkUsername(userName){
        let value = userName.includes("#") ? false : true;
        return value;
    }

    #checkPassword(password){
        let value = password.length>8 ? true : false;
        return value;
    }

    async Signup(n,e,u,p,m){

        let isvalidated = this.#checkUsername(u) && this.#checkPassword(p);

        if (isvalidated){
            this.name=n;
            this.email=e;
            this.username=u;
            this.password=p;
            this.mobile=m;

            const actual_data = JSON.stringify(this);
            console.log(actual_data);
            localStorage.setItem(JSON.stringify(actual_data));
        } else{
            alert("Please Enter Valid Credentials")
        }

    }

    #checkCredentials(username,password){
        let value = password==this.password && username==this.userName ? true : false;
        
        return value;
    }

    async Login(u,p){
        let isvalidated = this.#checkUsername(u) && this.#checkPassword(p) && this.#checkCredentials(u,p);

        if (isvalidated){
            this.password=p;
            this.username=u;

            const actual_data = JSON.stringify(this);
            console.log(actual_data);

            try {
                let res= await fetch (`https://masai-api-mocker.herokuapp.com/auth/login`,{
                    method: "POST",
                    body: actual_data,
                    headers: {
                        "Content-Type":"application/json",
                    }, 
                });
                let data = await res.json();
                console.log(data);
                alert("Successfully Logeed in");
                window.location.href="index.html"
            } catch (error) {
                console.log("error");
            }
        }

    }
    }


let u1=new user ();

function Register(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    const mobile=document.getElementById("mobile").value;

    u1.Signup(name,email,username,password,mobile);
}

function Login(){
    const username=document.getElementById("login-username").value;
    const password=document.getElementById("login-password").value;
    u1.Login(password,username);
}
