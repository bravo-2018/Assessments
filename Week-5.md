# Week 5 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

### 1. What are some advantages of using Ruby on Rails?
+It’s time-efficient.
+It’s consistent.
+It’s cost-effective.
+It provides excellent quality and promotes bug-free development.
+It’s scalable.
+It’s supported.
+It’s secure.

### 2. How does Ruby on Rails use the Model View Controller (MVC) framework?

+Models for handling data and business logic
+Controllers for handling the user interface and application
+Views for handling graphical user interface objects and presentatio

### 3. Using the information given, complete the steps for creating a new view in a rails app by filling in the blanks:

  1. Create a route:

  code:
  ```
  get '/about' => 'statics#about'
  ```
  file: config/routes
  get '/about' => 'statics#about'
+  get '/about' => 'statics#about'

  2. Create the __controller__________

  code:
  ```
  class __StaticsController__________ < ApplicationController

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

  file: ____views/statics/about.html.erb_________________


### 4. Look at these sets of Rails routes, they are an example of which principle/term that we touched on briefly in class? Find the term, and explain why it is important.

```+If you recall our earlier discussion about REST, there are basically seven main types of actions that you can do

/users/       method="GET"     # :controller => 'users', :action => 'index'
/users/1      method="GET"     # :controller => 'users', :action => 'show'
/users/new    method="GET"     # :controller => 'users', :action => 'new'
/users/       method="POST"    # :controller => 'users', :action => 'create'
/users/1/edit method="GET"     # :controller => 'users', :action => 'edit'
/users/1      method="PUT"     # :controller => 'users', :action => 'update'
/users/1      method="DELETE"  # :controller => 'users', :action => 'destroy'
```

### 5. What is the public folder used for in Rails?
The public directory contains some of the common files for web applications. By default.
### 6. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess"
get 'game/guess' => 'main#guess

### 7. What are cookies for? How do they work? What is the difference between a session and a cookie?
Cookies. Cookies are key-value data pairs that are stored in the user's browser until they reach their specified expiration date

### 8. In an html form, what does the "action" attribute tell you about the form?  How do you designate the HTTP verb for the form?
 attribute specifies where to send the form data ,this method
attribute lets you designate the form.

### 9. Why would you use an instance variable in a rails controller?
Declaring controller variables as instance variables makes them available in the view

### 10. Name two rails generator commands and what files they create:

### 11. Rails has a great community and lots of free tutorials to help you learn. Here is a list of some tutorials to choose from, choose one, do it, and then report back here at least one thing you learned. You can also use a different resource if you find one that you like better.

- https://www.tutorialspoint.com/ruby-on-rails/index.htm
- http://railsforzombies.org
- http://guides.rubyonrails.org/getting_started.html
