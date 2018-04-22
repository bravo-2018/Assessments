#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.each do |i|
  puts i * 2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# your three built in ruby methods

# Method 1
100.times do
    if count(i) % 3 == 0 && count(i) % 5 == 0
            print "FizzBuzz \n"
            i = count(i)
    elsif count(i) % 3 == 0
            print "Fizz \n"
            i = count(i)
    elsif count(i) % 5 == 0
            print "Buzz \n"
            i = count(i)
    else
            print "#{count(i)} \n"
            i = count(i)
    end
end

#Method 2
def sum_these_numbers(i,s)
    i + s
end

def is_even(i)
    if i % 2 == 0
        print "True"
    else
        print "False"
    end

#Method 3

array = ["Star Wars", "Pulp Fiction", "Cinderella", "Indiana Jones"]
array2 = array[0..2]

i = 0
def count(i)
    i = i + 1
end

20.times do
    print "#{count(i)} \n"
    i = count(i)
end



#### 3. Look at this horrible ruby code, and fix it to be good ruby code.


class Example
  def initialize(day)
    @day = day
  end

  def say_hi
    if @day == "Friday"
      puts "TGIF!"
    elsif @day == "Monday"
      puts "It's Monday again"
    else
      puts "another day"
    end
  end
end

example = Example.new("Monday")
puts example.say_hi
