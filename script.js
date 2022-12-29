let box=document.querySelector('#box')
let sortbutton1=document.querySelector('#sortbutton')
// let variable=true 
// const function1=()=>{
// variable ? sortbutton1.innerHTML=`sort`:sortbutton1.innerHTML=`unsort`

// variable? box.innerHTML=`<div>`

let displayData=(result)=>{
    box.innerHTML=''
    result.map((item)=>{
        box.innerHTML+=`<div id='box2'>
        <h1>${item.title}</h1>
        <img src=${item.image} />
        <p>${item.description}</p>
        <button>$${item.price}</button>
        </div>`
    })

}
box.style.display='grid'
box.style.gridTemplateColumns='repeat(5,1fr)'

let api='https://fakestoreapi.com/products'
let data=async()=>{
    let response=await fetch(api)
    let result= await response.json()
    displayData(result)
}
data()

let Ascending_sortbutton=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
        let response=await fetch(api)
        let result= await response.json()
        console.log(result)
        result.sort((a,b)=>{
        return a.price-b.price;
        })
        displayData(result)
    }
    data()
}
let Descending_sortbutton=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
        let response=await fetch(api)
        let result= await response.json()
        console.log(result)
        result.sort((a,b)=>{
        return b.price-a.price;
        })
        displayData(result)
    }
    data()
}

let unsort=()=>{
    let api='https://fakestoreapi.com/products'
    let data=async()=>{
    let response=await fetch(api)
    let result= await response.json()
    displayData(result)
}
data()
}


