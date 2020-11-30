$('form').on('submit', function (e) {
  e.preventDefault()
  $.ajax({
    url: '/customers',
    type: 'POST',
    data: $(this).serialize(),
    success: function (data) {
      $('.status').append('<h3>' + data + '</h3>')
      $('#banner').show()
    }
  })
})
