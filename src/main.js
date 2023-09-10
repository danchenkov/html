const bcrypt = require('./bcrypt')

function setCheckedValueOfRadioButtonGroup(name, value) {
    var radios = document.getElementsByName(name)
    for (var j = 0; j < radios.length; j++) {
        if (radios[j].value == value) {
            radios[j].checked = true
            break
        }
    }
}

function setCheckedValueOfCheckbox(name, value) {
    var checkbox = document.getElementsByName(name)
    for (var j = 0; j < checkbox.length; j++) {
        if (checkbox[j].value == value) {
            checkbox[j].checked = true
        }
    }
}

function setValueOfFormField(name, value) {
    var fields = document.getElementsByName(name)
    for (var j = 0; j < fields.length; j++) {
        fields[j].value = value
    }
}

function setValueOfFormTextArea(name, value) {
    var fields = document.getElementsByName(name)
    for (var j = 0; j < fields.length; j++) {
        fields[j].value = value
    }
}

function setFlashMessage(id, value, color) {
    var flashMessage = document.getElementById(id)
    if (value == null) {
        flashMessage.style.display = "none"
    }
    if (color == "error") {
        flashMessage.classList.add(color)
    }
    flashMessage.innerText = value
}

function validTermsAttest() {
    return document.getElementById("terms").checked
}

$(document).ready(function () {
    if (Modernizr) {
        console.log("Modernizr is active")
    }

    var toggleButton = $('<input/>').attr({ type: 'button', id: 'toggleme', name: 'toggleme', class: 'btn btn-primary', value: 'Toggle!' })

    $("#main>section.with-toggle-button").append(toggleButton)

    toggleButton.on("click", function () {
        $("#main>section.toggleable").toggle()
    })

    // console.log("Hello from JavaScript!");
    // moment.locale($("#start-of-the-day")[0].lang);
    moment.locale(document.documentElement.lang)
    $(".start-of-the-day").text(moment().startOf('day').fromNow())

    if (window.location.pathname == "/sample-form.html") {
        var urlParams = new URLSearchParams(window.location.search)
        setCheckedValueOfRadioButtonGroup('title', urlParams.get('title'))
        setValueOfFormField('first_name', urlParams.get('first_name'))
        setValueOfFormField('last_name', urlParams.get('last_name'))
        setValueOfFormField('birthdate', urlParams.get('birthdate'))
        setValueOfFormField('email', urlParams.get('email'))
        setValueOfFormField('phone', urlParams.get('phone'))
        setValueOfFormField('country', urlParams.get('country'))
        setValueOfFormTextArea('bio', urlParams.get('bio'))
        setCheckedValueOfCheckbox('terms', urlParams.get('terms'))
        setFlashMessage('flash-message', urlParams.get('flash'))

        // document.querySelector("#sample-form").addEventListener("submit", function(e){
        document.getElementById("sample-form").addEventListener("submit", function (e) {
            if (!validTermsAttest()) {
                // setFlashMessage('flash-message', "Please attest to the Terms of Use", "error")
                // document.getElementById("form").scrollIntoView();
                alert("Please indicate that you accept the Terms and Conditions")
                e.preventDefault()
                return false
            }
            setValueOfFormField("hash", bcrypt.hash(document.getElementById("password")))
        })

        document.getElementById("reset").addEventListener("click", function (e) {
            window.history.replaceState(null, null, window.location.pathname + window.location.hash)
        })


        $(function () {
            $('textarea[max-rows]').each(function () {
                var textarea = $(this)

                var minRows = Number(textarea.attr('rows'))
                var maxRows = Number(textarea.attr('max-rows'))

                // clone the textarea and hide it offscreen
                // TODO: copy all the styles
                var textareaClone = $('<textarea/>', {
                    rows: minRows,
                    maxRows: maxRows,
                    class: textarea.attr('class')
                }).css({
                    position: 'absolute',
                    left: -$(document).width() * 2
                }).insertAfter(textarea)

                var textareaCloneNode = textareaClone.get(0)

                textarea.on('input', function () {
                    // copy the input from the real textarea
                    textareaClone.val(textarea.val())

                    // set as small as possible to get the real scroll height
                    textareaClone.attr('rows', 1)

                    // save the real scroll height
                    var scrollHeight = textareaCloneNode.scrollHeight

                    // increase the number of rows until the content fits
                    for (var rows = minRows; rows < maxRows; rows++) {
                        textareaClone.attr('rows', rows)

                        if (textareaClone.height() > scrollHeight) {
                            break
                        }
                    }

                    // copy the rows value back to the real textarea
                    textarea.attr('rows', textareaClone.attr('rows'))
                }).trigger('input')
            })
        })
    }
})
