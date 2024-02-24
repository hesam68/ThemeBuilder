<?php
include_once 'includes/help.php';
include_once 'includes/controller.php';

?>


<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Builder</title>
    <link rel="stylesheet" href="assets/lib/bootstrap/bootstrap-grid.min.css">
    <link rel="stylesheet" href="assets/lib/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="d-flex flex-column">




    <section id="editor-body" class="d-flex flex-row flex-fill">
        <!-- <section id="editor-top-nav" class="d-flex flex-row justify-content-between">

            <div class="buttons d-flex align-items-center col-lg-1">
                <a href="#" class="btn">Widgets</a>
            </div>

            <div class="resposive d-flex align-items-center col-lg-5">
                <select id="res-status">
                    <option class="mobile">Mobile</option>
                    <option class="tablet">Tablet</option>
                    <option class="laptop">Laptop</option>
                    <option class="desktop">Desktop</option>
                    <option class="ultra-desktop">Ultra Desktop</option>
                </select>
            </div>

            <div class="status d-flex align-items-center justify-content-end col-lg-5">
                <a href="#" class="btn">Publish</a>
            </div>

            <div class="logo d-flex align-items-center justify-content-end col-lg-1">
                <img src="assets/images/logo.png" alt="logo" class="p-1">
            </div>

        </section> -->
        <div class="right-menu d-flex">

            <div class="widgets-tab d-flex flex-row justify-content-lg-start align-content-lg-start p-3 flex-wrap">

                <!-- <div class="widget draggable">HTML</div>
                    <div class="widget draggable">Heading</div>
                    <div class="widget draggable">Paragraph</div>
                    <div class="widget draggable">Image</div>
                    <div class="widget draggable">container</div> -->
                <?php get_widgets_list($widgets); ?>
            </div>

            <div class="tabs  d-flex flex-row justify-content-center flex-wrap">
                <div class="tab tab-style"></div>
                <div class="tab tab-options"></div>
                <div class="tab tab-global"></div>
            </div>

            <div class="content-style-tab  d-flex flex-row justify-content-center"></div>
            <div class="content-options-tab  d-flex flex-row justify-content-center"></div>
            <div class="content-global-tab  d-flex flex-row justify-content-center"></div>
        </div>

        <div class="iframe-section">
            <iframe src="includes/editor-templates/global.php" frameborder="0" class="p-2">

            </iframe>
        </div>

        <div class="leyers-tree"></div>

        <div class="editor-left-nav d-flex flex-column py-5">
            <a class="item layers d-flex flex-row justify-content-lg-between align-content-center">
                <p>Layers</p>
                <i class="fa-solid fa-layer-group"></i>
            </a>
            <a class="item folders d-flex flex-row justify-content-lg-between align-content-center">
                <p>Folders</p>
                <i class="fa-solid fa-folder"></i>
            </a>
        </div>
    </section>

    <link rel="stylesheet" href="/assets/lib/jquery-ui/css/jquery-ui.min.css">
    <script src="/assets/lib/jquery/jquery.min.js"></script>
    <script src="/assets/lib/jquery-ui/js/jquery-ui.min.js"></script>
    <script src="/assets/js/script.js"></script>

</body>

</html>