// grab the count-el element, store it in a countEl variablecountE
 let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText=count
    console.log(count)
    // set countEl's innerText to the count
}


