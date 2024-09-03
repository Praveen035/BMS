using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class AppConfiguration
    {
        public class BlobConfiguration
        {
            public string? StorageConnection { get; set; }

            public string? Container { get; set; }
        }
    }
}
