<?php
  // Read .env
  try {
    $dotenv = new Dotenv\Dotenv(str_replace("build","",__DIR__));
    $dotenv->load();
  } catch(InvalidArgumentException $ex) {
    // Ignore if no dotenv
  }