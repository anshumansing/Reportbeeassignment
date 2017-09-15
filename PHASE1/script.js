

// Button Clicks for GridViews and ListViews
$('#grid').on('click', function () {
  $('#container ul').removeClass('list').addClass('grid');
});

$('#list').on('click', function () {
  $('#container ul').removeClass('grid').addClass('list');
});


