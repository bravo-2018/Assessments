# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?

Ruby on Rails has been around forever The command line tools for generating a full set of controllers/views. Easy integration with a database like Postgresql.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

Rails uses a Class model to tie a database to the web application. The view is presented in the html.erb files within the views folder. The controller holds the logic accessed via the routes.

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the controller

  code:
  ```
  class StaticsController < ApplicationController

  def about
    render 'about'
  end
  ```

  file: app/controllers

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: view/statics


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

```
/users/       method="GET"     # :controller => 'users', :action => 'index'
/users/1      method="GET"     # :controller => 'users', :action => 'show'
/users/new    method="GET"     # :controller => 'users', :action => 'new'
/users/       method="POST"    # :controller => 'users', :action => 'create'
/users/1/edit method="GET"     # :controller => 'users', :action => 'edit'
/users/1      method="PUT"     # :controller => 'users', :action => 'update'
/users/1      method="DELETE"  # :controller => 'users', :action => 'destroy'
```
Restful routes. It's a shorthand way to get specific common methods that Rails recognizes and already has built out behind the scenes in the system.


### 5. What is the public folder used for in Rails?

Favicon, a few images, some error page templates


### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"

get 'game' => 'main#guess'

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?

Cookies are for storing information to allow it to be accessed in other pages within your application. Cookies are not stored in the URL like params are and they are not encrypted the way sessions are. They will persist for a specific amount of time (10 days maybe?) unless the time is delineated in the code. Sessions will stay until the browser window is closed.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?

The action tells you which route will be run when the form is submitted. You designate the HTTP verb by defining a method in the form header tag next to the action.

### 9. Why would you use an instance variable in a rails controller?

If you wanted the ability to use that variable in multiple functions within the controller.

### 10. Name two rails generator commands and what files they create:

rails g controller
Creates a controller with the methods specified, a test file, helper method, and view files to go along with the specified methods within a folder of the controller's name.

rails g model
generates a Class model in the models folder and creates the database table of the same name with the columns specified in the command.

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html
