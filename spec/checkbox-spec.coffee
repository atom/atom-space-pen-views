{$, $$} = require '../lib/main'

describe "Checkboxes", ->
  ffit "allows them to be toggled via the 'checked' attribute", ->
    window.debugContent = true

    div = $$ ->
      @div =>
        @input type: 'checkbox'

    $('#jasmine-content').append(div)
    div.find('input').attr('checked', 'checked')
