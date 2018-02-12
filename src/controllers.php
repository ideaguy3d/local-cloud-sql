<?php

namespace Google\Cloud\Samples\Bookshelf;

use Google\Cloud\Samples\Bookshelf\DataModel\DataModelInterface;

$email = isset($_GET['email']);
$addBook = isset($_GET['add-book']);
$getBooks = isset($_GET['get-books']);

if ($email) {
    echo 'Your email is = ' . $_GET['email'];
}

if ($addBook) {
    echo "add book? = " . $_GET['add-book'];
    /** @var DataModelInterface $model */
    //$model = $app['bookshelf.model'];
    //$model->create($book);

    echo "add book? = " . $_GET['add-book'] . "<br><br>";
}

if ($getBooks && $_GET['get-books'] == 'true') {
    $model = $app['bookshelf.model']($app);
    $books = $model->listBooks();

    echo print_r($books);
}

