//Section 5
let radio = Array.from(document.querySelectorAll("#radio"))
let emailPhone = document.querySelectorAll(".email")
let inputEmail = document.getElementById("input_email")
radio.forEach((op)=>{
    op.addEventListener("click", ()=>{
        if(radio[0] === op)
        inputEmail.setAttribute("placeholder","Email")
        else
        inputEmail.setAttribute("placeholder","Phone")
    })
})
//Section 4
let places = ["Delhi University-GTB Nagar", "Indirapuram", "Vasant Kunj", "Greater Kailash 1 (GK1)", "Chanakyapuri", "Rohini" ,"Janpath" ,"Hauz Khas Village" , "Sector 38,Noida", "Janakpuri", "Sector 50" , "MG Road"]
 let number = ["139 Places", "694 places", "283 places", "90 places", "99 places", "996 places", "43 places","47 places", "79 places", "375 places", "201 places", "167 places"]
let popa = document.getElementById("Popular")
let seeMore = document.getElementById("see_more")
const rem =  document.querySelector(".Places1")
function more()
{
    if(seeMore.textContent === "see more")
   {
   rem.remove();
   for(let i=0;i<12;i++){
    let a = document.createElement("i")
    a.classList.add("fa-solid", "fa-angle-right")
    let b = document.createElement("div")
    b.classList.add("numberofplaces")
    b.appendChild(a)
    console.log(b)
    let c = document.createElement("div")
    c.classList.add("l1")
    c.textContent = places[i]
    let d = document.createElement("div")
    d.classList.add("l2")
    d.textContent = number[i]
    let h = document.createElement("a")
    let e = document.createElement("div")
    e.classList.add("l12")
    let f = document.createElement("div")
    f.classList.add("Places", "RemovePlaces")
    let g = document.createElement("a")
    g.setAttribute("href","/")
     g.append(b)
     h.append(c,d)
     e.append(h)
    f.append(e,g)
    popa.appendChild(f)
    }
    popa.append(rem)
    seeMore.textContent = "see less"
    let icon = document.querySelector(".fa-angle-down")
    icon.classList.add("fa-angle-up")
    console.log(icon) 
    icon.classList.remove("fa-angle-down")
    console.log(icon)
}
else{
    let removePlaces= document.querySelectorAll(".RemovePlaces")
    Array.from(removePlaces).forEach((element)=>{
        element.remove();
        //array with loop not working
    })
    seeMore.textContent = "see more"
    let icon = document.querySelector(".fa-angle-up")
    icon.classList.add("fa-angle-down") 
    icon.classList.remove("fa-angle-up")
}
}
// see more vala remove hogaya
// console.log(popa)
// { <div class = "Popular">
// <div class="Places">
//<div class="l12">
// <a href=""> 
// <div class="l1">Connaught Place</div>
// <div class="l2">240 Places</div>
// </a>
// </div>
// <a>
// <div class="numberofplaces"><i class="fa-solid fa-angle-right"></i></div>
// </a>
// </div> }

//Section 6
let opton = document.querySelectorAll(".opton")
let opt = Array.from(opton)
console.log(opt)
let w = true
let cuisines = ["Beverages food near me", "Biryani food near me", "Burger food near me", "Chinese food near me", "Continental food near me", "Desserts food near me", "Italian food near me", "Kebab food near me", "Mithai food near me", "Momos food near me", "Mughlai food near me", "North Indian food near me", "Pasta food near me", "Pizza food near me", "Rolls food near me", "Sandwich food near me", "Shake food near me" ,"South Indian food near me", "Street food near me"]
opt[0].addEventListener("click",()=>{
    if(w)
    {let div = document.createElement("div")
    div.classList.add("cuisines")
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = "Bakery food near me"
    opt[0].append(div)// "" initially khali hai
        div.appendChild(a)
cuisines.forEach((Cuisines)=>{
    let span = document.createElement("span")
    span.classList.add("dot")
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = Cuisines
    div.append(span,a)// baad me bhara hua hai
    w= false
})
    }
    else
    {
        document.querySelector(".cuisines").remove();
    w= true;
    }
})
let restaurantsTypes= [ "Bars near me", "Beverage Shops near me", "Bhojanalya near me", "Cafés near me","Casual Dining near me","Clubs near me","Cocktail Bars near me", "Confectioneries near me", "Dessert Parlors near me", "Dhabas near me","Fine Dining near me","Food Courts near me","Food Trucks near me","Irani Cafes near me","Kiosks near me","Lounges near me","Meat Shops near me","Microbreweries near me","Paan Shop near me","Pubs near me","Quick Bites near me","Sweet Shops near me"]
let x = true
opt[1].addEventListener("click",()=>{
    if(x)
    {
    let div = document.createElement("div")
    div.classList.add("restaurantTypes")
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = "Bakeries near me"
    opt[1].append(div)
    div.append(a)
restaurantsTypes.forEach((type)=>{
    let span = document.createElement("span")
    span.classList.add("dot")
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = type
    div.append( span,a)
    x = false
})
    }
    else{
        document.querySelector(".restaurantTypes").remove();
        x=true
    }
})
let restaurantsChains = [ "Biryani Blues", "BTW","Burger King","Burger Singh","Domino's","Dunkin' Donuts","Haldiram's","KFC","Krispy Kreme","McDonald's","Moti Mahal Delux","Om Sweets & Snacks","Paradise Biryani","Pizza Hut"]
let y = true
opt[2].addEventListener("click",()=>{
    if(y)
    {
    let div = document.createElement("div")
    div.classList.add("restaurantChains")
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = "Bikanervala"
    opt[2].append(div)
    div.append(a)
restaurantsChains.forEach((chain)=>{
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = chain
    div.append(a)
    y = false
})
    }
    else{
        document.querySelector(".restaurantChains").remove();
        y = true
    }
})
let cities = ["Kolkata","Mumbai","Bengaluru","Pune","Hyderabad","Chennai","Lucknow","Kochi","Jaipur","Ahmedabad","Chandigarh","Goa","Indore","Gangtok","Nashik","Ooty","Shimla","Ludhiana","Guwahati"]
let z = true
opt[3].addEventListener("click",()=>{
    if(z)
    {
    let div = document.createElement("div")
    div.classList.add("cities")
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = "Delhi NCR"
    opt[3].append(div)
    div.append(a)
cities.forEach((city)=>{
    let a = document.createElement("a")
    a.setAttribute("href", "")
    a.textContent = city
    div.append(a)
    z = false
})
    }
    else{
        document.querySelector(".cities").remove();
        z = true
    }
})
