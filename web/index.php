<?php
//-- old code:
// include __DIR__ . '/actions.php';
// AngularJS front end
// include __DIR__ . '/views/add-user.html';

require_once __DIR__ . '/../vendor/autoload.php';

/** @var Silex\Application $app */
$app = require __DIR__ . '/../src/app.php';

require __DIR__ . '/../src/controllers.php';