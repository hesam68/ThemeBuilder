// $(document).ready(function () {
//     var currentTargetDrag = "";

//     // setTimeout(() => {

//     //     $('.iframe-section iframe').attr('src' , 'includes/editor-templates/global.php');
//     // }, 1000);

//     setTimeout(() => {
//         var $iframe = $('iframe');
//         $(function () {
//             $(".draggable").draggable({

//                 connectToSortable: $iframe.contents().find(".sortable").sortable({
//                     // items: "> div",
//                     //revert: true,

//                     placeholder: "drag-drop-placeholder",

//                     start: function (event, ui) {
//                         console.log();
//                         ui.item.addClass("dragging").html("<h1>New Item</h1>");
//                     },
//                     drag: function (event, ui) {
//                         ui.item.addClass("dragging").html("<h1>New Item</h1>");
//                     },
//                     stop: function (event, ui) {
//                         ui.item.removeClass("dragging");
//                     }
//                 }),

//                 helper: "clone",
//                 iframeFix: true,
//                 // helper: function (event) {
//                 //     return "<div class='custom-helper'>I move this</div>";
//                 // },
//                 // revert: "invalid",

//                 start: function (event, ui) {
//                     //currentTargetDrag = event.currentTarget;
//                     //console.log("Start : " + event);
//                 },
//                 drag: function (event, ui) {
//                     //var t = $(ui);
//                     //console.log(t);
//                     //console.log("Drag : " + event);
//                 },
//                 stop: function (event, ui) {
//                     /*var t = $(event);
//                     var t1 = $(ui);
//                     console.log(t);
//                     console.log(t1);*/
//                     //console.log("Stop : " + event);
//                 },
//                 refreshPositions: true,

//                 //revert: true,
//                 //cursor: "grabbing",
//                 //cursorAt: { top: 25, left: 25 }

//             });

//             var droppableOptions = {
//                 // tolerance: 'pointer',
//                 // tolerance: 'touch',
//                 tolerance: 'intersect',
//                 /*classes: {
//                     //"ui-droppable-active": "ui-state-active",
//                     //"ui-droppable-hover": "ui-state-hover"
//                 },*/
//                 hoverClass: 'hovering-droppable',
//                 // over: function (event, ui) {
//                 //     $(this).addClass('hover');
//                 //     console.log($(this));
//                 // }, out: function (event, ui) {
//                 //     $(this).removeClass('hover');
//                 // },
//                 drop: function (event, ui) {
//                     //debugger;
//                     //   $( this )
//                     //     .addClass( "ui-state-highlight" )
//                     //     .find( "p" )
//                     //       .html( "Dropped!" );
//                     // console.log(event);
//                     // console.log(ui);
//                     // $(this).addClass("dragging").html("<h1>New Item</h1>")
//                     if ($(this).hasClass('fixed')) {
//                         $(this).addClass('bg-highlight');

//                         var newElement = $("<div>").addClass("add-container").text("متن قدیم");
//                         // افزودن المان جدید به DOM
//                         $(this).before(newElement);
//                         // اعمال قابلیت draggable به المان جدید
//                         newElement.droppable(droppableOptions);
//                     } else {
//                         $(this).addClass('bg-highlight');

//                         var newElement = $("<div>").addClass("add-container").text("متن جدید");
//                         // افزودن المان جدید به DOM
//                         $(this).before(newElement);
//                         // اعمال قابلیت draggable به المان جدید
//                         newElement.droppable(droppableOptions);
//                     }
//                     //$(this).removeClass('hover');
//                 },
//             };

//             $iframe.contents().find(".droppable").droppable(droppableOptions);


//             $iframe.contents().find(".sortable").disableSelection();

//         });
//     }, 2000);
// });



$(document).ready(function () {

    var $iframe = $('iframe');

    setTimeout(() => {

        $(".draggable").draggable({
            helper: "clone",
            iframeFix: true,
            tolerance: "intersect",
            // appendTo: "main",
            snapTolerance: -50,
            snap: true,
            // tolerance: "pointer",

            /*start: function (event, ui) {
                //debugger;
                ui.position.top = -50;
                console.log("event : " + event);
                console.log("ui : " + ui);
                console.log("ui.helper : " + ui.helper);
                var offset = $(this).offset();
                console.log(offset.top);
                // ui.helper.css("top", offset.top - 50);
                //ui.helper( offset.top - 50);
            },*/

        });


        var droppableOptions = {
            // tolerance: 'intersect',
            hoverClass: 'hovering-droppable',

            /*over: function (event, ui) {

                // debugger;
                var newDiv = $(ui.helper).css({ position: 'absolute', left: 0, top: ui.offset.top - 12 });
                $(this).append(newDiv);

                ui.offset.top -= 50;
                ui.position.top -= 50;
                console.log("event : " + event);
                console.log("ui : " + ui);
                console.log("ui.helper : " + ui.helper);
                var offset1 = $(this).offset();
                var position1 = $(this).position();
                console.log(offset1.top);
                console.log(position1.top);
            },*/
            drop: function (event, ui) {

                // var draggableOffset = ui.draggable.offset();
                // var droppableOffset = $(this).offset();

                // if (draggableOffset.top > droppableOffset.top + ($(this).height() / 2)) {
                //     ui.draggable.appendTo(this);
                // }

                //ui.offset.top -= 50;

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
            },
        };

        //After frame loaded
        // $(".iframe-target").attr('src', 'includes/editor-templates/global.php').load(function () {
        $iframe.contents().find(".droppable").droppable(droppableOptions);
        // });
        // $iframe.contents().find(".sortable").disableSelection();




    }, 2000);




});
