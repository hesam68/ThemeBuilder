$(document).ready(function () {

    var currentTargetDrag = "";
    var $iframe = $('iframe');

    setTimeout(() => {

        $(function () {
            $(".draggable").draggable({

                connectToSortable: $iframe.contents().find(".sortable").sortable({
                    revert: true,

                    placeholder: "drag-drop-placeholder",

                    start: function (event, ui) {
                        console.log();
                        ui.item.addClass("dragging").html("<h1>New Item</h1>");
                    },
                    drag: function (event, ui) {
                        ui.item.addClass("dragging").html("<h1>New Item</h1>");
                    },
                    stop: function (event, ui) {
                        ui.item.removeClass("dragging");
                    }
                }),

                helper: "clone",
                iframeFix: true,

                start: function (event, ui) {
                    
                },
                drag: function (event, ui) {
                },
                stop: function (event, ui) {
                },

                revert: true,
                cursor: "grabbing",

            });

            var droppableOptions = {
                classes: {
                    "ui-droppable-hover": "ui-state-hover"
                },
                drop: function(event, ui) {
                    if ($(this).hasClass('fixed')) {
                        $(this).addClass('bg-highlight');

                        var newElement = $("<div>").addClass("add-container").text("متن قدیم");
                        $(this).before(newElement);
                        newElement.droppable(droppableOptions);
                    } else {
                        $(this).addClass('bg-highlight');

                        var newElement = $("<div>").addClass("add-container").text("متن جدید");
                        $(this).before(newElement);
                        newElement.droppable(droppableOptions); 
                    }
                }
            };

            $iframe.contents().find(".droppable").droppable(droppableOptions);
           
            $iframe.contents().find(".sortable").disableSelection();

        });

    }, 1000);


});
