#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

# your ruby loop here
for-loop

tempArray.each do |number|
  puts "#{number*2}"
end

or

tempArray.each{|i| puts "#{i*2}"}


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

.split

.map

.filter


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(day == "Friday"){
      puts "TGIF!"
    }
    elseif(day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
```

# fixed ruby code

class Example
  def initialize (day)
    @day = day
  end

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

# to test in terminal

day1 = Example.new("Friday")
day1.say_hi
TGIF!
