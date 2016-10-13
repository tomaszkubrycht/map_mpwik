using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace map_mpwik.models
{
    public partial class puste
    {
        [Key]
        public int nr_id { get; set; }
        public string imie { get; set; }
        public string adres { get; set; }
        public string longi { get; set; }
        public string lat { get; set; }

    }
}
