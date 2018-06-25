function dragStart(event, ui){
    console.log('dragStart', event, ui)
}

function dragStop(event, ui){
    console.log('dragStop', event, ui)
}

function revertDrop(){
    console.log('revertDrop', arguments);
    return false;
}

$( function() {
    $( ".piece" ).draggable({
	containment : '#board',
	cursor : 'crosshair',
	start : dragStart,
	stop : dragStop,
	revert :revertDrop,
	grid : [ 45, 45 ]
    });
    $( ".square" ).droppable({
	accept : '.piece'
    });
});
