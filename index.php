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


<body class="editor-body">
    <div class="editor-header-wrapper">
        <header class="header-wrapper">

            <div class="btns-wrapper">
                <a href="" class="widgets-list">Widgets List</a>
                <a href="" class="tree-list">Tree List</a>
            </div>

            <div class="responsiv-wrapper">
                <select id="res-status">
                    <option class="mobile">Mobile</option>
                    <option class="tablet">Tablet</option>
                    <option class="laptop">Laptop</option>
                    <option class="desktop">Desktop</option>
                    <option class="ultra-desktop">Ultra Desktop</option>
                </select>
            </div>

            <div class="status-wrapper">
                <a href="#" class="btn">Publish</a>
            </div>

            <div class="logo-wrapper">
                <img src="assets/images/logo.png" alt="logo" class="p-1">
            </div>

        </header>
    </div>

    <main class="editor-main-wrapper">
        <aside class="right-menu">

            <div class="widgets-tab">

                <div class="widget draggable">HTML</div>
                <!-- <div class="widget draggable">Heading</div>
                <div class="widget draggable">Paragraph</div>
                <div class="widget draggable">Image</div>
                <div class="widget draggable">container</div> -->
            </div>

            <div class="tabs">
                <div class="tab tab-style"></div>
                <div class="tab tab-options"></div>
                <div class="tab tab-global"></div>
            </div>

            <div class="content-style-tab"></div>
            <div class="content-options-tab"></div>
            <div class="content-global-tab"></div>
        </aside>
        <div class="iframe-section">
            <iframe src="includes/editor-templates/global.php" frameborder="0" class="iframe-target"></iframe>
            <!-- <iframe src="" frameborder="0" class="iframe-target"></iframe> -->
        </div>
    </main>


    <link rel="stylesheet" href="/assets/lib/jquery-ui/css/jquery-ui.min.css">
    <script src="/assets/lib/jquery/jquery.min.js"></script>
    <script src="/assets/lib/jquery-ui/js/jquery-ui.min.js"></script>
    <script src="/assets/js/script.js"></script>

</body>

</html>