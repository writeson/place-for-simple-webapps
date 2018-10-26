# Creating Single Page Web Applications

This repository contains all the content and code for the presentation I was going to give at the 2018-08-13 all-hands meeting. The presentation is completely contained within a Python/Flask server I built to both serve the presentation itself, and the example web application that would be developed during the presentation. 

In order to run the server and view the presentation you'll need to do a couple of things:

* The presentation server was built and tested with Python 2.7, though it should run with any version later than that.
* Once you clone this repository, you'll need to create a Python virtualenv to run it. That virtualenv needs to have the Flask module added to it.
* Enable your virtualenv: `source <path to virtualenv>/bin/activate`
* Change directory to where you have your repository clone.
* Run the server: `python presentation_server.py`
* For the presentation navigate to: `localhost:5000/presentation`
* For the various versions of the example app: `localhost:5000/version_*`, where `*` ranges from 1 - 8
