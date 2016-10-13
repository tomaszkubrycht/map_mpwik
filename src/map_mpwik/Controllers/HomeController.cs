using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using map_mpwik.models;

namespace map_mpwik.Controllers
{
    public class HomeController : Controller
    {
        private database db = new database();
        
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Wszyscy(string option, string search)
        {
            if (option == "Nazwisko")
            {
                var Kligocode = from s in db.kligocode select s;
                Kligocode = Kligocode.Where(s => s.imie.Contains(search.ToUpper()));
                return View(Kligocode.ToList());
            }
            else if (option == "Adres")
            {
                var Kligocode = from s in db.kligocode select s;
                Kligocode = Kligocode.Where(s => s.adres.Contains(search.ToUpper()));
                return View(Kligocode.ToList());
            }
            else
            {

                //var wszyscy = db.kligocode.ToList();
                return View(db.kligocode.ToList());
            }
        }
        public IActionResult KlienciBGeolok()
        {
            var Puste = db.puste.ToList();
            return View(Puste);
        }
        [HttpGet]
        public IActionResult klientind(int id)
        {

            var Kligocode = from s in db.kligocode select s;
            
            Kligocode = Kligocode.Where(s => s.nr_id == id);
           

            return View(Kligocode);
        }
        [HttpPost]
        public IActionResult klienci(string numer)
        {
            if (numer == null)
            {
                var klient = db.kligocode.ToList();
                return Json(klient);
            }
            else
            {
                int wynik;
                var Kligocode = from s in db.kligocode select s;
                int.TryParse(numer, out wynik);
                Kligocode = Kligocode.Where(s => s.nr_id == wynik);
                return Json(Kligocode.ToList());
            }
        }
        [HttpGet]
        public IActionResult klienci()
        {
                var klient = db.kligocode.ToList();
                return Json(klient);
            }
//        public IActionResult klienci()
        //{


        //    //   var klient = db.kligocode.ToList();
        //    //return Json(klient);
        //    return View();
        //}
        public IActionResult About()
        {
                    ViewData["Message"]= "Your application description page.";

            return View();
        }
        public IActionResult KlientDetails(int id)
        {
            ViewBag.iden = id;
            return View();
        }
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
