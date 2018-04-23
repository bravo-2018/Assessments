#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

Using map
multArray = tempArray.map { |i| i * 2 }
puts multArray

using while

i = 0
while i < tempArray.length do
   multArray << tempArray[i] * 2
   i +=1
end


end

# your ruby loop here

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

Map & filter from Array...
multArray = tempArray.map { |i| i * 2 }
puts multArray

above code outputs array with each value muliplies by 2

to_s and to_i

converts integer to string .. string numbers to intester

5.to_s
"10".to_i





#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class example
  def initialize(day)
    @day=day
  end

  def Say_hi
    if(@day == "Friday"){
      puts "TGIF!"
    }
    elsif(@day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
```

class Test

  def initialize(day)
    @day=day
  end

  def Say_hi
    if(@day == "Friday")
      puts "TGIF!"
    elsif(@day == "Monday")
      puts "Its monday again"
    else
      puts "another day"
    end
  end

end


e = Test.new("Monday")
e.Say_hi
