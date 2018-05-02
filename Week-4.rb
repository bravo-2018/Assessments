#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]
newArray = []
tempArray.each do |num|
  newArray << 2*num
end
print newArray


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
chomp([rs]), chomp!([rs])
Removes off the line ending from the value of the variable

gsub(pattern[, replace]), gsub!(pattern[, replace])
Searches a string held in the variable $_ for a pattern, and if found, replaces all the occurrence of the pattern with the replace and returns the replaced string. gsub! modifies the original string in place, gsub makes copy, and keeps the original unchanged.

rand(max)
Returns a random integer number greater than or equal to 0 and less than the value of max. (max should be positive.) Automatically calls srand unless srand() has already been called.
If max is 0, rand returns a random float number greater than or equal to 0 and less than 1

  
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

