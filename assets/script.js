// Display Date
    var currentDay = moment().format('dddd, MMMM Do');
    var timeEl = $("#currentDay").text(currentDay)

// Tracking the hour
    var currentTime = moment().format("HH")
    console.log(currentTime)

    for(i=9;i<=17;i++){
        var selectorString = "#" + [i]
        console.log(selectorString)
        var selectedHour = $(selectorString).attr("timeValue")
        console.log(selectedHour)
        if(selectedHour < currentTime){
            $(selectorString).removeClass("future")
            $(selectorString).removeClass("present")
            $(selectorString).addClass("past");
        }
        if(currentTime === selectedHour){
            $(selectorString).removeClass("future")
            $(selectorString).addClass("present");
        }  
    }
    // if("21:00" < currentTime){
    //     $("#15").removeClass("future")
    //     $("#15").removeClass("present")
    //     $("#15").addClass("past");
    //     console.log(false);
    // }
    // if(currentTime >= "22:00" && currentTime < "23:00"){
    //     $("#16").addClass("present");
    // }  
    // if("24:00" < currentTime){
    //     $("17").addClass("future");
    //     console.log(false);
    // }