# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
A: All-in-One type functionality, where you are able to create full web applications with model view controllers.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
Ruby uses the MVC to create applications. It uses the model to create and manage databases, view to create what the user sees, and uses controllers to interact with the application. Controllers are like the brain of applications.

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes

  2. Create the Controller

  code:
  ```
  class Cars < ApplicationController

  def about
    _______________________
  end
  ```

  file: Cars.rb

  3. Create the View

  code:

  ```
  <div>This is the About page!</div>
  ```

  file: view.html.erb


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.
These methods are examples of CRUD (Create, Read, Update, Delete)
Create: GET (gets all info from database or ID)
Read: Accessing info in a database
Update: Updating information in database
Delete: Deletes information from database

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
A: The public folder is used for static pages. These are "dumb components" because they do not interact with the back end of the application.

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"
A: get '/main' => 'main#game'  ** I'm not sure about this one..

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
A: Cookies are used to save the users inputed information to the browser. The session is different because sessions are only saved on the client side, opposed to the browser.

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
A: The action attribute is used to send the information to a designated url or path, once the form has been submitted. You designate HTTP Verbs by using the method. such as method="post" or "get".

### 9. Why would you use an instance variable in a rails controller?
A: You would use an instance variable to save information for future use. You can use the variables in any method you create, and/or html files connected to the controller.

### 10. Name two rails generator commands and what files they create:
rails g controller Cars create //This creates a controller called "Cars" and a method called "create"

rails g rspec:abc abc //This creates a RSpec spec file for the model abc

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html
