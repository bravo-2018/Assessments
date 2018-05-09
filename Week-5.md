# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?



Nice fullstack framework for an all in one -  Model, View, Controller where you can build your logic in the controller (and some logic that deals with your database in the model), decide how you want it to display in view and build your database in the model. Also nice for testing with Cabybara, Rspec and others.

Rather than rely on the web server to control URL routing, Rails handles routing via the config/routes.rb file.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
See above :-)


### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the ___controller_________

  code:
  ```
  class ____________ < ApplicationController

  def about
    _______________________
  end
  ```

  file: _____________________

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: _____________________


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

These are defined routes for all the RESTful (Representational State Transfer) actions


```
/users/       method="GET"     # :controller => 'users', :action => 'index'
/users/1      method="GET"     # :controller => 'users', :action => 'show'
/users/new    method="GET"     # :controller => 'users', :action => 'new'
/users/       method="POST"    # :controller => 'users', :action => 'create'
/users/1/edit method="GET"     # :controller => 'users', :action => 'edit'
/users/1      method="PUT"     # :controller => 'users', :action => 'update'
/users/1      method="DELETE"  # :controller => 'users', :action => 'destroy'
```

### 5. What is the public folder used for in Rails?

Usually used for static content (dumb files) such as a favicon files that don't interact or rely on the backend in any way.  

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

get '/game' => main#guess

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

Since the variables that are created in the controller are instance variables, cookies allows us to store the variable in order to use it on other parts of the site.  For example, a  'guess the number' game might create a random number and need to store that number until a user guesses correctly.

A session is a way to store something for the duration of a session.  For example, a user might sign in with a username and password and this information would need to be stored for the duration of that user's session.

I think the difference between a cookie and a session is the way in which the information is stored and how it is removed.  But I'll need to look this info up .....

Yes, it seems from my search that cookies store information in the browser as a text file format, stores a limited amount of data and is less secure, whereas a session stores information on the server, stores unlimited amount of data is more secure.  

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

The form action tells you where (wether an absolute url(points to another website) or relative URL (points to page within the website)) to send the form data when the form is submitted.

You designate the HTTP verb by specifying the method.  For example method = "GET" or method = "POST"


Form example from the full stack day lesson...

<form action="register" method="GET">
  <input type="text" name="full_name" placeholder="Full Name" autofocus required/>
  <input type="text" name="street_address" placeholder="Street Address" required/>
  <input type="text" name="city" placeholder="City" required/>
  <input type="text" name="email" placeholder="Your email" required/>
  <input type="submit" value="Register" />
</form>

### 9. Why would you use an instance variable in a rails controller?

Instance variables are used to initialize an instance of a particular action - creating a new user for example.  Instance variables can then be used in all methods that pertain to that controller.  They can be reused since no information is being stored in a long term variable.  

### 10. Name two rails generator commands and what files they create:

rails generate (or rails g) model (add attribute and value type)

creates.....
 an .rb file in models
a migrate file in database folder
a testing file (spec) in models

rails generate controller

creates.....
a controller file
a view file
a functional test file
a helper for the view
a JavaScript file
a stylesheet file.


### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

LOVE the zombie tutorial.  :-)

Hash - multiply keys and values surrounded by curly braces.
b = { id = 3,
status = "I just ate some brains"
zombie = "Jim"}

to get items out of a hash....

b[zombie] + " said " b[status] => "Jim said I just ate some brains"

variable[:key] => value

can pull out values from a table by assigning to a variable

T = Tweet.find(3)   goes to the lowercase plural table 'tweets' finds id 3 so
t.id
t.status
t.zombie

tweet.new needs to be saved
Tweet.create  - creates and saves 
