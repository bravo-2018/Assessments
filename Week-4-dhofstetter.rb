#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

for i in temparray do
  puts i * 2
end

# your ruby loop here

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.
  attr_accessor
  super
  parse.date - This makes dealing with dates some much easiler.  ß
# your three built in ruby methods
class Tasklist
  attr_accessor :taskarray, :tasklist
  def initialize
    @taskarray = Array.new
  end

  class Tata < Car
     def initialize (model, year)
        super model, year
    end
    def acceleration
      @speed = 2
    end
    def brake
      @speed = 1.25
    end
  end

  class DueDateTask < Task
  attr_accessor :duedate
  def initialize(title,status,duedate)
  super(title,done,status)
  @duedate = Date.parse(duedate)
  @sortArray = []
  end
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
    elseif(@day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
  end
end
```
