#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

puts tempArray.map { |n| n * 2 }


#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

1. I think the .map, each, and string interpolation are helpful. Examples below:

tempArray = [1, 2, 6, 9, 3, 21]
puts tempArray.map { |n| n * 2 }

first_names = [ "Joe", "John", "Jill", "Jerry"]
first_names.each { |name|
  name
}
puts name

a = 1
b = 4
puts "The number #{a} is less than #{a + b}"


#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Example
  def initialize(day)
    @day = day
  end

  def Say_hi
    if day == "Friday"
      puts "TGIF!"

    elsif day == "Monday"
      puts "Its monday again"

    else
      puts "another day"
  end
end
