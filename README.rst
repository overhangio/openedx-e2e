Open edX end-to-end testing (beta)
==================================

This provides a way to simply and repeatably test live running `Open edX <https://open.edx.org>`_ instances.

Note: this is a **beta** release. It is functional, but there are very few tests for the moment. Feel free to contribute!

Installation
------------

::
  
  npm install
  
Running
-------

Edit a copy of ``cypress/fixtures/config.json.sample`` and save it to ``config.json``::
  
  cp cypress/fixtures/config.json.sample cypress/fixtures/config.json
  vim cypress/fixtures/config.json
  
Open cypress for development::
  
  make dev

In headless mode, run tests without the GUI::
  
  make test

This will generate video recordings of the tests in ``cypress/videos``. Amazing, isn't it?

How does it work?
-----------------

We use the awesome `Cypress <https://cypress.io>`_ testing framework to perform actions and test results on live-running Open edX instances. No destructive action is performed, so feel free to run this on your own platform.
  
Notes
-----

This work was inspired by `@silviot <https://github.com/silviot>`_ from `Abstract Tech <https://github.com/Abstract-Tech/>`_ to create an end-to-end test suite for Open edX.