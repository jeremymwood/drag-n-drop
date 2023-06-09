// $().ready(function() {
//     const draggables = $('.draggable');
    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.container');
    // const containers = $('.container');

    draggables.forEach( draggable => {
        draggable.addEventListener('dragstart', () => {
            $(draggable).addClass('dragging');
        })
        draggable.addEventListener('dragend', () => {
            $(draggable).removeClass('dragging');
        })
    });
// });