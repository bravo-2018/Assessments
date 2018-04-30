#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here

tempArray.each do |x|
  puts x * 2
end


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
flash[:notice]/flash[:alert] -- this is helpful because you dont have to set every message as an instance.

ex) if @example == "example"
    flash.now[:alert] = "Statement 1"

    else
    flash.now[:alert] = "Statement 2"

Saving params into cookies or session to use elsewhere in the code
cookies[:example] = params[:example] -- not sure if this was available in Javascript but it was newly discovered for me :)

Post method for forms, so that the information being submitted is hidden versus the get method.
<form action="register" method="post">...


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.
1. Class names should be capitalize
2. Method names should be lowercase (say_hi)
3. In if statement, it should be @day
4. {} are not needed, use do instead
5. elsif not elseif
6. Missing additional end

# ``` ruby
class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if (@day == "Friday")
      puts "TGIF!"

    elsif (@day == "Monday")
      puts "Its monday again"

    else
      puts "another day"
    end
  end
end
```
