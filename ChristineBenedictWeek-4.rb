#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]
tempArray.each do |x|
  x*2
end
# your ruby loop here

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods
.has_key? Checks to see if that specific key exists in the hash specified to the left of the period
params.has_key?(:name)

.sort_by() Creates a new array by sorting by a specific item that you designate, especially useful for sorting arrays containing hashes by a specific key shared between all the hashes
sorted_array = array.sort_by( |x| x.key )

.to_i Turns whatever is to the left of the period into an integer. Very useful if storing items in the browser because any number will be converted into a string. Adding this to the end of it will allow you to turn it back into an integer to use in formulas in the back end again

"8".to_i will equal 8

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class Example
  def initialize day
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
```
