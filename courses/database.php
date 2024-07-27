<?php

    //tell pdo
    $pdo = new PDO ('sqlite:web-dev-courses');

    //sql
    $statement = $pdo ->query("SELECT * FROM Courses");

    //run
    $rows = $statement-> fetchAll(PDO::FETCH_ASSOC);

    //ON SCREEN
    echo"<pre>";
    print_r($rows);
    echo"<pre>";

?>