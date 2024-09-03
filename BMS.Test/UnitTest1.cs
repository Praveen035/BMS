using IService;
using Moq;
using System.Diagnostics.CodeAnalysis;

namespace BMS.Test
{
    public class UnitTest1
    {
        [Fact]
        public void PassingTest()
        {
            Assert.Equal(4, Add(2, 2));
        }

        [Fact]
        public void FailingTest()
        {
            Assert.Equal(4, Add(5, 2));
        }

        public int Add(int x, int y)
        {
            return x + y;
        }

       
         [Fact]
         public void PassingCalTest()
         {
            //var calculator = new ICalculator();
            //Assert.Equal(4, calculator.Add(2, 2));

            var calculator = new Mock<ICalculator>();
            calculator.Setup(x => x.Add(2, 2)).Returns(4);
            Assert.Equal(4, calculator.Object.Add(2, 2));
        }
    }
}