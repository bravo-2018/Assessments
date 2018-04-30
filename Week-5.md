# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
It’s time-efficient.
It’s consistent.
It’s cost-effective.
It provides excellent quality and promotes bug-free development.
It’s scalable.
It’s supported.
It’s secure.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework
MVC is a pattern for the architecture of a software application. It separates an application into the following components:

Models for handling data and business logic
Controllers for handling the user interface and application
Views for handling graphical user interface objects and presentation

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes.rb

  2. Create the Controller

  code:
  ```
  class StaticsController < ApplicationController

  def about
  end
  ```

  file: controllers/statics_controller.rb

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: views/statics/about.html.erb


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

RESTful Routes
If you recall our earlier discussion about REST, there are basically seven main types of actions that you can (and should) do to a “resource”, or an object like a blog post or user… something with its own database model.

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
The public directory contains some of the common files for web applications. By default, HTML templates for HTTP errors, such as 404, 422 and 500. Files that don't normally change

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

+get 'game/guess' => 'main#guess'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
Cookies are computer files that hold data belonging to a specific user or
website. They can be accessed by web servers and allow webpages to display
user-specific information, such as that user's name or username. Cookies contain key-value pairs. By default, they expire when the browser is closed but can be made to persist for longer than that. Data is stored inside a cookie typically on page loading. For example, when someone submits a login form, information about that user is stored inside a cookie to prevent that person from having to log in again the next time they visit that page.

Cookies are stored in the browser, session data is stored on the server,
so sessions are more secure.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
This attribute specifies where to send the form data on submission. The "method"
attribute lets you designate the HTTP verb for the form.

### 9. Why would you use an instance variable in a rails controller?
Declaring controller variables as instance variables makes them available in the view.


### 10. Name two rails generator commands and what files they create:

`rails generate migration`

This will create a file inside the db/migrate directory. The file name will
begin with a timestamp corresponding to when the migration was generated. Rails
will use the timestamps when determining the order in which to run the
migration files. Depending on what arguments, if any, were passed to the
`rails generate migration` command, the migration file will either contain
an empty "change" method or the appropriate statements for whatever changes you
wanted to make to the database.

`rails generate controller <name of Controller> <name of action>`

If we wanted to create a controller named Users with a "register" action, this
command would create a controller file named `users_controller.rb`, a view file
named `register.html.erb`, a test file, a helper file, a CoffeeScript file, and
a stylesheet. It would also create a route that gets "users/register".



### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

We can perform validation within our Model classes. For example, if we have a
users table that contains a email column that cannot be null, then we can add
`validates_presence_of :email` to the User model. This will make sure that when
a user fills out the registration form, the email field cannot be left empty.
