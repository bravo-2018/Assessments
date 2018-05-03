# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
  "Convention over configuration," Ruby on Rails has lots of gems and allows for fast development. It also has a strong community and lots of resources for learning it.  Personally, I also think it's a well-written language and is user-friendly.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?
  Rails's Model is ActiveRecord, the View is ActionView, and the Controller is ActionController.
  
  From https://www.tutorialspoint.com/ruby-on-rails/rails-framework.htm:
  Ruby on Rails MVC Framework
  Model (ActiveRecord )
  It maintains the relationship between the objects and the database and handles validation, association, transactions, and more.

  This subsystem is implemented in ActiveRecord library, which provides an interface and binding between the tables in a relational database and the Ruby program code that manipulates database records. Ruby method names are automatically generated from the field names of database tables.

  View ( ActionView )
  It is a presentation of data in a particular format, triggered by a controller's decision to present the data. They are script-based template systems like JSP, ASP, PHP, and very easy to integrate with AJAX technology.

  This subsystem is implemented in ActionView library, which is an Embedded Ruby (ERb) based system for defining presentation templates for data presentation. Every Web connection to a Rails application results in the displaying of a view.

  Controller ( ActionController )
  The facility within the application that directs traffic, on the one hand, querying the models for specific data, and on the other hand, organizing that data (searching, sorting, messaging it) into a form that fits the needs of a given view.

  This subsystem is implemented in ActionController, which is a data broker sitting between ActiveRecord (the database interface) and ActionView (the presentation engine).

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

    Hmmm, shouldn't a static page just be a simple html file in the public folder?  Here are my fill-in answers anyway:
    
  1. Create a route: 
  
  code: 
  ```
  get '/about' => 'statics#about' 
  ```
  file: config/routes.rb
  
  2. Create the ___controller_________
  
  code: 
  ```
  class __StaticsController__________ < ApplicationController
  
  def about 
    ____render "statics.html.erb"___________________
  end
  ```
  
  file: ___app/controllers/statics_controller.rb__________________
  
  3. Create the View
  
  code: 
  
  ```
  <div>This is the About page!</div>
  ```
  
  file: ___app/views/statics/about.html.erb__________________
  
  
### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

```
/users/       method="GET"     # :controller => 'users', :action => 'index'     # READ
/users/1      method="GET"     # :controller => 'users', :action => 'show'      # READ
/users/new    method="GET"     # :controller => 'users', :action => 'new'       # READ
/users/       method="POST"    # :controller => 'users', :action => 'create'    # CREATE
/users/1/edit method="GET"     # :controller => 'users', :action => 'edit'      # READ
/users/1      method="PUT"     # :controller => 'users', :action => 'update'    # UPDATE
/users/1      method="DELETE"  # :controller => 'users', :action => 'destroy'   # DESTROY
```

### 5. What is the public folder used for in Rails?
  To contain simple static html pages

### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"
  get '/game' => 'main#guess'
  
### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
  A cookie saves data between page refreshes but leaves the data unencrypted.  A session will encrypt the data but will only last during that session. 

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
  The action attribute tells you where the form-data is sent when the form is submitted. You designate the HTTP verb right after you specify the action.  For example:
  <form action='/foo' method='post'>

### 9. Why would you use an instance variable in a rails controller?
  

### 10. Name two rails generator commands and what files they create:
  1) Controller generator will create a controller file, a view file, a test file, a helper for the view, a JS file and a stylesheet file.
  2) Model generator will create Active Records files

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better. 

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html

From tutorialspoint, I learned how to create Active Record Files on Rails and how to use the model generator to generate them for me.
