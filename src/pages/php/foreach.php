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

    <?php
    $arr = [1 => "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    $letter_number = htmlentities($_POST["letter_number"]);

    foreach ($arr as $key => $elem) {
        echo $key . " - " . $elem . "<br>";
        if ($key >= $letter_number) break;
    }
    ?>

    
</body>
</html>