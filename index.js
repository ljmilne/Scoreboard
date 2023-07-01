let homeText = document.getElementById("home-text")
let guestText = document.getElementById("guest-text")
let leaderMsg = document.getElementById("leader-message")
homeScore = 0
guestScore = 0

function addOneHome(){
    homeScore +=1
    homeText.textContent = homeScore
    highlightLeader()
}

function addTwoHome(){
    homeScore +=2
    homeText.textContent = homeScore
    highlightLeader()
}

function addThreeHome(){
    homeScore +=3
    homeText.textContent = homeScore
    highlightLeader()
}

function addOneGuest(){
    guestScore +=1
    guestText.textContent = guestScore
    highlightLeader()
}

function addTwoGuest(){
    guestScore +=2
    guestText.textContent = guestScore
    highlightLeader()
}

function addThreeGuest(){
    guestScore +=3
    guestText.textContent = guestScore
    highlightLeader()
}

function newGame(){
    homeScore=0
    guestScore=0
    homeText.textContent= homeScore
    guestText.textContent= guestScore
    leaderMsg.textContent = ""
}

function highlightLeader(){
    if (homeScore > guestScore){
        leaderMsg.textContent = "Home team in the lead"
    }
    else if (homeScore < guestScore){
        leaderMsg.textContent = "Guest team in the lead"
    }

}