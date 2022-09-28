// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import navbar from  "./components/navbar.js";

// console.log("navbar:",navbar)
// let nav_div=document.getElementById("navbar")
// nav_div.innerHTML=navbar();
// import navbar from  "./components/navbar.js";

// console.log("navbar:",navbar)

// let navbar_div=document.getElementById("navbar");

// navbar_div.innerHTML=navbar()
// 1 img-https://lh3.googleusercontent.com/DdAUOd5Ujlp7HViFiVGJWhOxYpoO9xUn9rW0BukgiE0MqDgH3S9PsBOkAdzyiOMKUmFX50SJbSDGjUDhurkx5pNr2ChGDcPiBd1qtbcO4pHG3bHFbtnDxVQPJ6guu4qQyg1Hk92w1Q=w2400
// 2 img-https://lh3.googleusercontent.com/oEk3g5fAnv_7cVraG5OOm9INzas0mhjmznBJeqreW7X5t8bCr7zeKkI6KIeEK2ylaX6JFdzk6b7h44GLk6C37mpMApE6QZBpzcP4cyLjM0q31SC6Mj3a5aTUaNrh4KbGeXvt9PlmqA=w2400
// 3 img-https://lh3.googleusercontent.com/HqZni-gqHxeUnVc-VSvd2MKqjPMqwy1aS2i0rxHSloxoejizTkBPq7Vk46DZK9icFVa4_aK1j8q1qtGD0EbmwrXouYn5RTLgH_57ynjWTgBCvuh_O1i_nAO1pvo1knKkzBO39HoCnw=w2400


let india=  document.getElementById("in")
india.addEventListener("click",function(){
    news();
    console.log("hii")
})

const container=document.getElementById("results");
let h3trend=document.getElementById("h3trend")
 const news =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)

   const data= await res.json();

   const actual_data=data.articles;
   h3trend.innerText="Trending In:- India"
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
news()
// =====================================================
let us=  document.getElementById("us")
us.addEventListener("click",function(){
    h3trend.innerText="Trending In:- US"
    news2();
    console.log("hii")
})

 const news2 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
// ========================================================
let china=  document.getElementById("ch")
china.addEventListener("click",function(){
    h3trend.innerText="Trending In:- China"
    news3();
    console.log("hii")
})
const news3 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};

// ================================================================
let uk=  document.getElementById("uk")
uk.addEventListener("click",function(){
    h3trend.innerText="Trending In:- UK"
    news4();
    console.log("hii")
})
const news4 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=uk`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};
// ============================================================
let new_zealand=  document.getElementById("nz")
new_zealand.addEventListener("click",function(){
    h3trend.innerText="Trending In:- New-Zealand"
    news5();
    console.log("hii")
})

const news5 =async () =>{
    try{
   const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`)

   const data= await res.json();

   const actual_data=data.articles;
         append(actual_data);
   console.log("data:",actual_data);

    }catch(err){
        console.log("err:",err)
    }

};



const append=(data) =>{
    container.innerHTML=null;

   
   
    data.forEach((el)=>{  

        const div=document.createElement("div");
        div.class="news"

        const img=document.createElement("img");
        img.src=el.urlToImage;

        const title=document.createElement("h3");
        title.innerText=el.title

        // const description=document.createElement("p")
        // description.innerText=el.description;


        div.append(img,title)
        container.append(div);



        // console.log(title,description);
    });


}


//  let search=document.getElementById("search_input")


//  search.addEventListener("change",function(){
//     // console.log("search:",search.value)
//     let arr=[];
//     arr.push(search.value)
//     localStorage.setItem("searchdata",JSON.stringify(arr))

//   window.location.href="search.html"
// })

// ======================================================================================
const slideShow=()=>{
    const arr=[
       " https://lh3.googleusercontent.com/DdAUOd5Ujlp7HViFiVGJWhOxYpoO9xUn9rW0BukgiE0MqDgH3S9PsBOkAdzyiOMKUmFX50SJbSDGjUDhurkx5pNr2ChGDcPiBd1qtbcO4pHG3bHFbtnDxVQPJ6guu4qQyg1Hk92w1Q=w2400",
        "https://lh3.googleusercontent.com/oEk3g5fAnv_7cVraG5OOm9INzas0mhjmznBJeqreW7X5t8bCr7zeKkI6KIeEK2ylaX6JFdzk6b7h44GLk6C37mpMApE6QZBpzcP4cyLjM0q31SC6Mj3a5aTUaNrh4KbGeXvt9PlmqA=w2400",
        "https://lh3.googleusercontent.com/HqZni-gqHxeUnVc-VSvd2MKqjPMqwy1aS2i0rxHSloxoejizTkBPq7Vk46DZK9icFVa4_aK1j8q1qtGD0EbmwrXouYn5RTLgH_57ynjWTgBCvuh_O1i_nAO1pvo1knKkzBO39HoCnw=w2400",
        
    ];
    let i=0;
    let div=document.getElementById("slider");
    let img=document.createElement("img");
    img.src=arr[0];
    div.append(img);
    i=i+1;

    setInterval(()=>{
        if(i==3){
            i=0;
        }
        img.src=arr[i];
        i=i+1;
        div.append(img);

    },3000)

}
slideShow();