import jQuery from "jquery"
window.$ = window.jQuery = jQuery

$(document).ready(function() {
    var toggleButton = $('<input/>').attr({ type: 'button', id: 'toggleme', name: 'toggleme', class: 'btn btn-primary', value: 'Toggle!' })

    $("#main>section.with-toggle-button").append(toggleButton)

    toggleButton.on("click", function() {
        $("#main>section.toggleable").toggle()
    })

    moment.locale($("#start-of-the-day")[0].lang)
    moment.locale(document.documentElement.lang)
    $(".start-of-the-day").text(moment().startOf('day').fromNow())

})
