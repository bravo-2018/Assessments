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
