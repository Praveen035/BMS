using Xunit;

namespace BMS.Test
{
	public class Tests
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
    }
}