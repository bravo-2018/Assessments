#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]


# your ruby loop here

tempArray.each { |x| puts x * 2}

or something like this

tempArray = [1, 2, 6, 9, 3, 21]

for i in tempArray do
  puts i * 2
end



#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

gets

This gets the user's input and saves it to a variables
for example

puts "what is your name?"
name = gets.chomp
puts "Hi #{name}"

new

if you have a new task that you are creating for a Task class you can say

newTask = Task.new(pass any required arguments here such as title in "")
p newTask

date

This is a built in fuction that displays the date.  First you have to require 'date'

require 'date'

Date.today

=>(2018-04-20)  for example


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.
#
# ``` ruby
class Example
  def initialize(day)
    @day = day
    @say_hi = say_hi
  end

# def day
#     @day
# end

  def say_hi
    if @day == "Friday"
        puts "TGIF!"
    elsif @day == "Monday"
        puts "Its monday again"
    else
        puts "another day"
    end
    end
end

example1 = Example.new("Tuesday")
p example1
