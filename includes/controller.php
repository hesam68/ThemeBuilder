<?php
// debugger(dirname(__DIR__));
// debugger(dirname(__FILE__));

$stringStyles = file_get_contents(dirname(__DIR__) . "/assets/file/styles.json");
$stringWidgets = file_get_contents(dirname(__DIR__) . "/assets/file/widgets.json");

$styles = json_decode($stringStyles, true);
$widgets = json_decode($stringWidgets, true);

// debugger($styles);
// debugger($widgets);

function get_widgets_list($widgets)
{
    foreach ($widgets["widgets"] as $key => $value): ?>
        <div class="widget draggable" data-id="<?php echo $value['id']; ?>">
            <?php echo $value['name']; ?>
        </div>
    <?php endforeach;
}
