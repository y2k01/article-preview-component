let shareElem = document.getElementById('share-icon')
let body = document.getElementById('body')
let isDivActive = false
let shareDiv = `
<div id="share-element" class="share">
    <div class="share-rectangle">
        <p id="share-text">S H A R E</p>
        <a href="https://facebook.com/"><img src="images/icon-facebook.svg" alt=""></a>
        <a href="https://twitter.com/"><img src="images/icon-twitter.svg" alt=""></a>
        <a href="https://www.pinterest.com/"><img src="images/icon-pinterest.svg" alt=""></a>
    </div>
    <div class="share-triangle"></div>
</div>`

function callShareWindow() {
    if (isDivActive === false) {
        document.getElementById('share-icon').insertAdjacentHTML('afterend', shareDiv)
        isDivActive = true
    } else {
        document.getElementById('share-element').remove()
        isDivActive = false
    }

}

shareElem.addEventListener('click', callShareWindow)
body.addEventListener('click', closeShareWindow())
