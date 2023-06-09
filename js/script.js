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

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            // console.log(afterElement)
            if (afterElement == null) {
                container.appendChild(draggable)
            } else {
                container.insertBefore(draggable, afterElement)
            }
            // container.appendChild(draggable)
        })
    })

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            // console.log(offset)
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }
// });