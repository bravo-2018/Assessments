#### 1. Use Ruby to loop over this array, multiplying each element by 2.
tempArray = [1, 2, 6, 9, 3, 21]
# your ruby loop here
tempArray.map! {|x| x*4}
p tempArray



#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
# your three built in ruby methods
#  #1 I really like the to_s method, especially in classes because it allows to return something other than the weird class info, or without needed an extra dot something (person1 instead of person1.info). Example:
class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def to_s
    "#{@name} is #{@age} years old"
  end

end

p1 = Person.new("Carl", 28)
puts p1
#outputs: "Carl is 28 years old"
# #2. Attr_accessor. The attribute accessor allows us to access (read and/or modify) instance variables in an instance of a class using dot notation.
# #3.  the to_i method is extremely useful in converting strings to integers and is quite handy when dealing with ruby in an html environment where nearly all variables are converted to strings.

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

# #ruby
class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if @day == "Friday"
      puts "TGIF!"
    elsif @day == "Monday"
      puts "It's monday again"
    else
      puts "another day"
    end
  end

end

test = Example.new("Friday")
test.say_hi
