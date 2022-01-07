<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link rel="stylesheet" href="../../src/css/style.css">
    <link rel="stylesheet" href="../../src/css/fonts.css">
    
    
</head>
<body>

<header class="header light">
    <a href="../../index.html" class="logo">My Mind Palace</a>
    <nav class="nav">
        <a href="html.html" class="nav__button button">
            <span>HTML</span>
        </a>
        <a href="html5.html" class="nav__button button">
            <span>HTML 5</span>
        </a>
        <a href="css.html" class="nav__button button">
            <span>CSS</span>
        </a>
        <a href="css_architecture.html" class="nav__button button">
            <span>CSS Architecture</span>
        </a>
        <a href="dom.html" class="nav__button button">
            <span>DOM</span>
        </a>
        <a href="javascript.html" class="nav__button button">
            <span>javascript</span>
        </a>
        <a href="#.html" class="nav__button button">
            <span>PHP</span>
        </a>
        <a href="git.html" class="nav__button button">
            <span>Git</span>
        </a>
    </nav>
</header>

<main class="main light">
    <div class="title-main inline-content text-font-family-Indie-Flower">
        <span>PHP</span>
    </div>

    <article class="main__article">

        <!-- foreach   -->
        <section class="section box-flex-column">
            <div class="title-section inline-content text-font-family-Indie-Flower">Foreach</div>
            <div class="text-small">
                <div class="text-small-header">Source:</div>
                <a class="text-small-link" target="_blank" rel="noopener" href="http://code.mu/ru/php/book/prime/loops/foreach-keys/">code.mu</a>
            </div>
            <div class="content-section">
                <code>

                    <?php
                    $arr = [1 => "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                    $letter_number = htmlentities($_POST["letter_number"]);

                    foreach ($arr as $key => $elem) {
                        echo $key . " - " . $elem . "<br>";
                        if ($key >= $letter_number) break;
                    }
                    ?>
                    
                </code>
                <div class="button column-content" ><span>back...</span></div>

            </div>
        </section>






    
</body>
</html>