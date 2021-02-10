// import jQuery from "jquery"
// window.$ = window.jQuery = jQuery

import { parsePhoneNumber, AsYouType } from 'libphonenumber-js'
import SHA256 from 'crypto-js/sha256'
import PBKDF2 from 'crypto-js/pbkdf2'

const generateRandomString = (length=11) => Math.random().toString(36).substr(2, length)

const hashSalt = (password) => {
    let salt = SHA256(+new Date + generateRandomString()).toString()
    let hash = PBKDF2(password, salt, { keySize: 256 / 32 }).toString()
    return [hash, salt]
}

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

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname == "/sample-form.html") {
        var urlParams = new URLSearchParams(window.location.search)
        setCheckedValueOfRadioButtonGroup('title', urlParams.get('title'))
        setValueOfFormField('first_name', urlParams.get('first_name'))
        setValueOfFormField('last_name', urlParams.get('last_name'))
        setValueOfFormField('salt', urlParams.get('salt'))
        setValueOfFormField('birthdate', urlParams.get('birthdate'))
        setValueOfFormField('email', urlParams.get('email'))
        setValueOfFormField('phone', urlParams.get('phone'))
        setValueOfFormField('country', urlParams.get('country'))
        setValueOfFormTextArea('bio', urlParams.get('bio'))
        setCheckedValueOfCheckbox('terms', urlParams.get('terms'))
        setFlashMessage('flash-message', urlParams.get('flash'))

        let
            countryElement = document.querySelector('select[name=country]'),
            phoneElement = document.querySelector('input[type=tel]'),
            passwordElement = document.getElementById("password"),
            saltElement = document.getElementById("salt"),
            country = countryElement.value,
            phone = country ? parsePhoneNumber(phoneElement.value, country) : parsePhoneNumber(phoneElement.value)

        // document.querySelector("#sample-form").addEventListener("submit", function(e){
        document.getElementById("sample-form").addEventListener("submit", function(e) {
            if (!validTermsAttest()) {
                // setFlashMessage('flash-message', "Please attest to the Terms of Use", "error")
                // document.getElementById("form").scrollIntoView();
                alert("Please indicate that you accept the Terms and Conditions")
                e.preventDefault()
                return false
            }
            phoneElement.value = phone.formatInternational()
            let [hash, salt] = hashSalt(passwordElement.value)
            passwordElement.value = hash
            saltElement.value ||= salt
        })

        document.getElementById("reset").addEventListener("click", function(e) {
            window.history.replaceState(null, null, window.location.pathname + window.location.hash)
        })

        // passwordElement.addEventListener("blur", function(e) {
        //     setValueOfFormField("password", sha256(passwordElement).toString())
        // })

        countryElement.addEventListener('input', function() {
            country = this.value
            try {
                phone = parsePhoneNumber(phoneElement.value, country)
            } catch {
            }
            finally {
                // console.log(phone.isValid() + ":" + (phoneElement.value.length > 8))
                if (phone.isValid() || phoneElement.value.length < 10) {
                    phoneElement.classList.remove("invalid")
                    if (phone.isValid()) {
                        phoneElement.value = phone.formatInternational()
                        country = phone.country
                    }
                } else {
                    phoneElement.classList.add("invalid")
                }
            }
        })

        phoneElement.addEventListener('input', function() {
            var element = this
            if (!phone.isValid()) country = countryElement.value
            this.value = new AsYouType(country).input(element.value)
            try {
                phone = parsePhoneNumber(element.value, country)
            } catch {
            }
            finally {
                // console.log(phone.isValid() + ":" + (element.value.length > 8))
                if (phone.isValid() || element.value.length < 10) {
                    element.classList.remove("invalid")
                    if (phone.isValid()) {
                        // console.log(phone.formatInternational())
                        country = phone.country
                    }
                    // console.log(country)
                } else {
                    element.classList.add("invalid")
                }
            }
        })

        // adjust textarea heights
        // $('textarea[max-rows]').each(function () {
        //     var textarea = $(this)

        //     var minRows = Number(textarea.attr('rows'))
        //     var maxRows = Number(textarea.attr('max-rows'))

        //     // clone the textarea and hide it offscreen
        //     // TODO: copy all the styles
        //     var textareaClone = $('<textarea/>', {
        //         rows: minRows,
        //         maxRows: maxRows,
        //         class: textarea.attr('class')
        //     }).css({
        //         position: 'absolute',
        //         left: -$(document).width() * 2
        //     }).insertAfter(textarea)

        //     var textareaCloneNode = textareaClone.get(0)

        //     textarea.on('input', function () {
        //         // copy the input from the real textarea
        //         textareaClone.val(textarea.val())

        //         // set as small as possible to get the real scroll height
        //         textareaClone.attr('rows', 1)

        //         // save the real scroll height
        //         var scrollHeight = textareaCloneNode.scrollHeight

        //         // increase the number of rows until the content fits
        //         for (var rows = minRows; rows < maxRows; rows++) {
        //             textareaClone.attr('rows', rows)

        //             if (textareaClone.height() > scrollHeight) {
        //                 break
        //             }
        //         }

        //         // copy the rows value back to the real textarea
        //         textarea.attr('rows', textareaClone.attr('rows'))
        //     }).trigger('input')
        // })
    }
})
