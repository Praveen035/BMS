using IService;
using Moq;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BMS.Test
{
    public class CalculatorTest
    {
        [Fact]
        public void AddPassingTest()
        {
            var calculator = new FakeCalculator();
            Assert.Equal(5, calculator.Add(3,2)); 
        }

        [Fact]
        public void AddFailingTest()
        {
            var calculator = new FakeCalculator();
            Assert.Equal(5, calculator.Add(3, 3));
        }

        [Fact]
        public void AddPassingMoqTest()
        {
            var calculator = new Mock<ICalculator>();  
            calculator.Setup(x => x.Add(2, 2)).Returns(4); 
            Assert.Equal(4, calculator.Object.Add(2, 2));
        }

        [Fact]
        public void MultiplicationPassingTest()
        {
            var cal=new FakeCalculator();              
            Assert.Equal(6,cal.Multiply(3,2));   
        }

        [Fact]
        public void MultiplicationFailingTest()
        {
            var cal=new FakeCalculator();
            Assert.Equal(6, cal.Multiply(3,3)); 
        }

        [Fact]
        public void MultiplicationMoqPassingTest()
        {
            var cal = new Mock<ICalculator>();
            cal.Setup(x => x.Multiply(3, 2)).Returns(6);
            Assert.Equal(6, cal.Object.Multiply(3, 2));
        }
    }
}
