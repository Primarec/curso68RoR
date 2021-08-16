class MathDojo
  # tu codigo aqui

  # METODOS DE INSTANCIA
  attr_accessor :total

  def initialize()
    @total = 0
  end

  def add *params
    puts "Entrando a una suma con un total de #{@total}"
    sum = 0
    params.each { |i| 
      if i.is_a?(Fixnum)
          sum += i
      elsif i.is_a?(Array)
        sum += i.reduce(:+).to_f 
      end
    }
    @total += sum
    self
  end
    
   def subtract *params
    puts "Entrando a una resta con un total de #{@total}"
    res = 0
    params.each { |i| 
      if i.is_a?(Fixnum)
        res += i
      elsif i.is_a?(Array)
        res += i.reduce(:+).to_f 
      end
    }
    @total -= res
    self
  end

  def result
    puts "El resultado es : #{@total}"
  end
  
end

desafio1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
desafio2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15