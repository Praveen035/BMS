using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class AppConstant
    {

        public static string Tenant = "anttracker";
        public static string DateFormate = "dd/MM/yyyy";

        public static string EnvironmentName => Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? throw new ArgumentNullException("ASPNETCORE_ENVIRONMENT - is null in configuration.");
    }
}
