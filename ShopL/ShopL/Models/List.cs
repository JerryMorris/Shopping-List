using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopL.Models
{
    public class List : Audit
{

        public int Id { get; set; }
        public int Quantity { get; set; }
        public string ItemName { get; set; }
        public string Store { get; set; }



    }

}